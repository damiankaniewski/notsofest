<template>
  <header class="header">
    <motion.div
      class="left"
      :class="{ 'left-scrolled': scrolledDown || openedMenu || mobileView }"
      :initial="{ opacity: 0, x: -200 }"
      :animate="{ opacity: 1, scale: 1.0, x: 0 }"
      :transition="{ duration: 0.4, delay: 0.3, type: spring, stiffness: 120 }"
    >
      <img
        v-if="!scrolledDown && !openedMenu && !mobileView"
        :src="date"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{
          duration: 0.4,
          delay: 0.1,
          type: spring,
          stiffness: 120,
        }"
        class="textpng"
        alt="15.11.2025"
      />
      <a href="/" v-else>
        <motion.img
          :src="logo"
          :initial="{ opacity: 0, x: 100 }"
          :animate="{ opacity: 1, scale: 1.0, x: 0, rotate: [-1, 1, -1] }"
          :transition="{
            duration: 0.4,
            delay: 0.1,
            type: spring,
            stiffness: 120,
            rotate: {
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              delay: 1,
            },
            scale: {
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              delay: 1,
            },
          }"
          alt="NotSoFest logo"
          class="logo-scrolled"
        />
      </a>
    </motion.div>
    <div></div>
    <motion.div
      class="right"
      :initial="{ opacity: 0, scale: 1.2, y: -200 }"
      :animate="{ opacity: 1, scale: 1.0, y: 0 }"
      :transition="{ duration: 0.4, delay: 0.2, type: spring, stiffness: 120 }"
    >
      <a
        v-if="!scrolledDown && !openedMenu"
        href="https://www.google.com/maps/place/Klub+Studencki+%C5%BBaczek/@50.0527269,19.9179119,4833m/data=!3m1!1e3!4m6!3m5!1s0x47165b0ab06be74f:0xf3dd8c43cc3c000b!8m2!3d50.060407!4d19.9223938!16s%2Fg%2F11h0tfk2r?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D"
      >
        <motion.img
          :src="place"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{
            duration: 0.4,
            delay: 0.1,
            type: spring,
            stiffness: 120,
          }"
          class="textpng"
          alt="Kraków klub żaczek"
        />
      </a>
      <button v-if="!openedMenu" @click="handleOpenedMenu">
        <i class="fa-solid fa-bars"></i>
      </button>
      <button v-else @click="handleClosedMenu">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </motion.div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { motion, spring } from "motion-v";
import logo from "../../assets/logo.png";
import date from "../../assets/home/date.png";
import place from "../../assets/home/place.png";

const emit = defineEmits(["toggle-menu"]);

const scrolledDown = ref(false);
const openedMenu = ref(false);
const mobileView = ref(window.innerWidth <= 768);

const handleScroll = () => {
  scrolledDown.value = window.scrollY >= 50;
};

const handleResize = () => {
  mobileView.value = window.innerWidth <= 768;
};

const handleOpenedMenu = () => {
  openedMenu.value = true;
  emit("toggle-menu");
};

const handleClosedMenu = () => {
  openedMenu.value = false;
  emit("untoggle-menu");
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.header {
  background-color: transparent;
  pointer-events: none;
  z-index: 20;
  position: fixed;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: 200px;
  width: 100%;
}

.left,
.center,
.right {
  display: flex;
  padding: 36px 40px;
  gap: 20px;
  align-items: center;
  text-align: center;
  color: #f16621;

  a {
    pointer-events: all;
  }

  button {
    pointer-events: all;
    z-index: 20;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    i {
      font-size: 64px;
      transition: scale 0.3s ease-in-out, color 0.3s ease-in-out;
      color: #f16621;
    }
  }
  button:hover {
    i {
      scale: 1.05;
      color: #cc611f;
    }
  }
}

.textpng {
  height: 40px;
  width: auto;
}

.center {
  padding: 0;
  justify-self: center;
  align-self: center;

  img {
    z-index: 20;
    height: 200px;
    width: auto;
  }
}

.right {
  justify-self: end;
}

.logo-scrolled {
  padding: 0 40px;
  max-width: 200px;
}

.left-scrolled {
  padding: 0;
}

@media (max-width: 1280px) {
  .right {
    a {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .header {
    height: 140px;
  }

  .textpng {
    display: none;
  }

  .right {
    padding: 36px 12px;
    button {
      i {
        font-size: 36px;
      }
    }
    a {
      display: none;
    }
  }

  .logo-scrolled {
    padding: 0 12px;
    max-width: 100px;
  }
}
</style>
