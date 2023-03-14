// Create a new store instance.
import { createStore } from 'vuex'
const store = createStore({
    state () {
      return {
        cards : [],
        filterResult:[]
      }
    },
  
    //mutations
    mutations: {
      SET_CARD(state,data){
          state.cards=data;
      },
      SET_FILTER_CARDS(state,data){
          state.filterResult=data;
      },
    
    },
  
     
   //actions
  actions :{
     addCard({commit},data){
      commit("SET_CARD",data);
      commit("SET_FILTER_CARDS",data);
     },
  
   
      applySearch({commit,state},searchText){
      let toSet=state.cards;
      if(!searchText.length){
          toSet=state.cards
      }else{
     toSet = toSet.filter(item=>item.title.includes(searchText));
      }
     commit("SET_FILTER_CARDS",toSet);
     },

     createCardaction({dispatch,state},data){
      const toSet=[data, ...state.cards];
      
      dispatch('addCard',toSet);
     },

     editCardaction({dispatch,state},data){
      const card=state.cards.find(item=>item.id==data.id);
      const editToset={
        ...card,
        ...data,
      };
      const toSet=[editToset, ...state.cards.filter(item=>item.id!=data.id)];
      
      dispatch('addCard',toSet);
     },

     removeCardaction({dispatch,state},data){
      const toSet=[...state.cards.filter(item=>item.id!=data.id)];
      
      dispatch('addCard',toSet);
     },
  
    },//end of actions
  
  
    getters :{
      getCard(state){
          return state.cards;
      },
      getCardFromFilter(state){
          return state.filterResult;
      }
    },
  });
  export default store;
  