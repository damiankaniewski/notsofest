<template>
  <SubHeader></SubHeader>
  <section id="about">
    <div class="content-box">
      <div class="about-us">
        <motion.h1
          class="title"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: [1.0, 1.01, 1.0] }"
          :transition="{
            opacity: {
              duration: 0.4,
              delay: 0.2,
              type: spring,
              stiffness: 120,
            },
            scale: {
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              delay: 0.6,
            },
          }"
          >O NAS</motion.h1
        >
        <AnimatedText
          class="content"
          delay="0.4"
          text="Not So to sześcioosobowa ekipa przyjaciół, którą połączyła wspólna pasja do muzyki i kultury hip-hop. Tworzymy wspólne numery, gramy razem koncerty, rozwijamy własne projekty ale przede wszystkim budujemy Not So Fest. Chcemy, żeby nasz festiwal stał się przestrzenią, gdzie można spróbować swoich sił na scenie, poczuć emocje związane z występami na żywo i spotkać ludzi, którzy lubią się bawić w ten sposób. Wierzymy, że dzięki wspólnej energii i zaangażowaniu uda się nam stworzyć wydarzenie, które nie tylko pokazuje hip-hop w najlepszym wydaniu, ale też daje szansę na rozwój i odkrywanie nowych talentów."
        ></AnimatedText>
      </div>
      <div class="links-box">
        <motion.a
          href="https://www.facebook.com/events/1068622162120392/?acontext=%7B%22event_action_history%22%3A[%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22left_rail%22%2C%22surface%22%3A%22bookmark%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22create_dialog%22%7D]%2C%22ref_notif_type%22%3Anull%7D&onload_action=open_invite_flow&show_created_event_toast=true&locale=pl_PL"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1.0 }"
          :transition="{
            duration: 0.4,
            delay: 0.3,
            type: spring,
            stiffness: 120,
          }"
        >
          <img :src="logo" alt="NotSoFest logo" />
          <p>Festiwal</p>
        </motion.a>
        <motion.a
          href="https://open.spotify.com/artist/3kSJYvdGqUyCbvCJVYk5c9?si=If4s-PsxRBG6LQ-4CTBcTg"
          class="center"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1.0 }"
          :transition="{
            duration: 0.4,
            delay: 0.5,
            type: spring,
            stiffness: 120,
          }"
        >
          <i class="fa-solid fa-compact-disc"></i>
          Muzyka
        </motion.a>
        <motion.a
          href="https://www.instagram.com/notsowear/"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1.0 }"
          :transition="{
            duration: 0.4,
            delay: 0.7,
            type: spring,
            stiffness: 120,
          }"
        >
          <i class="fa-solid fa-shirt"></i>
          Ubrania
        </motion.a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { motion, spring } from "motion-v";
import AnimatedText from "./utils/AnimatedText.vue";
import SubHeader from "./utils/SubdomainHeader.vue";
import logo from "../assets/logo.png";
</script>

<style lang="scss" scoped>
#about {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.content-box {
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  padding: 3rem 140px 6rem 12rem;
}

.about-us {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  text-align: left;
  color: orange;

  .title {
    color: #FF6600;
    padding-left: 1rem;
    font-size: 96px;
    margin-bottom: 0;
  }

  .content {
    font-size: 20px;
    color: #fed1b6;
  }
}

.center {
  margin-top: 40px;
}

.links-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  padding-top: 8rem;
  padding-right: 7rem;

  a {
    display: flex;
    flex-direction: column;
    text-align: center;

    i {
      font-size: 128px;
    }

    img {
      align-self: center;
      margin-top: -78px;
      height: 200px;
      width: 200px;
    }
    p {
      margin: -50px;
      align-self: center;
    }
  }
}

@media (max-width: 1536px) {
  .links-box {
    gap: 3rem;
    a {
      i {
        font-size: 96px;
      }
      img {
        height: 150px;
        width: 150px;
      }
    }
  }
}

@media (max-width: 1280px) {
  #about {
    align-items: center;
    min-height: 100vh;
    height: auto;
  }
}

@media (max-width: 1024px) {
  .content-box {
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    padding: 0;
    margin-bottom: 30px;
    padding: 1rem 2rem 0 2rem;
  }

  .links-box {
    padding-top: 2rem;
    padding-right: 0;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    gap: 0;
  }

  .center {
    margin-top: 0;
  }

  .about-us {
    width: 80%;

    .title {
      font-size: 60px;
    }
    .content {
      font-size: 16px;
    }
  }
}

@media (max-width: 640px) {
  #about {
    height: auto;
  }

  .content-box {
    margin-top: 100px;
  }

  .links-box {
    flex-direction: column;
    gap: 2rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }

  .center {
    margin-top: 46px;
  }

  .about-us {
    .title {
      font-size: 42px;
    }
    .content {
      font-size: 14px;
    }
  }
}
</style>
