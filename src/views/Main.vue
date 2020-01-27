<template>
  <div class="articles">
    <v-container
      class="articles__header"
      :class="scrollY > 0 ? 'articles__header-shadow-bottom' : ''"
      align-center
      justify-center
    >
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
            class="articles__header__sort text-capitalize ml-2"
            @click="SET_ARTICLES_SORT_ASC"
          >
            <span
              class="svg-icon-wrap"
              :class="
                articles_sort_asc
                  ? 'articles__header__sort__arrow-left'
                  : 'articles__header__sort__arrow-right'
              "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 5.41421L17 15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15L15 5.41421L12.7071 7.70711C12.3166 8.09763 11.6834 8.09763 11.2929 7.70711C10.9024 7.31658 10.9024 6.68342 11.2929 6.29289L15.2929 2.29289C15.6834 1.90237 16.3166 1.90237 16.7071 2.29289L20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711C20.3166 8.09763 19.6834 8.09763 19.2929 7.70711L17 5.41421Z"
                  fill="#1F263C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 18.5858L7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9L9 18.5858L11.2929 16.2929C11.6834 15.9024 12.3166 15.9024 12.7071 16.2929C13.0976 16.6834 13.0976 17.3166 12.7071 17.7071L8.70711 21.7071C8.31658 22.0976 7.68342 22.0976 7.29289 21.7071L3.29289 17.7071C2.90237 17.3166 2.90237 16.6834 3.29289 16.2929C3.68342 15.9024 4.31658 15.9024 4.70711 16.2929L7 18.5858Z"
                  fill="#ACB3DA"
                />
              </svg>
            </span>
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
  name: "articles",
  created() {
    window.addEventListener("scroll", this.ON_SCROLL);
  },
  destroyed() {
    window.removeEventListener("scroll", this.ON_SCROLL);
  },
  data() {
    return {
      search_articles: null,
      articles_sort_asc: false,
      scrollY: 0
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
    },
    ON_SCROLL() {
      this.scrollY = window.scrollY;
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
.articles {
  &__header {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 2;
    background-color: $main-bg-color;
    padding-bottom: 0;
    &__search-input {
      .v-icon {
        color: #1f263c !important;
      }
    }
    &__sort {
      justify-content: left;
      min-width: 90px !important;

      &__arrow-left {
        path {
          &:first-child {
            fill: #acb3da;
          }
          &:last-child {
            fill: #1f263c;
          }
        }
      }

      &__sort__arrow-right {
        path {
          &:last-child {
            fill: #acb3da;
          }
          &:first-child {
            fill: #1f263c;
          }
        }
      }
    }
  }
  &__header-shadow-bottom {
    box-shadow: 0 8px 8px 1px rgba(0, 0, 0, 0.1);
  }

  &__items {
    margin-bottom: 50px;
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
