<script setup lang="ts">
defineProps<{ selectedItemLength?: number }>()
</script>

<template>
  <header class="header">
    <div class="header-title">
      <img class="vuejs-jp-logo" src="/images/logo.svg" alt="">
      <h1>Vue.js ハンズオン</h1>
    </div>

    <NuxtLink to="/carts" style="text-decoration: none; color: inherit">
      <CartIcon :length="selectedItemLength" />
    </NuxtLink>
  </header>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 60px;
  padding: 16px;
}

.header > .header-title {
  display: grid;
  grid-template-columns: 60px auto;
  grid-auto-flow: column;
}

.header-title > img {
  align-self: center;
  width: 32px;
  height: 32px;
  margin-right: 20px;
}

.header-title > h1 {
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
