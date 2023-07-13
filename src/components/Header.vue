<template lang="">
    <div>
        <nav class="navbar bg-primary" data-bs-theme="dark">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My App</span>
            <router-link to="/add" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New FAQ</router-link>
            </div>
        </nav>

  
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add New FAQ</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <form action="">
                <input class="form-control" placeholder="Type Question" type="text">
                <textarea class="form-control mt-2" placeholder="Type Answer" rows="3"></textarea>
               </form>
               
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
            </div>
            </div>
        </div>
        </div>

    </div> 
</template>
<script>
export default {
    name:'Header'
}    
</script>
 <style scoped>
  .modal-dialog {
      max-width: 800px; /* Set your desired width here */
    }
 </style>