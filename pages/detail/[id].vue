<template>
    <div>
      <div class="container">
        <div class="main-panel">
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
            onerror="this.src='https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'"
          />
        </div>
        <div class="side-panel">
          <p class="name">{{ product.name }}</p>
          <p class="price">{{ product.price }}</p>
          <button type="button" @click="addToCart">카트에 담기</button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'

const route = useRoute();
const id = route.params.id;
const response = await useFetch(`http://localhost:3000/products/${id}`)
const product: any = (response.data.value);

const addToCart = ref(async () => {
  const router = useRouter();
  const store = useMainStore();

  store.addCartItem(product)
  router.push('/cart');
});

// 개별 헤더 정보 및 메타태그 변경
useHead({
  title: `상품 상세 - ${product.name}`,
  meta: [
    // hid : 해당 속성을 덮어쓴다
    { hid: 'description', name: 'description', content: `${product.name}의 상품 상세 페이지입니다.`},
    { property: 'og:title', content: `${product.name}` },
    { property: 'og:description', content: `OG 태그 설명 테스트` },
    { property: 'og:image', content: `test.png` },
    { property: 'og:twitterCard', content: `summary_large_image` },
  ],
})
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}
.product-image {
    width: 500px;
    height: 375px;
}
.side-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 220px;
    text-align: center;
    padding: 0 1rem;
}
</style>
