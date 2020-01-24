<template>
  <div class="articles">
    <v-container class="articles__header" align-center justify-center>
      <h1 class="headline font-weight-bold text-center mb-4">
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
            rounded
            color="#FFF"
            height="46px"
            width="90px"
            class="text-capitalize ml-2"
            @click="SET_ARTICLES_SORT_ASC"
            ><v-icon color="purple">mdi-swap-vertical</v-icon>
            <span v-html="articles_sort_asc ? 'Old' : 'New'"></span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="articles__items">
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

            <v-tooltip bottom width="100%">
              <template v-slot:activator="{ on }">
                <h2
                  class="articles__items__row__title subtitle-2 mt-1 mb-1"
                  v-on="on"
                >
                  {{ article.title }}
                </h2>
              </template>
              {{ article.text }}
            </v-tooltip>

            <div class="overline grey--text">
              {{ article.date | DATE_TO_STR }}
            </div>
          </v-card-text>
        </div>
      </v-card>

      <v-row no-gutters>
        <v-col cols="12" class="articles__items__after text-center">
          <p
            class="ma-6"
            v-text="
              GET_ARTICLES.length == 0 ? 'Not Found' : 'The end of the list'
            "
          ></p>
        </v-col>
      </v-row>
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
  },
  filters: {
    DATE_TO_STR(value) {
      if (value instanceof Date) {
        return value.toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        });
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
$height_header: 165px;

.articles {
  &__header {
    position: sticky;
    top: 0;
    width: 100%;
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
    &__row {
      &__title {
        line-height: 1.4em;
      }
    }
    &__after {
      font-size: 14px;
      line-height: 140%;
      color: #cca4a4;
      font-weight: 600;
    }
  }
}
</style>
