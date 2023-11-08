import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    async addCartItem(cartItem) {
      cartItem.imageUrl += `?random${Math.random}`
      
      useFetch('http://localhost:3000/carts', {
        method: 'POST',
        params: cartItem
      });

      this.cartItems.push(cartItem)
    },
  },
})