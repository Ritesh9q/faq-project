import { createStore } from 'vuex';
import { Modal } from 'bootstrap';

const store = createStore({
  state() {
    return {
       faqs: [],
       modalName:'', 
       searchQuery: '',
       selectedFaq: null  
    };
  },
  mutations: {
    addFAQ(state, faq) {
      state.faqs.push(faq);
      localStorage.setItem('faqs', JSON.stringify(state.faqs));
    },
   setModal(state,type){
      state.modalName=type;
      setTimeout(()=>{
        let myModal;
        if(state.modalName==='add'){
          myModal = new Modal('#add'); 
          myModal.show();
        }
        if(state.modalName === 'update'){
          myModal = new Modal('#update'); 
          myModal.show();
        } 
      },1)
    
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    deleteFAQ(state, id) {
      state.faqs = state.faqs.filter(faq => faq.id !== id);
      localStorage.setItem('faqs', JSON.stringify(state.faqs));
    },
    setSelectedFaq(state, faq) {
      state.selectedFaq = faq;
    },
    clearSelectedFaq(state) {
      state.selectedFaq = null;
    },
    updateFAQ(state, updatedFAQ) {
      const index = state.faqs.findIndex(faq => faq.id === updatedFAQ.id);
      if (index !== -1) {
        state.faqs.splice(index, 1, updatedFAQ);
        localStorage.setItem('faqs', JSON.stringify(state.faqs));
      }
    },
  },

  actions: {

    addFAQ({ commit, state }, faq) {
      const newId = Math.max(...state.faqs.map(faq => faq.id), 0) + 1;
      const newFAQ = { ...faq, id: newId };
      commit('addFAQ', newFAQ);
    }, 
    setModal({commit},type){
      commit('setModal',type);
    },
    deleteFAQ({ commit }, id) {
      commit('deleteFAQ', id);
    },
    selectFaq({ commit }, faq) {
      commit('setSelectedFaq', faq);
    },
    clearSelectedFaq({ commit }) {
      commit('clearSelectedFaq');
    },
    updateFAQ({commit},faq){
      commit('updateFAQ',faq);
    } 
  },
  getters: {

    getFAQs: state => {
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        return state.faqs.filter(faq =>
          (faq.que && faq.que.toLowerCase().includes(query)) ||
          (faq.ans && faq.ans.toLowerCase().includes(query))
        );
      }
      const storedFAQs = localStorage.getItem('faqs');
      state.faqs = storedFAQs ? JSON.parse(storedFAQs) : [];
      return state.faqs;
    },

  }
});

export default store;
