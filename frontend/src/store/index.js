import Vue from 'vue'
import Vuex from 'vuex'
import {toyService} from '../services/toy.srevice.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    toys: [],
    filterBy: {
      txt: '',
      inStock: null,
      price: null
  },

  },
 
    mutations: {
      setFilter(state, {filterBy}) {
      state.filterBy = filterBy
      },
    setToys(state, payload) {
      state.toys = payload.toys
    },
    removeToy (state, {toyId}) {
      const idx = state.toys.findIndex(toy => toy._id === toyId)
      state.toys.splice(idx,1)
    },
    addToy (state, {toy}) {
      state.toys.push(toy)
    },
    updateToy(state, {
      toy
  }) {
      const idx = state.toys.findIndex(t => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
  },
  },

  getters: {
    toysForDisplay(state) {
      if (state.filterBy.txt=== '' && state.filterBy.inStock===null) return state.toys
      const checkTxt = state.filterBy.txt.toLowerCase()
      const checkPrice = state.filterBy.price       
      if(!state.filterBy.inStock || !state.filterBy.price) return checkTxt
      if(!state.filterBy.txt || !state.filterBy.inStock) return checkPrice
      return state.toys.filter(toy=> {
        const checkStock = state.filterBy.inStock === 'in-stock' ? toy.inStock : !toy.inStock
        return toy.name.toLowerCase().includes(checkTxt) && checkStock  && (checkPrice > toy.price)

      })
    },

  },

  actions: {
    loadToys(context) {
      toyService.query()
        .then(toys => {
          console.log('toys' ,toys)
          context.commit({
            type: 'setToys',
            toys
          })
        })
    },
    removeToy(context, payload) {
      toyService.remove(payload.toyId)
      .then(() => {
        context.commit(payload)
      })
    },
    saveToy(context, {
      toy
  }) {
      const type = (toy._id) ? 'updateToy' : 'addToy'
      toyService.save(toy)
          .then((savedToy) => {
              context.commit({
                  type,
                  toy: savedToy
              })
          })
          .catch(err => {
              console.log('store: can\'t add or save', err)
          })
  },

  }
})