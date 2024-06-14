import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate"; //값이 계속 유지됨

const store = createStore({
  state() { //data랑 비슷..?
    return {
      user: {},
    };
  },
//   getters: {
//     cartCount: (state) => {
//       return state.cart.length;
//     },
//   },
  mutations: { //=methods
    user(state, data) {
      state.user = data;
    },
  },
  plugins: [persistedstate({ paths: ["user"] })],
});

export default store;