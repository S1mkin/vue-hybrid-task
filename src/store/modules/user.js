import firebase from "firebase";

export default {
  state: {
    username: "",
    status_auth: false
  },
  getters: {
    IS_LOGGED_IN(state) {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        state.status_auth = false;
      }
      return state.status_auth;
    }
  },
  mutations: {
    ADD_USER(state, data) {
      state.username = data.username;
    },
    LOGIN(state) {
      state.status_auth = true;
    },
    LOGOUT(state) {
      state.status_auth = false;
    }
  },
  actions: {
    SIGN_UP({ commit }, data) {
      /***************** 
      sorry, but firebase don't support auth with username.. use only with vuex
      use firebase or other backend (axios query)
      *****************/
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then(() => {
            commit("ADD_USER", data);
            resolve("Sign Up success!");
          })
          .catch(err => {
            reject(err.message);
          });
      });
    },
    SIGN_IN({ commit }, data) {
      /***************** 
      use firebase or other backend (axios query)
      *****************/
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password)
          .then(() => {
            commit("LOGIN");
            resolve("Sign In success!!!");
          })
          .catch(err => {
            reject(err.message);
          });
      });
    }
  }
};
