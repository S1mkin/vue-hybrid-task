export default {
  state: {
    username: "",
    email: "test@mail.ru",
    password: "12345678",
    status_auth: false,
    users: [
      {
        username: "Andy Si",
        email: "test@mail.ru",
        password: "12345678"
      }
    ]
  },
  getters: {
    IS_LOGGED_IN(state) {
      return state.status_auth === true ? true : false;
    }
  },
  mutations: {
    CREATE_USER(state, data) {
      state.username = data.username;
      state.email = data.email;
      state.password = data.password; // ONLY FOR TEST
    },
    LOGIN(state, data) {
      if (data.email === state.email && data.password === state.password) {
        return (state.status_auth = true);
      } else {
        return "Wrong";
      }
    },
    LOGOUT(state) {
      state.status_auth = false;
    }
  },
  actions: {
    SIGN_UP(state, data) {
      /***************** 
      ADD USER TO BACKEND - SEND AXIOS QUERY
      data.password => MD5 HASH
      *****************/
      state.commit("CREATE_USER", data);
    },
    SIGN_IN({ state, commit }, data) {
      /***************** 
      SEND AXIOS QUERY TO BACKEND
      RESPONSE = true => RETURN TRUE
      RESPONSE = false => RETURN FALSE
      *****************/
      commit("LOGIN", data);

      return new Promise((resolve, reject) => {
        if (state.status_auth) {
          resolve("Sign In success");
        } else {
          reject("Wrong email or password");
        }
      });
    }
  }
};
