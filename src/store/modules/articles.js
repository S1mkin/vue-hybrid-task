export default {
  state: {
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
      return state.articles.sort();
    },
    filtered_articles: function(state) {
      return state.articles
        .filter(event => {
          return event.title.toLowerCase().match(this.search.toLowerCase());
        })
        .sort(function(a, b) {
          return new Date(b.startDate) - new Date(a.startDate);
        });
    }
  },
  actions: {},
  mutations: {}
};
