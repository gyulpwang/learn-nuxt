<template>
    <div class="app">
        <main>
            <SearchInput
                :searchKeyword="searchKeyword"
                @search="searchProducts"
            />
            <ul>
                <li class="item flex" v-for="product in products" :key="product.id" @click="moveToDetailPage(product.id)">
                    <img class="product-image" :src="product.imageUrl" :alt="product.name" onerror="this.src='https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'" />
                    <p>{{ product.name }}</p>
                    <span>{{ product.price }}</span>
                </li>
            </ul>
            <div class="cart-wrapper">
                <button class="btn" @click="moveToCartPage">🛒</button>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';
import { fetchProductsByKeyword } from '@/api/index'

export default {
    components: { SearchInput },
    data() {
        return {
            products: [],
            searchKeyword: '',
        };
    },
    methods: {
        moveToDetailPage(id) {
            this.$router.push(`detail/${id}`);
        },
        async searchProducts() {
            const response = await fetchProductsByKeyword(this.searchKeyword);
            const products = response.data.map(item => ({
                ...item,
                imageUrl: `${item.imageUrl}?random${Math.random}`
            }));
            this.products = products;
        },
        moveToCartPage() {
            this.$router.push(`cart`);
        }
    },
    async created() {
        const response = await axios.get("http://localhost:3000/products");
        const products = response.data.map(item => ({
            ...item,
            imageUrl: `${item.imageUrl}?random${Math.random}`
        }));
        this.products = products;
    },
}
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: center;
}
.item {
    display: inline-block;
    width: 400px;
    height: 300px;
    text-align: center;
    margin: 0 0.5rem;
    cursor: pointer;
}
.product-image {
    width: 400px;
    height: 250px;
}
.app {
    position: relative;
}

.cart-wrapper {
    position: sticky;
    float: right;
    bottom: 50px;
    right: 50px;
}

.cart-wrapper .btn {
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
    font-weight: 500;
    background-color: lightpink;
    border-color: lightpink;
    border-radius: 50%;
    cursor: pointer;
}
</style>~/api/index_temp