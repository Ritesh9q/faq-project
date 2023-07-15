<template lang="">
    <Header/>
    <div class="container">
         <h1 class="mt-5">Frequently Asked Questions: {{this.$store.state.editId}}</h1> 
         <div class="input-group search">
            
              <button class="btn search-button" type="button">
                <i class="bi bi-search"></i> 
              </button>
            
           <input type="text" class="form-control shadow-lg" placeholder="Search" v-model="searchQuery" @input="updateSearchQuery"/>
        </div>
        <div class="card shadow border-0 mb-3 mt-3" v-for="(faq, index) in filteredFAQs" :key="faq.id">
            <div class="card-body">
                <h5 class="card-title">{{faq.id}}. {{faq.que}}</h5> 
                <p class="card-text">{{faq.ans}}</p> 
                <span style="float:right;">
                <button class="btn btn-outline-success m-1" @click="editItem(faq.id)"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-outline-danger m-1" @click="deleteFAQ(faq.id)"><i class="bi bi-trash"></i></button> 
                </span>
            </div> 
       </div> 
         <ModalForm />   
    </div> 
    
</template>
<script> 
import { mapGetters, mapActions, mapMutations } from 'vuex';
import ModalForm from '../components/ModalForm.vue';
import Header from '../components/Header.vue';

export default {  
    name:'Home', 
    components:{Header,ModalForm},
    data() {
      return {
      searchQuery: ''
    };
  },


  computed:{
    ...mapGetters(['getFAQs']),
    filteredFAQs() {
      return this.getFAQs;
    },
    modalType(){
      return this.$store.state.modalName;  
    }
  },
 
methods:{
    ...mapActions(['setModal','deleteFAQ','setItemId']),

    ...mapMutations(['setSearchQuery']), 
    updateSearchQuery() {
      this.setSearchQuery(this.searchQuery);
    },
    deleteFAQ(id) {
      let ok = confirm('Are you sure you want to delete this FAQ?');
      if (ok) {
        this.$store.commit('deleteFAQ',id);  
      } 
    },
    editItem(id){
     
      this.setItemId(id);
      this.setModal('update');
      
 



    }
   
   }
}
</script>
<style> 
 .search{
    border:2px solid #0d6efd; 
    box-shadow: none;

 } 
 .search-button {
      background-color: white !important;
      border:none;
      color:black;
    }
 .form-control:focus{
  border:none;
  box-shadow: none;

}

</style> 
