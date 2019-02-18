import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './services/AuthService'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn:false,
    url:'http://localhost:5000',
    userId:null,
    userName:null
  },
  mutations: {
      authenticate(state){
          state.isLoggedIn = auth.isLoggedIn()
          if (state.isLoggedIn){
              state.userName = auth.getUsername()
              state.userId = auth.getUserId()
          } else {
              state.userName = null
              state.userId = null
          }
      } 
  },
  actions: {
      authenticate(context){
         context.commit('authenticate')
     }
  }
})
