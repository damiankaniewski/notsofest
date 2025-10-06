<template>
  <SubHeader></SubHeader>
  <section>
    <div class="main-view">
        <motion.h1
          :initial="{ scale: 0.9, opacity: 0}"
          :animate="{ scale: 1.0, opacity: 1}"
          :transition="{ delay: 0.2, duration: 2, type: spring, stiffness: 120,}"
        >
            Dziękujemy za zakup!
        </motion.h1>
        <motion.p
          :initial="{ scale: 0.9, opacity: 0}"
          :animate="{ scale: 1.0, opacity: 1}"
          :transition="{ delay: 0.4, duration: 2, type: spring, stiffness: 120,}"
        >
          Dziękujemy za dokonanie zakupu! Na Twój e-mail zostało wysłane potwierdzenie transakcji wraz z biletami. Jeżeli bilety nie znajdą się na mailu, sprawdź również folder SPAM albo skontaktuj się z nami. Możesz również pobrać bilety klikając poniżej.
        </motion.p>
        <motion.div
          :initial="{ scale: 0.9, opacity: 0}"
          :animate="{ scale: 1.0, opacity: 1, scale: [1.0, 1.02, 1.0]}"
          :transition="{ delay: 0.6, duration: 2, type: spring, stiffness: 120,
            scale: { delay: 0.6, duration: 2, ease: 'easeInOut', repeat: Infinity}
          }"
        >
          <a href="" id="ticket-url">
            Pobierz bilety
          </a>
        </motion.div>
    </div>
  </section>
</template>

<script setup>
  import { motion } from "motion-v";
  import SubHeader from "./utils/SubdomainHeader.vue";
  
</script>

<style lang="scss" scoped>
  #ticket-url{
    border: solid #FF6600 2px;
    font-size: 2rem;
    border-radius: 15px;
    padding: 2rem;
    color: white;
    animation: blink 2s ease-in-out infinite;
  }
  .main-view {
    display: flex;
    flex-direction: column;
    padding: 0 10rem;
    height: 100%;
    min-height: 100svh;
    justify-content: center;
    text-align: center;
  }
  h1 {
      color: #FF6600;
      text-align: center;
  }
  p {
    color: white;
    margin-bottom: 8rem;
  }

@media (max-width: 1280px){
  .main-view {
    padding: 0 12rem;
  }
   h1 {
    font-size: 4rem;
    margin-bottom: 0;
  }
  p {
    font-size: 2rem;
    margin-bottom: 5rem;
  }
  a {
    font-size: 2rem;
  }
}

@media (max-width: 1024px){
  .main-view {
    margin-top: 100px;
    padding: 0 6rem;
    padding-bottom: 4rem;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 5rem;
  }
  a {
    font-size: 2rem;
  }
}

@media (max-width: 768px){
  .main-view {
    padding: 0 2rem;
    margin-top: 30px;
  }
  h1 {
    font-size: 1.6rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 5rem;
  }
  a {
    font-size: 1.6rem;
  }
}

@keyframes blink {
    0% {
      background-color: #421b00;
    }
    25% {
      background-color: #662b00;
    }
    50% {
      background-color: #742e00;
    }
    100% {
      background-color: #421b00;
    }
  }
</style>
