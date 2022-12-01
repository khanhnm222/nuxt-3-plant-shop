import actions from './actions'
import state from './state'
import getters from './getters'
import { defineStore } from 'pinia'

const useProduct = defineStore('products', {
  state: state,
  actions: actions,
  gatters: getters
})
export default useProduct