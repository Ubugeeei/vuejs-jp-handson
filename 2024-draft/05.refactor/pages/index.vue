<script setup lang="ts">
const { items, toggleSelect, isSelected } = useItemList()
</script>

<template>
  <h2>メニュー</h2>

  <ul class="item-list" aria-label="メニューのリスト">
    <li
      v-for="({ id, image: imageSrc, name, description, price }, i) in items"
      :key="id"
      :class="['item', isSelected(id) ? 'item__selected': '']"
      :tabindex="i"
      role="button"
    >
      <Card
        :class="{ 'selected-item': isSelected(id) }"
        :id
        :image="{ src: imageSrc, alt: name + 'の画像'}"
        :name
        :description
        :price
        @click="() => toggleSelect(id)">
      >
        <template #body>
          <p>{{ description }}</p>
        </template>
      </Card>
    </li>
  </ul>

</template>

<style scoped>
h2 {
  margin-top: 0;
}

.item-list {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  column-gap: 24px;

  /* reset */
  list-style: none;
  padding: 0;
}

.item {
  display: grid;
}

.item:hover {
  transition: 0.2s transform ease-out;
  transform: scale(1.05);
}

.item__selected {
  background: #e3f2fd;
}
</style>
