<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-for="link of links">
        <li class="nav-item">
            <router-link class="nav-link" :to="link.to" style="background-color:white ; margin-left: 250px; font-family: fantasy;">{{link.title}}</router-link>
          
        </li>
       
       
        
       
      </ul>
      <form class="d-flex" role="search">
        <input @input="search" v-model="searchText" class="form-controll me-2" type="search" placeholder="Search" aria-label="Search">
        
      </form>
    </div>
  </div>
</nav>
</template>
<script>
export default{

 name:'navbarcomponent',
 data(){
    return{
    searchText: '',
    links:[
    {
            title:'Products',
            to: '/cards'
        },
        {
            title:'Home',
            to: '/'
        },
       
        {
            title:'Add product',
            to: '/create'
        }
    ]
          }
      },
 methods:{
    search(){
      this.$store.dispatch('applySearch',this.searchText)
    },
 }
}
</script>
<style>
.nav-link{
    cursor: pointer;
}

</style>
