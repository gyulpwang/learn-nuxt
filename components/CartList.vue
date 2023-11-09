<template>
    <div class="list-wrapper">
        <ul>
            <li class="list-item" v-for="cartItem in store.cartItems" :key="cartItem.id">
                <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name"
                    onerror="this.src='https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'" />
                <div class="description">
                    <p>{{ cartItem.name }}</p>
                    <span>{{ cartItem.price }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/index.js'
const store: any = useMainStore();

const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;
const nodeEnv = runtimeConfig.public.env.nodeEnv;
const envName = runtimeConfig.public.env.envName;
// -------------------
console.log(apiBase);
console.log(nodeEnv);
console.log(envName);
// -------------------
</script>

<style scoped>
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
</style>