<template lang="">
    <div>
        <nav class="navbar bg-primary" data-bs-theme="dark">
            <div class="container-fluid"> 
            <span class="navbar-brand mb-0 h1">FAQ App</span>
            <button class="btn btn-warning" data-bs-toggle="modal" @click="setModal('add')">Add New FAQ</button>
         </div> 
        </nav>
    </div> 
</template> 
<script>
import { mapActions } from 'vuex';
export default { 
    name:'Header',
    methods:{
        ...mapActions(['setModal'])
    }
}    
</script>
