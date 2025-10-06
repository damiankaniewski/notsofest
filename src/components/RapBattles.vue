<template>
  <SubHeader></SubHeader>
  <section>
    <div class="main-view">
      <h2>Zgłoś się na bitwę!</h2>
      <h3>
        Chciałbyś spróbować swoich sił w bitwach podczas Not So Fest? Wypełnij
        formularz zgłoszeniowy na bitwę, która Cię interesuje i walcz o nagrody
        z innymi! Szczegółowe informacje na temat konkretnych bitew, znajdziesz
        w opisie formularzy po kliknięciu na dedykowany guzik.
      </h3>
      <motion.div
        :initial="{ x: -2000 }"
        :animate="{ x: 0, scale: [1.0, 1.02, 1.0] }"
        id="beatbox-battle"
      >
        <a href="https://forms.gle/QDHDxSP8qQuCgQGv8" class="battle-link">
          <p>Zgłoś się na bitwę</p>
          <h1>BEATBOX</h1>
        </a>
      </motion.div>
      <motion.div
        :initial="{ x: -2000 }"
        :animate="{ x: 0, scale: [1.0, 1.02, 1.0] }"
        id="freestyle-battle"
      >
        <a href="https://forms.gle/gmNaL6Z8Pq7FgFVv9" class="battle-link">
          <p>Zgłoś się na bitwę</p>
          <h1>FREESTYLE</h1>
        </a>
      </motion.div>
      <motion.div
        id="street-dance-battle"
        :initial="{ x: -2000 }"
        :animate="{ x: 0, scale: [1.0, 1.02, 1.0] }"
      >
        <a href="https://forms.gle/w7PtzGz7RShmt7U77" class="battle-link">
          <p>Zgłoś się na bitwę</p>
          <h1>STREET DANCE</h1>
        </a>
      </motion.div>
    </div>
  </section>
</template>

<script setup>
import SubHeader from "./utils/SubdomainHeader.vue";
import { delay, easeInOut, motion, spring } from "motion-v";
</script>

<style lang="scss" scoped>
.main-view {
  display: flex;
  flex-direction: column;
  padding: 0 16rem;
  height: 100%;
  min-height: 100svh;
  justify-content: center;

  div {
    display: flex;
    padding: 2.4rem 0;
  }
}

.battle-link {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  border: #ff6600;
  border: solid;
  border-radius: 20px;
  padding: 1rem;
  animation: blink 4s ease-in-out infinite;

  &:hover {
    background-color: #381600;
  }
}

h2 {
  color: #ff6600;
  font-size: 5rem;
  align-self: center;
  margin-bottom: 0;
}

h3 {
  color: white;
  font-size: 1rem;
  text-align: center;
}

h1,
p {
  margin: 0;
  align-self: center;
}

#freestyle-battle {
  justify-content: center;

  .battle-link {
    animation-delay: 1s;
  }
}

#street-dance-battle {
  justify-content: end;

  .battle-link {
    animation-delay: 2s;
  }
}

p {
  color: white;
}
h1 {
  color: #ff6600;
}

@media (max-width: 1280px) {
  .main-view {
    padding: 0 10rem;
    div {
      padding: 2rem 0;
    }
  }

  h2 {
    font-size: 4rem;
  }
  h1 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.8rem;
  }
}

@media (max-width: 1024px) {
  .main-view {
    padding: 0 0;
  }
  #beatbox-battle {
    justify-content: center;
  }
  #street-dance-battle {
    justify-content: center;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    padding: 0 6rem;
  }
  h1 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .main-view {
    div {
      padding: 1.6rem 0;
    }
  }

  .battle-link {
    padding: 0.7rem;
    border-radius: 16px;
    gap: 0.6rem;
  }

  h2 {
    font-size: 2rem;
  }
  h3 {
    padding: 0 1rem;
    font-size: 0.8rem;
  }
  h1 {
    font-size: 1.3rem;
  }
  p {
    font-size: 1rem;
  }
}

@keyframes blink {
  0% {
    border-color: #ff6600;
  }
  25% {
    border-color: #c24e00;
  }
  50% {
    border-color: #923a00;
  }
  100% {
    border-color: #ff6600;
  }
}
</style>
