<template>
    <div class="container">
        <h1 class="list-title">카트 페이지</h1>
        <div class="list-wrapper">
            <ul>
                <li class="list-item" v-for="cartItem in store.cartItems" :key="cartItem.id">
                    <img
                        class="thumbnail"
                        :src="cartItem.imageUrl"
                        :alt="cartItem.name"
                        onerror="this.src='https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'"
                    />
                    <div class="description">
                        <p>{{ cartItem.name }}</p>
                        <span>{{ cartItem.price }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="extra-panel">
            <button type="button">👛 구매하기</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/index.js'
const store: any = useMainStore();
</script>

<style scoped>
.container {
    margin: 2rem 10rem;
}

.list-title {
    font-weight: 700;
    font-size: 1.4rem;
}

.list-wrapper {
    margin: 0.4rem 0;
}

.list-item {
    display: flex;
}

.thumbnail {
    width: 100px;
    height: 100px;
}

.description {
    padding: 2rem 1rem;
}

.extra-panel {
    text-align: right;
    padding: 0.2rem 0;
}

.extra-panel button {
    background-color: lightpink;
    border-color: lightpink;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
