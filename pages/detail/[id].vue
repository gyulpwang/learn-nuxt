<template>
      <div>
        <div class="container">
          <div class="main-panel">
            <img
              class="product-image"
              :src="product.imageUrl"
              :alt="product.name"
            />
          </div>
          <div class="side-panel">
            <p class="name">{{ product.name }}</p>
            <p class="price">{{ product.price }}</p>
          </div>
        </div>
      </div>
</template>

<!-- <script>
import axios from "axios";
/* import { fetchProductById } from '~/api' */

export default {
    /* async useAsyncData({ params }) {
        debugger;
        const response = await fetchProductById(params.id)
        return { product: response.data }
    }, */
    data() {
        return {
            product: {},
        }
    },
    async fetch() {
        const res = await axios.get(`http://localhost:3000/products/1`);
        console.log(res);
        this.product = res.data;
    },
}
</script> -->

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;
const { data: product } = await useFetch(`http://localhost:3000/products/${id}`)
</script>

<style lang="scss" scoped>

</style>