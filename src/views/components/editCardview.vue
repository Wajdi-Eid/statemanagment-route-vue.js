<template>
    <h3 class="createcardd">Please Enter Your Card Here  ....</h3>
    <div class="container">
        
        <form>
  <div class="roww">
    <div class="col my-5">
      <input v-model="form.title" type="text" class="form-control" placeholder="Title..">
    </div>
    <div class="col my-5">
      <input v-model="form.description"  type="text" class="form-control" placeholder="Description..">
    </div>
  </div>

  <div class="roww">
    <div class="col my-5">
      <input v-model="form.id"  type="text" class="form-control" placeholder="Title..">
    </div>
    <div class="col my-5">
      <input @change="appendFile($event)" type="file" class="form-control" >
    </div>
  </div>
  <button @click="edit"  class="btn btn-outline-primary mt-3">Submit</button>
</form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default{
   
    name:"editCardview",
    created(){
     this.form.title=this.$route.query?.title ||'';
     this.form.description=this.$route.query?.description ||'';
     this.form.id=this.$route.query?.id ||'';
     this.form.images=this.$route.query?.images ||'';
    },
    data(){
        return{
            form:{
            title :'',
            description :'',
            id :'',
            file :'',
            images:[]
            
            
            }
    }
},
methods:{
...mapActions(['editCardaction']),
    edit(){
       
     
   // this.$store.dispatch('createCardaction',this.data)
    this.editCardaction(this.form).then(()=>{
        this.$router.push({
            name:'cards'
        })
    })
   
    },
    appendFile(event){
    this.form.images=[URL.createObjectURL(event.target.files[0])];
    }
}



};
</script>
