<template>
  <div class="articles">
    <v-container class="articles__header" align-center justify-center>
      <h1 class="headline font-weight-bold text-center mt-2 mb-4">
        Articles
      </h1>

      <v-row no-gutters>
        <v-col cols="8">
          <v-text-field
            v-model="search_articles"
            rounded
            filled
            clearable
            background-color="#FFF"
            hide-details="true"
            prepend-inner-icon="search"
            placeholder="Search"
            @input="set_articles_search_param"
          >
          </v-text-field>
        </v-col>
        <v-col cols="4" class="text-right">
          <v-btn
            depressed
            x-large
            rounded
            color="#FFF"
            class="text-capitalize ml-2"
            @click="set_articles_sort_asc"
            ><v-icon dark>mdi-swap-vertical</v-icon>
            <template v-if="articles_sort_asc">Old</template>
            <template v-else>New</template>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="articles__items">
      <v-card
        v-for="(article, key) in get_articles"
        :key="key"
        color="transparent"
        class="articles__items__row mb-2"
        outlined
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-1" size="80" tile>
            <v-img height="80" width="80" :src="article.image"></v-img>
          </v-avatar>

          <v-card-text class="pt-1">
            <div class="caption font-weight-bold indigo--text">
              {{ article.category }}
            </div>
            <h2 class="articles__items__row__title subtitle-2 mt-1 mb-1">
              {{ article.title }}
            </h2>
            <div class="overline grey--text">
              {{ article.date }}
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      search_articles: null,
      articles_sort_asc: false
    };
  },
  computed: {
    get_articles() {
      return this.$store.getters.get_articles;
    }
  },
  methods: {
    set_articles_search_param() {
      this.$store.commit("set_articles_search", {
        articles_search: this.search_articles
      });
      return this.search_articles;
    },
    set_articles_sort_asc() {
      this.articles_sort_asc = !this.articles_sort_asc;
      this.$store.commit("set_articles_sort_asc", {
        articles_sort_asc: this.articles_sort_asc
      });
      return this.articles_sort_asc;
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
$height_header: 125px;

.articles {
  &__header {
    position: fixed;
    top: 0;
    left: 0;
    height: $height_header;
    z-index: 2;
    background-color: $main-bg-color;
    box-shadow: 0 4px 8px -4px gray;
    padding-bottom: 0;
  }

  &__items {
    padding-top: $height_header;
    &__row {
      &__title {
        line-height: 1.4em;
      }
    }
  }
}
</style>
