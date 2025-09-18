<template>
    <Transition>
        <section class="burger-overlay">
            <motion.div class="burger-items" initial="">
                <motion.a
                    :initial="{ x: -500 }"
                    :animate="{ x: 0 }"
                    :transition="{ duration: 0.2, type: spring, stiffness: 120 }"
                    href="/o-nas"
                >O Nas</motion.a>
                <motion.a
                    :initial="{ x: 500 }"
                    :animate="{ x: 0 }"
                    :transition="{ duration: 0.2, type: spring, stiffness: 120 }"
                    href="/bilety"
                >Bilety</motion.a>
                <motion.a
                    :initial="{ x: -500 }"
                    :animate="{ x: 0 }"
                    :transition="{ duration: 0.2, type: spring, stiffness: 120 }"
                    href="/galeria"
                >Galeria</motion.a>
                <motion.a
                    :initial="{ x: 500 }"
                    :animate="{ x: 0 }"
                    :transition="{ duration: 0.2, type: spring, stiffness: 120 }"
                    href="/Merch"
                >Merch</motion.a>
                <motion.a
                    :initial="{ x: -500 }"
                    :animate="{ x: 0 }"
                    :transition="{ duration: 0.2, type: spring, stiffness: 120 }"
                    href="/kontakt"
                >Kontakt</motion.a>
            </motion.div>
        </section>
    </Transition>
</template>

<script setup>
    import { motion, spring} from "motion-v"
</script>

<style lang="scss" scoped>

  .burger-overlay {
    z-index: 20;
    inset: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .burger-items {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 64px;
  }

  @media (max-width: 768px) {
    .burger-items {
      font-size: 56px;
    }
  }
  
</style>