import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as auth from './services/AuthService'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:null
  },
  mutations: {
    authUser(state, userData){
      state.userId = userData.userId
    }
  },
  actions: {
    auth({commit}, authData){
      let data = {
        email: authData.email,
        password: authData.password
      }
      axios.post("http://localhost:5000/users/login", data)
          .then((response) => {
            console.log(response.data)
            commit('authUser',{
              userId:response.data
            })
            //возвращаем айди для стэйта, чтобы было видно нужные линкс
            // getUserId(response.data)
          })
          .catch((err)=>{
            // console.log(err.response.data[2].message)
          })
    }
  }
})
