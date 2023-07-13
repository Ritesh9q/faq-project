<template lang="">
    <Header/>
    <div class="container">
         <h1 class="mt-5">Frequently Asked Questions:</h1>
         <div class="input-group search">
            <form>
             <button class="btn search-button" type="button">
              <i class="bi bi-search"></i>
           </button>
            </form>
           <input type="text" class="form-control " placeholder="Search">
         
        </div>
        <div class="card mb-3 mt-3" v-for="(faq, index) in faqs" :key="faq.id">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <span style="float:right;">
                <button class="btn btn-outline-success m-1"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-outline-danger m-1"><i class="bi bi-trash"></i></button>
                </span>
            </div>
            
       </div>  
    </div> 
</template>
<script> 
import { mapGetters } from 'vuex';
import Header from '../components/Header.vue';
export default {  
    name:'Home',
    components:{Header},
    // computed: {
    // ...mapGetters(['getFAQs']),
    // faqs() {
    //   return this.getFAQs;
    // }
}
</script>
<style scoped>
 .search{
    border:2px solid #0d6efd; 
 }
 .search-button {
      background-color: white;
      border:none;
      color:black;
    }
 .form-control:focus{
  border:none;
  box-shadow: none;
}

</style> 
