<template>
  <transition>
    <section id="more">
      <motion.div
        class="return-button"
        :class="{ loweredIndex: props.menuVisible }"
        :initial="{ opacity: 0, scale: 0.9 }"
        :animate="{ opacity: 1, y: [0, -10, 0], scale: 1 }"
        :transition="{
          duration: 0.6,
          type: spring,
          stiffness: 120,
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 1 },
        }"
      >
        <a href="#home">
          <i class="fa-solid fa-chevron-up"></i>
        </a>
      </motion.div>
      <div class="main-view">
        <div class="co">
          <motion.p
            class="titles"
            :initial="{ opacity: 0, scale: 0.8 }"
            :while-in-view="{ opacity: 1, scale: [1.0, 1.1, 1.0] }"
            :transition="{
              opacity: {
                duration: 0.6,
                delay: 0.2,
                type: spring,
                stiffness: 120,
              },
              scale: {
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
                delay: 0.2,
              },
            }"
            >Co?
          </motion.p>
          <div class="text-content">
            <AnimatedText
              text="Not So Fest to wyjątkowe wydarzenie poświęcone kulturze hip-hop, które łączy ze sobą różne formy sztuki ulicznej. Stawiamy na promocję artystów oraz budowanie społeczności ludzi zafascynowanych rapem, tańcem, graffiti i szeroko pojętą kulturą hip-hopową. Podczas nadchodzącej edycji będziecie mogli przeżyć koncerty rapowe na żywo, a także emocjonujące bitwy freestyle, street dance i beatbox. Przygotowaliśmy również dodatkowe atrakcje, które podkręcą klimat i sprawią, że na pewno znajdziecie tu coś dla siebie. To świetna okazja, by poczuć prawdziwą energię hip-hopu i stać się częścią tej unikalnej sceny."
            >
            </AnimatedText>
          </div>
        </div>
        <div class="kto">
          <motion.p
            class="titles"
            :initial="{ opacity: 0, scale: 0.8 }"
            :while-in-view="{ opacity: 1, scale: [1.0, 1.1, 1.0] }"
            :transition="{
              opacity: {
                duration: 0.81,
                delay: 0.2,
                type: spring,
                stiffness: 120,
              },
              scale: {
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
                delay: 0.4,
              },
            }"
            >Kto?
          </motion.p>
          <div class="text-content">
            <AnimatedText
              delay="0.4"
              text="Nasze wydarzenie jest budowane przez szereg ambitnych oraz kreatywnych osób, które nie wyobrażają sobie codzienności bez tworzenia! Na scenie pojawią się zarówno doświadczeni wyjadacze, jak i głodni wrażeń debiutanci. 
                Na najbliższym wydarzeniu zagrają dla Was: VBS, Per Dżinn & Żupan, Loki, Flossy, Hoszo&Gabbana, DJ RODO, DJ Sasin i inni. 
                Wśród jurorów poszczególnych bitew znajdą się takie postacie jak: Kaczorex (Street dance), Sznajder (Beatbox) czy Paramaxil (Freestyle). 
                Dodatkowe atrakcje zapewnią: Grind.sz8, HVPPY TATTOO, NYNX.T, GEMYBAJERY, Blockk Studio, Vandal Jewelry, Gmanji oraz Szoraj Burger.
                "
            >
            </AnimatedText>
          </div>
        </div>
        <div class="gdzie">
          <motion.p
            class="titles"
            :initial="{ opacity: 0, scale: 0.8 }"
            :while-in-view="{ opacity: 1, scale: [1.0, 1.1, 1.0] }"
            :transition="{
              opacity: {
                duration: 1,
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
            >Gdzie?
          </motion.p>
          <motion.iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33410.03784441945!2d19.9179119!3d50.0527269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0ab06be74f%3A0xf3dd8c43cc3c000b!2sKlub%20Studencki%20%C5%BBaczek!5e1!3m2!1spl!2spl!4v1755817200793!5m2!1spl!2spl"
            style="border: 0; border-radius: 15px; margin: 20px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :initial="{ opacity: 0, scale: 0.8 }"
            :while-in-view="{ opacity: 1, scale: 1 }"
            :transition="{
              duration: 0.4,
              delay: 0.2,
              type: spring,
              stiffness: 120,
            }"
          ></motion.iframe>
        </div>
      </div>
      <div></div>
    </section>
  </transition>
</template>

<script setup>
import { motion, spring } from "motion-v";
import AnimatedText from "./utils/AnimatedText.vue";

const props = defineProps({
  menuVisible: Boolean,
});
</script>

<style lang="scss" scoped>
.return-button {
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  height: 140px;
  a {
    z-index: 100;
  }
}

.main-view {
  height: 100%;
  padding: 16px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #f16621;
}

#more {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .main-view {
    margin: 0 0 4rem;
    justify-content: center;
    gap: 3rem;
  }
}

.titles {
  margin: 0;
}

.text-content {
  font-size: 18px;
  color: #fed1b6;
  max-width: 54rem;
  margin: 0 auto;
}

.gdzie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 54rem;
  width: 100%;
}

iframe {
  position: relative;
  width: 100%;
  max-width: 52rem;
  height: 300px;
}

.loweredIndex {
  z-index: 10;
}

@media (max-width: 1024px) {
  .text-content {
    font-size: 18px;
  }

  iframe {
    height: 200px;
  }
}

@media (max-width: 768px) {
  .titles {
    font-size: 24px;
  }

  .text-content {
    font-size: 12px;
  }

  #more {
    justify-content: space-between;
    .main-view {
      margin-top: -20px;
      padding: 0 20px;
      gap: 0;
    }
  }

  iframe {
    height: 140px;
  }

  .return-button {
    align-items: flex-start;
    a {
      i {
        font-size: 36px;
      }
    }
  }
}
</style>
