<script setup lang="ts">
const { color, bgColor } = defineProps<{ color?: string, bgColor?: string }>()
const emit = defineEmits<{ click: [] }>()
defineSlots<{ default: () => any }>()
</script>

<template>
  <button
    type="button"
    :style="{ color, backgroundColor: bgColor }"
    v-bind="$attrs"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
