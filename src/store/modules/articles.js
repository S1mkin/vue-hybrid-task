export default {
  state: {
    articles_sort_asc: false,
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
      },
      {
        title:
          "Ex veniam labore incididunt quis duis cillum enim nisi excepteur. Enim minim cillum elit nisi velit.",
        category: "Tech",
        text:
          "Ex veniam labore incididunt quis duis cillum enim nisi excepteur. Enim minim cillum elit nisi velit. Anim culpa eiusmod adipisicing ex esse ipsum elit veniam consequat laboris proident ipsum cillum. Tempor deserunt aliquip magna consequat exercitation nisi sint. Voluptate Lorem aliqua est qui consectetur dolor commodo cillum commodo. Exercitation ex ad aliqua quis officia aute ipsum nulla magna sit pariatur est quis.\r\n",
        date: new Date(2018, 11, 14),
        image: require("@/assets/articles/preview-5.png")
      },
      {
        title: "est tempor incididunt fugiat aliqua",
        category: "Tech",
        text:
          "Irure non consectetur eiusmod dolore ex duis. Aliqua velit do in nulla ipsum ipsum. Veniam fugiat mollit culpa esse incididunt non aliquip nostrud commodo ut esse. Irure est labore quis velit mollit nostrud est elit Lorem anim laboris ut voluptate nostrud. Sit proident elit ullamco est non nostrud. Ea ipsum mollit voluptate aliqua ipsum culpa anim culpa. Laborum pariatur quis in adipisicing Lorem do deserunt occaecat occaecat eu ea.\r\n",
        date: new Date(2018, 5, 18),
        image: require("@/assets/articles/preview-5.png")
      },
      {
        title: "ad do dolore veniam magna",
        category: "Tech",
        text:
          "Cupidatat nostrud incididunt velit voluptate magna veniam et excepteur. Sunt est culpa pariatur quis voluptate tempor adipisicing aliquip labore amet et est tempor. Ipsum eiusmod culpa elit officia do occaecat ad nisi qui. Ullamco officia excepteur cillum elit duis sunt occaecat incididunt qui irure. Voluptate anim laboris laboris aliqua nulla laboris veniam enim.\r\n",
        date: new Date(2015, 4, 4),
        image: require("@/assets/articles/preview-5.png")
      },
      {
        title: "ea sint est consectetur consectetur",
        category: "Tech",
        text:
          "Dolor adipisicing aliquip dolore dolor do proident dolore. Lorem exercitation labore incididunt non commodo eiusmod aliquip laborum mollit. In sit veniam laborum eu occaecat nulla exercitation voluptate deserunt occaecat ex qui. Do minim anim anim amet ut anim nulla veniam aute magna consectetur dolor.\r\n",
        date: new Date(2014, 3, 5),
        image: require("@/assets/articles/preview-5.png")
      },
      {
        title: "quis eiusmod duis amet non",
        category: "Tech",
        text:
          "Velit cupidatat veniam ullamco ex aute pariatur aliqua cupidatat Lorem laboris minim sit do aute. Veniam ad velit incididunt deserunt ut aliquip mollit nostrud ullamco est commodo. Id anim duis exercitation elit aute consectetur. Aliquip ullamco veniam dolor sit eiusmod qui sint irure culpa eu nostrud. Voluptate ex incididunt deserunt elit ea. Enim dolore excepteur cillum sint excepteur aute. Consectetur magna deserunt voluptate Lorem irure minim ad.\r\n",
        date: new Date(2018, 6, 24),
        image: require("@/assets/articles/preview-5.png")
      }
    ]
  },
  getters: {
    GET_ARTICLES(state) {
      let articles_sort = [];

      // FILTER - TITLE AND TEXT
      if (state.articles_search !== null) {
        articles_sort = [
          ...state.articles.filter(event => {
            return (
              event.title
                .toLowerCase()
                .match(state.articles_search.toLowerCase()) ||
              event.text
                .toLowerCase()
                .match(state.articles_search.toLowerCase())
            );
          })
        ];
      } else {
        articles_sort = [...state.articles];
      }

      // SORT BY DATE
      articles_sort = articles_sort.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      if (state.articles_sort_asc) {
        articles_sort.reverse();
      }

      // RETURN RESULT
      return articles_sort;
    }
  },
  mutations: {
    SET_ARTICLES_SEARCH(state, data) {
      state.articles_search = data.articles_search
        ? data.articles_search
        : null;
    },
    SET_ARTICLES_SORT_ASC(state, data) {
      state.articles_sort_asc = data.articles_sort_asc;
    }
  }
};
