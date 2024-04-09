<script setup lang="ts">
const { image, name, price } = defineProps<{
  image: {src: string, alt?: string }
  name: string
  price: number
}>();

defineSlots<{ body: () => any }>()
</script>

<template>
  <div class="thumbnail" @click="$emit('click')">
    <img :src="image.src" :alt="image.alt">
  </div>

  <div class="description" @click="$emit('click')">
    <h2>{{ name }}</h2>
    <slot name="body" />
    <span>¥<span class="price">{{ price.toLocaleString() }}</span></span>
  </div>
</template>

<style scoped>
.thumbnail > img {
  width: 100%;
  height: calc(100%);
  object-fit: cover;
}

.description {
  text-align: left;
  margin-top: 20px;
}

.description > p {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 25px;
}

.description > span {
  display: block;
  margin-top: 10px;
  font-size: 20px;
}

.description > span > .price {
  font-size: 28px;
  font-weight: bold;
}
</style>
