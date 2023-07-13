import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      faqs: []
    };
  },
  mutations: {
    addFAQ(state, faq) {
      state.faqs.push(faq);
    }
  },
  actions: {
    addFAQ({ commit }, faq) {
      commit('addFAQ', faq);
    }
  },
  getters: {
    getFAQs(state) {
      return state.faqs;
    }
  }
});

export default store;
