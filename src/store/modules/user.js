export default {
  state: {
    username: "",
    email: "test@mail.ru ",
    password: "12345678",
    status_auth: false
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
      // console.log('data.email: ' + data.email + ' state.email: ' + state.email);
      if (data.email == state.email && data.password == state.password) {
        state.status_auth = true;
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
    SIGN_IN(state, data) {
      /***************** 
      SEND AXIOS QUERY TO BACKEND
      RESPONSE = true => RETURN TRUE
      RESPONSE = false => RETURN FALSE
      *****************/
      state.commit("LOGIN", data);
    }
  }
};
