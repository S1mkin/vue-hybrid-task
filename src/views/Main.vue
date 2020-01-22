<template>
  <div class="articles">
    <v-container class="articles__header" align-center justify-center>
      <h1 class="headline font-weight-bold text-center mt-10 mb-4">
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
            @input="SET_ARTICLES_SEARCH_PARAM"
            class="articles__header__search-input"
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
            @click="SET_ARTICLES_SORT_ASC"
            ><v-icon color="purple">mdi-swap-vertical</v-icon>
            <span v-html="articles_sort_asc ? 'Old' : 'New'"></span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="articles__items">
      <v-row no-gutters v-if="GET_ARTICLES.length == 0">
        <v-col cols="12" class="text-center">
          <p class="ma-6" color="gray">Not Found</p>
        </v-col>
      </v-row>

      <v-card
        v-for="(article, key) in GET_ARTICLES"
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
    GET_ARTICLES() {
      return this.$store.getters.GET_ARTICLES;
    }
  },
  methods: {
    SET_ARTICLES_SEARCH_PARAM() {
      this.$store.commit("SET_ARTICLES_SEARCH", {
        articles_search: this.search_articles
      });
      return this.search_articles;
    },
    SET_ARTICLES_SORT_ASC() {
      this.articles_sort_asc = !this.articles_sort_asc;
      this.$store.commit("SET_ARTICLES_SORT_ASC", {
        articles_sort_asc: this.articles_sort_asc
      });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
$height_header: 165px;

.articles {
  &__header {
    position: fixed;
    top: 0;
    width: inherit;
    height: $height_header;
    z-index: 2;
    background-color: $main-bg-color;
    box-shadow: 0 8px 2px -4px rgba(0, 0, 0, 0.1);
    padding-bottom: 0;
    &__search-input {
      .v-icon {
        color: purple !important;
      }
    }
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
