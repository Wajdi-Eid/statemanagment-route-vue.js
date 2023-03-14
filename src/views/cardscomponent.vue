<template>
    <div>
       
        <div class="row">
 



 <div class="col-lg-4" style="text-align: center ;"   v-for="(card,index) of this.data=this.$store.getters.getCardFromFilter">
   
   
  <div class="card my-4 card bg-secondary  text-white text-center p-3" style="width: 25rem; height: 28rem;" >
  <div class="index mb-2">{{ index }}</div>
<img :src="card.images[0]" class="card-img-top" alt="Card image cap">
<div class="card-body">
<h5 class="card-title">{{ card.title.slice(0,15) }}</h5>
<p class="card-text">{{card.description.slice(0,35)}}</p>

  <button @click="editCard(card)" class="btn btn-dark mx-2 " >Edit</button>
  <button @click="removeCard(card)" class="btn btn-dark mx-2 " >Remove</button>
   


</div>
</div>
 
 </div>
 </div>
 </div>
</template>

<script>

export default{
    name:'cardscomponent',
    data(){
      return{
       
       
      
      }
    },
    methods:{
   editCard(card){
    this.$router.push({
            name:'editCard',
            query:card
        })
   },

   removeCard(card){
    this.$store.dispatch('removeCardaction',card)
   },

 }
    
  
   
    
}
</script>