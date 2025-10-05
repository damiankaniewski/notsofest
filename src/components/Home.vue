<template>
  <transition name="loading-fade">
    <div v-if="!animationEnded" class="loading-screen">
      <motion.img
        class="loading-logo"
        :src="logo"
        alt="NotSoFest logo"
        :initial="{ y: 0, opacity: 1, scale: 1 }"
        :animate="startAnimation ? { y: -800, opacity: 0 } : null"
        :transition="{ duration: 0.2, ease: 'easeOut' }"
        @animation-complete="handleAnimationEnd"
      />
    </div>
  </transition>
  <transition name="loading-fade" v-if="!videoEnded">
    <video
      v-show="animationEnded"
      class="intro"
      preload="auto"
      autoplay
      muted
      @canplaythrough="handleVideoLoad"
      @click="handleVideoEnd"
      @ended="handleVideoEnd"
    >
      <source :src="currentIntro" type="video/mp4" />
    </video>
  </transition>
  <BurgerMenu v-if="menuVisible"></BurgerMenu>
  <transition name="loading-fade">
    <section id="home" v-show="videoEnded">
      <motion.img
        class="home-background"
        :src="placeholder"
        alt=""
        :initial="{ y: 0 }"
        :animate="{ y: scrollY * 0.2 }"
        :transition="{ duration: 0.2, type: spring, stiffness: 120 }"
        @load="handleBackgroundLoad"
      />
      <div v-if="videoEnded" class="overlay">
        <Header
          @toggle-menu="handleMenuToggle"
          @untoggle-menu="handleMenuUntoggle"
        ></Header>
        <div class="main-view">
          <div class="placeholder"></div>
          <div class="center-content">
            <a
              class="location-mobile"
              v-show="!menuVisible"
              href="https://www.google.com/maps/place/Klub+Studencki+%C5%BBaczek/@50.0527269,19.9179119,4833m/data=!3m1!1e3!4m6!3m5!1s0x47165b0ab06be74f:0xf3dd8c43cc3c000b!8m2!3d50.060407!4d19.9223938!16s%2Fg%2F11h0tfk2r?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D"
            >
              Klub Żaczek - Kraków
            </a>
            <a class="tickets" href="/bilety">
              <h1>
                Kup<br/>Bilet
              </h1>
            </a>
            <div class="time-remaining">
              <motion.h1
                :initial="{ opacity: 0, scale: 0.8 }"
                :animate="{ opacity: 1, scale: 1.0, rotate: [-0.5, 0.5, -0.5]}"
                :transition="{ duration: 0.5, delay: 0.3, type: spring, stiffness: 120,
                  rotate: {
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                    delay: 0.4,
                  }
                 }"
              >
                Pozostało
              </motion.h1>
              <motion.p
                 v-html="timeRemaining"
                :initial="{ opacity: 0, scale: 1.2 }"
                :animate="{ opacity: 1, scale: 1.0, scale: [1.0, 1.05, 1.0]}"
                :transition="{duration: 1.2, delay: 0.6, type: spring, stiffness: 120,
                  scale: {
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeInOut',
                    delay: 0.6
                  }
                 }"
              >
              </motion.p>
            </div>
          </div>
          <motion.div
            href="#more"
            class="show-more"
            :class="{ loweredIndex: menuVisible }"
            :initial="{ y: 100, opacity: 0 }"
            :animate="{ y: [0, -10, 0], opacity: 1 }"
            :transition="{
              duration: 0.6,
              type: spring,
              stiffness: 120,
              y: { repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 1 },
            }"
          >
            <a href="#more">Pokaż więcej</a>
            <a href="#more">
              <i class="fa-solid fa-chevron-down"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  </transition>
  <More v-show="videoEnded" :menu-visible="menuVisible"></More>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { motion, spring } from "motion-v";
import { calculateCountdown } from "./scripts/calculateCountdown.js";

import Header from "./utils/HomeHeader.vue";
import More from "./More.vue";
import BurgerMenu from "./utils/BurgerMenu.vue";

import logo from "../assets/logo.png";
import introPion from "../assets/intro-pion.mp4";
import intro from "../assets/intro.mp4";
import placeholder from "../assets/placeholder.png";

import { loadingStatus } from "./scripts/siteLoadingScript.js";

const {
  videoEnded,
  startAnimation,
  animationEnded,
  currentIntro,
  handleVideoLoad,
  handleBackgroundLoad,
  handleVideoEnd,
  handleAnimationEnd,
} = loadingStatus(introPion, intro);

const eventDate = new Date("2025-11-15T17:00:00+01:00");
const { timeRemaining } = calculateCountdown(eventDate);

const menuVisible = ref(false);

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const handleMenuToggle = () => {
  menuVisible.value = true;
  document.body.style.overflow = "hidden";
};

const handleMenuUntoggle = () => {
  menuVisible.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
#home {
  overflow-y: visible;
}

.intro {
  display: flex;
  position: fixed;
  justify-content: center;
  object-fit: cover;
  z-index: 100;
  width: 100%;
  height: 100%;
}

.loading-screen {
  display: flex;
  position: fixed;
  justify-content: center;
  background: black;
  align-items: center;
  z-index: 100;
  inset: 0;
}

.loading-logo {
  width: 400px;
  height: auto;
  justify-self: center;
}

.home-background {
  position: fixed;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  object-fit: cover;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
}

.overlay {
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100svh;
  height: auto;
}

.tickets {
    background-color: #FF6600;
    padding: 24px 164px;
    border-radius: 15px;

    h1 {
      margin: 0;
      font-size: 84px;
      color: black;
    }

    &:hover {
      background-color: #bb501bcc;
    }
  }

.time-remaining {
  h1 {
    margin: 0;
    font-size: 86px;
  }

  p {
    margin: 0;
    font-size: 32px;
  }
}

.main-view {
  flex: 1;
  padding: 16px;
  padding-top: 0;
  margin-top: 160px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #FF6600;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.show-more {
  z-index: 20;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  padding: 8px;

  i {
    font-size: 64px;
  }
}

.loweredIndex {
  z-index: 10;
}

.location-mobile {
  display: none;
}

@media (max-width: 1536px) {
  .tickets {
    padding: 16px 158px;

    h1 {
      font-size: 76px;
    }
  }

  .time-remaining {
    h1 {
      font-size: 82px;
    }

    p {
      font-size: 28px;
    }
  }
}

@media (max-width: 1280px) {
  .tickets {
    padding: 4px 128px;

    h1 {
      font-size: 60px;
    }
  }

  .time-remaining {
    margin-top: -12px;
    h1 {
      font-size: 66px;
    }
    p {
      font-size: 24px;
    }
  }

  .show-more {
    font-size: 24px;
    i {
      font-size: 30px;
    }
  }
  
}

@media (max-width: 1024px) {
  .location-mobile {
    display: block;
    margin-bottom: 12px;
  }
  .main-view {
    padding-top: 0;
  }
}

@media (max-width: 768px) {
  .loading-logo {
    width: 220px;
  }

  .main-view {
    margin-top: 74px;
  }

  .location-mobile {
    font-size: 24px;
    margin: 0;
  }

  .tickets {
    padding: 4px 84px;

    h1 {
      font-size: 56px;
    }
  }

  .time-remaining {
    margin-top: 0;
    h1 {
      font-size: 46px;
    }

    p {
      font-size: 24px;
    }
  }

  .show-more {
    font-size: 24px;
    i {
      font-size: 30px;
    }
  }
}
</style>
