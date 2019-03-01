import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './services/AuthService'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn:false,
    url:'http://localhost:5000',
    gzUrl:'http://zakupki.gov.ru/epz/order/quicksearch/rss',
    userId:null,
    userName:null,
    dates:true,
    dateLocal:{
        dow: 0, // Sunday is the first day of the week
        hourTip: 'Select Hour', // tip of select hour
        minuteTip: 'Select Minute', // tip of select minute
        secondTip: 'Select Second', // tip of select second
        yearSuffix: '', // suffix of head year
        monthsHead: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), // months of head
        months: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), // months of panel
        weeks: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_')    ,// weeks,
        cancelTip: 'cancel',
        submitTip: 'confirm'
    }  
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
