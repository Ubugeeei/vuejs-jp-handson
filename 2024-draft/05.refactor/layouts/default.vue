<script setup lang="ts">
const selectedItems = useSelectedItemsStore()
const selectedItemLength = computed(() => selectedItems.value.length)
</script>

<template>
  <Header :selected-item-length />
  <main class="page-main">
    <slot />
  </main>
</template>

<style scoped>
.page-main {
  padding: 16px;
}
</style>
