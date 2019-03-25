import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './services/AuthService'
import * as links from './services/LinksService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn:false,
    url:'https://quiet-forest-51009.herokuapp.com/',
    gzUrl:'http://zakupki.gov.ru/epz/order/quicksearch/rss',
    userId:null,
    userName:null,
    links:[],
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
  getters:{
    allLinks:(state) => state.links
  },
  mutations: {
      authenticate(state){
          state.isLoggedIn = auth.isLoggedIn();
          if (state.isLoggedIn){
              state.userName = auth.getUsername();
              state.userId = auth.getUserId();
          } else {
              state.userName = null;
              state.userId = null;
          }
      },
      setLinks:(state, links) => {state.links = links},
      newLink:(state, link) => {state.links.push(link)},
      delLink:(state, id) => {state.links.splice(id ,1)}
  },
  actions: {
      authenticate({ commit }){
         commit('authenticate')
     },
     async getlinks({ commit }){
         const res = await links.getLinks();
         commit('setLinks', res.data);
     },
     async addLink({ commit }, payload){
         const res = await links.createLinks(payload);
         commit('newLink', res.data)
     },
     async deleteLink({ commit }, id){
         await links.deleteLink(id);
         commit('delLink', id);
     }
  }
})
