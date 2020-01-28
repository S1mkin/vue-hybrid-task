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
              <icon-base
                width="24"
                height="24"
                viewBox="0 0 24 24"
                icon-name="2Arrow"
                ><icon-2Arrow
              /></icon-base>
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
            <div class="articles__items__row__category">
              {{ article.category }}
            </div>

            <v-tooltip bottom width="100%">
              <template v-slot:activator="{ on }">
                <h2 class="articles__items__row__title mt-1 mb-1" v-on="on">
                  {{ article.title | TRUNCATE_TEXT }}
                </h2>
              </template>
              {{ article.text }}
            </v-tooltip>

            <div class="articles__items__row__date">
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
import IconBase from "../components/IconBase.vue";
import Icon2Arrow from "../components/icons/Icon2Arrow.vue";
export default {
  name: "articles",
  created() {
    window.addEventListener("scroll", this.ON_SCROLL);
  },
  destroyed() {
    window.removeEventListener("scroll", this.ON_SCROLL);
  },
  components: {
    IconBase,
    Icon2Arrow
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
    },
    TRUNCATE_TEXT(value) {
      let clamp = "...";
      let length = 54;
      return value.length > length ? value.slice(0, length) + clamp : value;
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
        color: transparent !important;
        background: url(../assets/search.svg) no-repeat center center;
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
    box-shadow: 0 4px 2px -2px #ddd;
  }

  &__items {
    margin-bottom: 50px;
    &__row {
      &__category {
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
        color: #3c4ca9;
      }
      &__title {
        font-size: 14px;
        line-height: 140%;
        color: rgba(0, 0, 0, 0.8);
      }
      &__date {
        font-size: 10px;
        line-height: 140%;
        color: rgba(0, 0, 0, 0.6);
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
