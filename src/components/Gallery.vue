<template>
  <SubHeader />
  <section>
    <Swiper
      :pagination="{ dynamicBullets: true }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide
        v-for="(photo, idx) in photos"
        :key="idx"
        class="slide-container"
      >
        <!-- rozmazane tło -->
        <div
          class="slide-bg"
          :style="{ backgroundImage: `url(${photo})` }"
        ></div>
        <!-- zdjęcie główne -->
        <img :src="photo" :alt="`photo-${idx + 1}`" class="slide-img" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import SubHeader from "./utils/SubdomainHeader.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// zdjęcia
const photos = Object.values(
  import.meta.glob("../assets/photos/*.webp", {
    eager: true,
    import: "default",
  })
).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const modules = [Pagination, Navigation];
</script>

<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.slide-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* wysokość slidera */
  overflow: hidden;
}

/* tło rozmazane */
.slide-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(
    1.1
  ); /* delikatnie powiększone, żeby nie było czarnych krawędzi */
  z-index: 1;
}

/* zdjęcie główne */
.slide-img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  position: relative;
  z-index: 2;
}

.swiper-pagination-bullet {
  background-color: gray;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #FF6600 !important;
}

.swiper-button-next,
.swiper-button-prev {
  color: #FF6600 !important;
  font-weight: bold !important;
}
</style>
