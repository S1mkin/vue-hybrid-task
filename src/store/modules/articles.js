export default {
  state: {
    articles_sort_asc: false,
    articles_sort_by: "date",
    articles_search: null,

    // or load to state from DB
    articles: [
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 1 articles",
        date: "24/03/2019",
        image: require("@/assets/articles/preview-1.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 2 articles",
        date: "17/01/2020",
        image: require("@/assets/articles/preview-2.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 3 articles",
        date: "19/01/2020",
        image: require("@/assets/articles/preview-3.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 4 articles",
        date: "15/02/2018",
        image: require("@/assets/articles/preview-4.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 5 articles",
        date: "17/12/2017",
        image: require("@/assets/articles/preview-5.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 1 articles",
        date: "24/03/2019",
        image: require("@/assets/articles/preview-1.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 2 articles",
        date: "17/01/2020",
        image: require("@/assets/articles/preview-2.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 3 articles",
        date: "19/01/2020",
        image: require("@/assets/articles/preview-3.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 4 articles",
        date: "15/02/2018",
        image: require("@/assets/articles/preview-4.png")
      },
      {
        title: "AR can erase the barriers in international business",
        category: "Tech",
        text: "Text 5 articles",
        date: "17/12/2017",
        image: require("@/assets/articles/preview-5.png")
      }
    ]
  },
  getters: {
    get_articles(state) {
      const articles_sort = [...state.articles].sort((a, b) => {
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

      if (state.articles_search !== null) {
        return articles_sort.filter(event => {
          return event.text
            .toLowerCase()
            .match(state.articles_search.toLowerCase());
        });
      } else {
        return articles_sort;
      }
    }
  },
  actions: {},
  mutations: {
    set_articles_search(state, data) {
      if (data.articles_search) {
        state.articles_search = data.articles_search;
      } else {
        state.articles_search = null;
      }
    }
  }
};
