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
        :initial="{ y: 0}"
        :animate="{ y: scrollY * 0.2}"
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
              >Kraków<br />Klub Żaczek</a
            >
            <motion.button
              class="tickets"
              :initial="{ opacity: 0, scale: 0.8 }"
              :animate="{ opacity: 1, scale: 1.0 }"
              :transition="{
                duration: 0.5,
                delay: 0.2,
                type: spring,
                stiffness: 120,
              }"
            >
              Kup bilet
            </motion.button>
            <div class="time-remaining">
              <motion.h1
                :initial="{ opacity: 0, scale: 0.8 }"
                :animate="{ opacity: 1, scale: 1.0 }"
                :transition="{
                  duration: 0.5,
                  delay: 0.3,
                  type: spring,
                  stiffness: 120,
                }"
              >
                Pozostało
              </motion.h1>
              <motion.p
                v-html="timeRemaining"
                :initial="{ opacity: 0, scale: 1.2 }"
                :animate="{ opacity: 1, scale: 1.0 }"
                :transition="{
                  duration: 1.2,
                  delay: 0.6,
                  type: spring,
                  stiffness: 120,
                }"
              ></motion.p>
            </div>
          </div>
          <motion.div
            href="#more"
            class="show-more"
            :class="{ loweredIndex: menuVisible }"
            :initial="{ y: 100, opacity: 0 }"
            :animate="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.6, type: spring, stiffness: 120 }"
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

  import Header from "./utils/HomeHeader.vue";
  import More from "./More.vue";
  import BurgerMenu from "./utils/BurgerMenu.vue";

  import logo from "../assets/logo.png";
  import introPion from "../assets/intro-pion.mp4";
  import intro from "../assets/intro.mp4";
  import placeholder from "../assets/placeholder.png";

  import { loadingStatus } from "./scripts/siteLoadingScript.js";
  import { calculateCountdown } from "./scripts/calculateCountdown.js";

  const eventDate = new Date("2025-11-15T12:00:00");
  const { timeRemaining } = calculateCountdown(eventDate);

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

  const menuVisible = ref(false);

  const scrollY = ref(0);

  const handleScroll = () => {
    scrollY.value = window.scrollY;
  }

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
  .intro {
    display: flex;
    position: fixed;
    justify-content: center;
    object-fit: cover;
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
    position: absolute;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main-view {
    height: 100%;
    padding: 16px;
    padding-top: 4rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fd7622;
  }

  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .time-remaining {
    h1 {
      margin: 0;
      font-size: 96px;
    }
    p {
      margin: 0;
      font-size: 64px;
    }
  }

  .tickets {
    visibility: hidden;
    background: #fd7622f5;
    border: none;
    margin-top: 32px;
    border-radius: 15px;
    padding: 32px 32px;
    color: black;
    font-size: 2rem;
  }

  .tickets:hover {
    scale: 1.05;
    background: #cc611f;
    cursor: pointer;
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

  #more {
    display: flex;
    flex-direction: column;

    .main-view {
      margin: 0 0 4rem;
      justify-content: center;
      gap: 3rem;
    }
  }

  .loweredIndex {
    z-index: 10;
  }

  .location-mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    .tickets {
      padding: 12px 6rem;
    }

    .time-remaining {
      p {
        font-size: 42px;
      }
    }

    .main-view {
      padding-top: 0;
    }
  }

  @media (max-width: 768px) {
    .location-mobile {
      display: block;
    }

    .loading-logo {
      width: 220px;
    }

    .tickets {
      font-size: 64px;
      padding: 12px 84px;
      margin: 0;
    }

    .location-mobile {
      padding-top: 32px;
      font-size: 32px;
    }

    .time-remaining {
      h1 {
        font-size: 64px;
      }
      p {
        font-size: 20px;
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
