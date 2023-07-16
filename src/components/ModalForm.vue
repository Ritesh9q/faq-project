<template lang="">
    <div>
        <div class="modal fade" :id="modalName" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div   class="modal-dialog">  
            <div style="background-color:black;" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
                <button type="button" id="close" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <form action="">
                <input class="form-control faq-input" placeholder="Type Question" v-model="question" type="text">
                <textarea class="form-control mt-2 faq-input" placeholder="Type Answer" v-model="answer" rows="3"></textarea>
               </form>
            </div> 
            <div class="modal-footer">
                <button  @click="reset" class="btn btn-secondary">Reset</button> 
                <button  @click="actionType" type="button" class="btn btn-primary" :class="[{disabled:notEmpty}]">{{btnText}}</button>
            </div>
            </div>
        </div> 
      </div>  
    </div>
</template>
<script> 
import { mapState, mapActions } from 'vuex';
export default {
    
    name:'ModalForm',
    data(){ 
        return{
            question:'',
            answer:''
        }
    },

    computed: {
        ...mapState(['modalName','selectedFaq']), 
        modalTitle() {
            return this.modalName === 'add' ? 'Add New FAQ' : 'Update FAQ';
        },
        btnText() {
            return this.modalName === 'add' ? 'Add' : 'Update';
        },
        notEmpty(){
            if(this.question.length > 0 && this.answer.length > 0){
                return false;
            }
            else{ 
                return true;
            }
        }, 
    },

    watch:{
        selectedFaq() {
            if( this.modalName=== 'update' && this.selectedFaq !== null){
                this.question = this.selectedFaq.que;
                this.answer = this.selectedFaq.ans;
            }else{
                this.question = '';
                this.answer = ''; 
            }
       },
     
    },
 
   
    methods:{
        ...mapActions(['setModal','updateFAQ','clearSelectedFaq','addFAQ']),
        addItem() {
        const faq = {
            que: this.question,
            ans: this.answer,
        }; 
        this.addFAQ(faq);
        this.question = '';
        this.answer = '';  
        },
        reset(){
            this.answer='',
            this.question=''
        },
        actionType(){
            if(this.btnText === 'Add'){
                this.addItem();
                document.getElementById('close').click();
            }
            if(this.btnText === 'Update'){
                const faq = {
                    id: this.selectedFaq.id,
                    que: this.question,
                    ans: this.answer,
                }; 
                this.updateFAQ(faq);
                this.clearSelectedFaq();
                document.getElementById('close').click();
            }
        }
        

    },
} 
</script>
<style scoped>
    .modal-dialog {
        max-width: 800px; 
    }
    .faq-input{
        border:2px solid black;
    }
    .faq-input:focus{
        border:3px solid #0d6efd;
    } 

    .modal-content,
    .modal-body,
    .modal-header,
    .modal-footer {
        background-color: #f8f9fa;
    }

</style>