<template>
  <SubHeader></SubHeader>
  <section>
    <div class="main-view">
      <div v-if="loading" id="loading">Ładowanie...</div>
      <div v-else-if="error" id="error">{{ error }}</div>
      <div v-else>
        <div v-for="event in events" :key="event.id" class="event">
          <h1>{{ event.title }}</h1>
          <div class="big-container">
            <motion.div
              :initial="{ scale: 0.9, opacity: 0, x: -400 }"
              :animate="{ scale: 1.0, opacity: 1, x: 0 }"
              :transition="{
                delay: 0.2,
                duration: 2,
                type: spring,
                stiffness: 120,
              }"
              class="img-container"
            >
              <img
                :src="event.pictures[0].url"
                alt="TICKET IMAGE"
                class="event-img"
              />
            </motion.div>
            <div class="info-container">
              <motion.div
                class="time-box"
                :initial="{ scale: 0.9, opacity: 0 }"
                :animate="{ scale: 1.0, opacity: 1 }"
                :transition="{
                  delay: 0.6,
                  duration: 2,
                  type: spring,
                  stiffness: 120,
                }"
              >
                <div class="localization-box">
                  <p>Lokalizacja:</p>
                  <a
                    href="https://www.google.com/maps/place/Klub+Studencki+%C5%BBaczek/@50.0527269,19.9179119,4833m/data=!3m1!1e3!4m6!3m5!1s0x47165b0ab06be74f:0xf3dd8c43cc3c000b!8m2!3d50.060407!4d19.9223938!16s%2Fg%2F11h0tfk2r?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D"
                  >
                    Klub Żaczek
                  </a>
                </div>
                <p>godz. 17:00</p>
              </motion.div>
              <div class="buy-ticket-box">
                <a
                  :href="
                    isTicketActive(event)
                      ? event.pages.reservationForm.url +
                        '?salesChannelId=' +
                        event.offer.prices.salesChannel.id
                      : null
                  "
                  :class="{ disabled: !isTicketActive(event) }"
                  @click="handleBuyClick(event, $event)"
                >
                  Kup Bilet
                </a>
                <motion.p v-if="event.offer.places.areLastPlaces">
                  Ostatnie Bilety
                </motion.p>
                <motion.p v-else-if="event.offer.active.state === 'FINISHED'">
                  Bilety wyprzedane
                </motion.p>
                <motion.p v-else-if="event.cancelled">Odwołano</motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { motion, spring } from "motion-v";
import SubHeader from "./utils/SubdomainHeader.vue";
import { track, isInitialized } from "../lib/metaPixel";

const events = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const url =
      "https://api.kicket.com/affiliate/listings-v1?salesChannelId=0199a929-6f1b-762d-949b-7fcde96dcade&localeId=pl-pl";

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Błąd pobierania danych: ${res.status}`);
    }

    const data = await res.json();
    events.value = data.content;
    events.value.splice(1);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }

  await nextTick();
  if (
    window.kicket &&
    typeof window.kicket.setupEmbeddedReservations === "function"
  ) {
    window.kicket.setupEmbeddedReservations();
  }
});

const isTicketActive = (event) => {
  const state = event.offer.active.state;
  const cancelled = event.cancelled;
  return !cancelled && state !== "FINISHED";
};

function handleBuyClick(eventData, e) {
  if (!isTicketActive(eventData)) {
    e.preventDefault();
    return;
  }

  if (window.fbq) {
    window.fbq("track", "PurchaseIntent", {
      event_id: eventData.id,
      event_name: eventData.title,
      value: eventData.offer?.prices?.default?.value || 0,
      currency: "PLN",
    });
  }
}
</script>

<style lang="scss" scoped>
.main-view {
  display: flex;
  flex-direction: column;
  padding: 0 8rem;
  height: 100%;
  min-height: 100svh;
  justify-content: center;
}

.big-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4rem;
}

.img-container {
  width: 600px;
  flex-shrink: 0;
  overflow: hidden;
  max-width: 600px;
}

.event-img {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  height: auto;
}

.buy-ticket-box {
  display: flex;
  flex-direction: column;
  a,
  p {
    text-align: center;
    margin: 0;
    padding: 1rem;
    border: 2px solid #ff6600;
  }

  a {
    background-color: #421b00;
    animation: blink 4s ease-in-out infinite;
  }
}

.localization-box {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.price-box {
  gap: 1rem;
  display: flex;
  flex-direction: row;
}

.time-box {
  a {
    color: #ff6600;
  }
  text-align: center;
}

#loading {
  color: white;
}
#error {
  color: white;
}

h2 {
  margin: 0;
  color: white;
  font-size: 2rem;
}
h1 {
  text-align: center;
  color: #ff6600;
}
p {
  margin: 0;
  font-size: 2rem;
  color: white;
}
a {
  color: white;
}

.disabled {
  background-color: gray !important;
  pointer-events: none;
}

@media (max-width: 1280px) {
  h1 {
    font-size: 4rem;
  }
  p,
  h2 {
    font-size: 1.6rem;
  }
  .localization-box {
    a {
      font-size: 1.6rem;
    }
  }
  .buy-ticket-box {
    a {
      font-size: 1.6rem;
    }
  }
}
@media (max-width: 1024px) {
  .main-view {
    margin-top: 80px;
  }
  .big-container {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .main-view {
    padding: 0 2rem;
  }
  .img-container {
    width: 500px;
    max-width: 600px;
  }
  h1 {
    font-size: 1.8rem;
  }
  p,
  h2 {
    font-size: 1.2rem;
  }
  .price-box {
    gap: 0.6rem;
  }
  .big-container {
    gap: 1.2rem;
  }
  .localization-box {
    gap: 0.6rem;
    a {
      font-size: 1.2rem;
    }
  }
  .buy-ticket-box {
    a {
      font-size: 1.2rem;
    }
  }
}

@keyframes blink {
  0% {
    background-color: #421b00;
  }
  25% {
    background-color: #7a3300;
  }
  50% {
    background-color: #803300;
  }
  100% {
    background-color: #421b00;
  }
}
</style>
