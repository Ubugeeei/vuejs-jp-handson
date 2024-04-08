<script setup lang="ts">
const selectedItems = useSelectedItemsStore()
</script>

<template>
  <header class="header">
    <div class="header-title">
      <img class="vuejs-jp-logo" src="/images/logo.svg" alt="">
      <h1>Vue.js ハンズオン</h1>
    </div>

    <NuxtLink to="/carts" style="text-decoration: none; color: inherit">
      <div class="cart-icon">
        <Icon name="mdi:cart"/>
        <span class="cart-badge">{{ selectedItems.length }}</span>
      </div>
    </NuxtLink>
  </header>

  <main class="page-main">
    <slot />
  </main>
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

.cart-icon {
  position: relative;
  font-size: 32px;
}

.cart-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  width: 16px;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}

.page-main {
  padding: 16px;
}
</style>
