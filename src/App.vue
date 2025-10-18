<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import Footer from "./components/Footer.vue";
import CookieConsent from "./components/CookieConsent.vue";
import { initPixel, trackPageView, isInitialized } from "./lib/metaPixel";
import { useRouter } from "vue-router";

const PIXEL_ID = "1470741120826339";

const router = useRouter();

function onConsent() {
  initPixel(PIXEL_ID).catch((err) => console.warn("Pixel init failed", err));
}

function handleConsentEvent() {
  onConsent();
}

onMounted(() => {
  window.addEventListener("cookie-consent-accepted", handleConsentEvent);

  const stored = localStorage.getItem("cookie_consent");
  if (stored === "true") {
    onConsent();
  }

  router.afterEach(() => {
    if (isInitialized()) {
      trackPageView();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("cookie-consent-accepted", handleConsentEvent);
});
</script>

<template>
  <div id="app">
    <router-view />
    <CookieConsent />
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
