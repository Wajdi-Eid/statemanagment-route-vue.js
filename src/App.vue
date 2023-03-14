<template>
  <div class="app">
    <navbarcomponent/>
    <router-view/>

   
    
  
  </div>
</template>

<script>
import cardscomponent from './views/cardscomponent.vue';
import navbarcomponent from './views/components/navbarcomponent.vue';
import Homecomponent from './views/components/Homecomponent.vue';
import editCardview from './views/components/editCardview.vue';
export default{

  created(){
     fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
      this.$store.dispatch('addCard',res.products);
      this.open=true;
    }); 
  },
  data(){
    return{
     cards : [],
     open:false,
     

    }
  },
  components:{
    Homecomponent,
    cardscomponent,
    navbarcomponent ,
    editCardview
   
  }
  
  
}
</script>

<style >


</style>
