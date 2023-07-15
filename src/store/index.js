import { createStore } from 'vuex';
import { Modal } from 'bootstrap';

const store = createStore({
  state() {
    return {
       faqs: [],
       modalName:'', 
       searchQuery: '',
       editId:null
    };
  },
  mutations: {
    addFAQ(state, faq) {
      state.faqs.push(faq);
      localStorage.setItem('faqs', JSON.stringify(state.faqs));

    },
    loadFAQs(state, faqs) {
      state.faqs = faqs; 
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
    setItemId(state,id){
      state.editId = id; 
    }
  },
  actions: {

    addFAQ({ commit, state }, faq) {
      const newId = Math.max(...state.faqs.map(faq => faq.id), 0) + 1;
      const newFAQ = { ...faq, id: newId };
      commit('addFAQ', newFAQ);
 
    }, 
    loadFAQs({ commit }) {
      const faqs = JSON.parse(localStorage.getItem('faqs')) || [];
      commit('loadFAQs', faqs);
    },
    setModal({commit},type){
      commit('setModal',type);
    },
    deleteFAQ({ commit }, id) {
      commit('deleteFAQ', id);
    },
    setItemId({commit},id){
      commit('setItemId', id);
    }
  },
  getters: {
    getFAQs(state) {
      return state.faqs;
    },
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
    editItem(state) {
      return state.editId;
    },
   
    getModalType(state){
      return state.modalName;
    }

  }
});

export default store;
