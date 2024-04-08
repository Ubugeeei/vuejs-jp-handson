<script setup lang="ts">
const selectedItems = useSelectedItemsStore()
const total = computed(() =>
  selectedItems.value.reduce((acc, item) => acc + item.price, 0).toLocaleString()
)

const order = () => {
  alert('注文しました')
  selectedItems.value = []
  navigateTo('/')
}
</script>

<template>
  <h2>注文確認ページ</h2>


  <template v-if="selectedItems.length">
    <div class="container">
      <ul>
        <li v-for="item in selectedItems" :key="item.id">
          <p>{{ item.name }}</p>
          <p>¥{{ item.price.toLocaleString() }}</p>
        </li>
      </ul>

      <p>合計金額: ¥{{ total }}</p>


      <div class="action">
        <NuxtLink to="/">メニューに戻る</NuxtLink>
      </div>
      <div class="action">
        <button type="button" @click="order">注文</button>
      </div>
    </div>
  </template>

  <template v-else>
    <p>カートに商品が入っていません</p>
    <NuxtLink to="/">メニューに戻る</NuxtLink>
  </template>
</template>

<style scoped>
.container {
  max-width: 600px;

}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 16px;
}

p {
  margin: 0;
}

h2 {
  margin-top: 0;
}

.action {
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
}

button {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
