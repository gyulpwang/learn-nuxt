<template>
    <div>
        <header class="title">
            <h1>
                <NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink>
            </h1>
        </header>
        <NuxtPage />
    </div>
</template>

<script>
    export default {
    }
</script>


<style scoped>
header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
}

.logo {
    font-weight: 900;
}

.logo:visited {
    color: inherit;
}
</style>
