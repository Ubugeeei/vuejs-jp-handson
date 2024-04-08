<script setup lang="ts">
const items = ref([
  {
    id: 1,
    name: 'アボカドディップバケット',
    description:
      '刻んだ野菜をアボカドと混ぜてディップに。こんがり焼いたバゲットとお召し上がりください。',
    price: 480,
    image: '/images/item1.jpg',
    soldOut: false,
    selected: false
  },
  {
    id: 2,
    name: 'あの日夢見たホットケーキ',
    description:
      '子供のころに食べたかった、あのホットケーキを再現しました。素朴でどこか懐かしい味をどうぞ。',
    price: 1180,
    image: '/images/item2.jpg',
    soldOut: false,
    selected: false
  },
  {
    id: 3,
    name: 'HOP WTR',
    description:
      'ロサンゼルス生まれのスパークリングウォーター。ノンカロリー、ノンアルコールの新感覚飲料です。',
    price: 320,
    image: '/images/item3.jpg',
    soldOut: true,
    selected: false
  },
  {
    id: 4,
    name: 'チーズフレンチフライ',
    description:
      'イタリア産チーズをたっぷりかけたアツアツのフレンチフライ。みんな大好きな一品です。',
    price: 670,
    image: '/images/item4.jpg',
    soldOut: false,
    selected: false
  }
])
</script>

<template>
  <ul class="item-list">
    <li v-for="item in items.filter(item => !item.soldOut)" :key="item.id" class="item">
      <Card
        :class="{ 'selected-item': item.selected }"
        :id="item.id"
        :image="item.image"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        @click="item.selected = !item.selected">
      >
        <template #body>
          <p>{{ item.description }}</p>
        </template>
      </Card>
    </li>
  </ul>
</template>

<style scoped>
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

.selected-item {
  background: #e3f2fd;
}
</style>
