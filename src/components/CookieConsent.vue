<template>
  <transition name="slide-up">
    <div v-if="visible" class="cookie-consent">
      <div class="container">
        <div class="message">
          Ta strona używa cookies w celu analiz i poprawy działania. Akceptując,
          wyrażasz zgodę na zbieranie danych analitycznych.
        </div>
        <div class="actions">
          <button class="btn" @click="accept">Akceptuj</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const STORAGE_KEY = "cookie_consent";

const visible = ref(false);

onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== "true") {
    visible.value = true;
  }
});

function accept() {
  localStorage.setItem(STORAGE_KEY, "true");
  visible.value = false;
  const ev = new CustomEvent("cookie-consent-accepted");
  window.dispatchEvent(ev);
}
</script>

<style scoped lang="scss">
.cookie-consent {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #333;
  color: white;
  padding: 14px 12px;
  z-index: 9999;
  box-shadow: 0 -6px 30px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: nowrap;
}

.message {
  font-size: 14px;
  text-align: center;
}

.actions {
  display: flex;
}

.actions .btn {
  background: #ff6600;
  border: none;
  color: white;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap; /* żeby tekst przycisku się nie łamał */
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
