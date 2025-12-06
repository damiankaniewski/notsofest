<template style="overflow-x: hidden">
  <SubHeader />

  <masonry-infinite-grid class="container" @request-append="onRequestAppend">
    <div
      class="item"
      v-for="item in items"
      :key="item.key"
      :data-grid-groupkey="item.groupKey"
    >
      <a
        :href="item.src"
        target="_blank"
        rel="noopener noreferrer"
        class="thumbnail"
      >
        <img :src="item.src" alt="photo" loading="lazy" />
      </a>
    </div>
  </masonry-infinite-grid>
</template>

<script setup lang="ts">
import SubHeader from "./utils/SubdomainHeader.vue";
import { MasonryInfiniteGrid } from "@egjs/vue3-infinitegrid";
import { ref } from "vue";

const photoModules = import.meta.glob("@/assets/photos/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});
const photoPaths = Object.values(photoModules) as string[];

const BATCH_SIZE = 10;
const items = ref<{ key: number; groupKey: number; src: string }[]>([]);

const getItems = (nextGroupKey: number, count: number) => {
  const start = nextGroupKey * count;
  const end = start + count;
  return photoPaths.slice(start, end).map((src, index) => ({
    key: start + index,
    groupKey: nextGroupKey,
    src,
  }));
};

items.value = getItems(0, BATCH_SIZE);

const onRequestAppend = (e: any) => {
  const nextGroupKey = (+e.groupKey || 0) + 1;
  const nextItems = getItems(nextGroupKey, BATCH_SIZE);
  if (nextItems.length) items.value = [...items.value, ...nextItems];
};
</script>

<style scoped lang="scss">
.container {
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.item {
  max-width: 25vw;
  min-width: 25vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .thumbnail {
    display: block;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }
  }
}

/* Zapobiega overflow-x */
body,
html {
  overflow-x: hidden;
}
</style>
