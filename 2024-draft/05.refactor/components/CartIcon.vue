<script setup lang="ts">
defineProps<{ length?: number }>()
</script>

<template>
  <div class="cart-icon" aria-label="カートアイコン">
    <Icon name="mdi:cart"/>
    <span v-if="length !== undefined" class="cart-badge">{{ length }}</span>
  </div>
</template>

<style scoped>
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
</style>
