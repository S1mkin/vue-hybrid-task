export default {
  state: {
    articles_sort_asc: false,
    articles_sort_by: "date",
    articles_search: null,

    // OR LOAD TO STATE FROM DB
    articles: [
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 1 articles",
        date: new Date(2019, 2, 24),
        image: require("@/assets/articles/preview-1.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 2 articles",
        date: new Date(2020, 0, 17),
        image: require("@/assets/articles/preview-2.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 3 articles",
        date: new Date(2020, 0, 19),
        image: require("@/assets/articles/preview-3.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 3 articles",
        date: new Date(2018, 1, 15),
        image: require("@/assets/articles/preview-4.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 5 articles",
        date: new Date(2017, 11, 17),
        image: require("@/assets/articles/preview-5.png")
      }
    ]
  },
  getters: {
    GET_ARTICLES(state) {
      let articles_sort = [];

      // FILTER
      if (state.articles_search !== null) {
        articles_sort = [
          ...state.articles.filter(event => {
            return event.text
              .toLowerCase()
              .match(state.articles_search.toLowerCase());
          })
        ];
      } else {
        articles_sort = [...state.articles];
      }

      // SORT
      articles_sort = articles_sort.sort((a, b) => {
        if (a[state.articles_sort_by] > b[state.articles_sort_by]) {
          return 1;
        }
        if (a[state.articles_sort_by] < b[state.articles_sort_by]) {
          return -1;
        }
        return 0;
      });

      if (!state.articles_sort_asc) {
        articles_sort.reverse();
      }

      // CONVERT DATE TO STRING
      return articles_sort.map(function(article) {
        article.date = article.date.toLocaleString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        });
        return article;
      });
    }
  },
  actions: {},
  mutations: {
    SET_ARTICLES_SEARCH(state, data) {
      if (data.articles_search) {
        state.articles_search = data.articles_search;
      } else {
        state.articles_search = null;
      }
    },
    SET_ARTICLES_SORT_ASC(state, data) {
      state.articles_sort_asc = data.articles_sort_asc;
    }
  }
};
