import { defineStore } from 'pinia'

/* export const state = () => ({
    cartItems: [],
})

export const mutaitions = {
    addCartItem(state, cartItem) {
        state.cartItems.push(cartItem);
    }
} */

export const useMainStore = defineStore('main', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addCartItem(cartItem) {
      this.cartItems.push(cartItem)
    },
  },
})