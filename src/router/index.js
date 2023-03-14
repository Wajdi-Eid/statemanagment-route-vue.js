import {createRouter,createWebHashHistory} from 'vue-router'
import Homecomponent from './../views/components/Homecomponent.vue'
import cardscomponent from './../views/cardscomponent.vue'
import createcardcomponent from './../views/components/createcardcomponent.vue'
import editCardview from './../views/components/editCardview.vue'


const routes=[
    {
        Path:'/',
       
        component:Homecomponent
    },
    {
        Path:'/cards',
        name:'cards',
        component : cardscomponent
    },
    {
        Path:'/create',
        
        component :createcardcomponent
    },
    {
        Path:'/edit',
        name:'editCard',
        component :editCardview
    }

]
const router =createRouter({
    history: createWebHashHistory(),
    routes,
  
  
  })
  

  router.addRoute('/', { path: '/cards', component: cardscomponent })
  router.addRoute('/', { path: '/create', component: createcardcomponent })
  export default router;