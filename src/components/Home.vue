<template>
    <transition name="loading-fade">
        <div v-if="!animationEnded" class="loading-screen">
            <motion.img
            class="loading-logo"
            :src="logo" 
            alt="NotSoFest logo"
            :initial="{y:0, opacity: 1, scale: 1}"
            :animate="startAnimation  ? {y: -800, opacity: 0} : null"
            :transition="{ duration: 0.2, ease: 'easeOut'}"
            @animation-complete="handleAnimationEnd"
            />
        </div>
    </transition>
    <transition name="loading-fade">
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
            <source :src="intro" type="video/mp4">
        </video>
    </transition>
    <transition name="loading-fade">
        <section id="home" v-show="videoEnded">
            <img
                class="home-background"
                :src="placeholder" 
                alt=""
                @load="handleBackgroundLoad"
            >
            <div class="overlay">
                <div class="header">
                    <div class="left">
                        <button>
                        <i class="fas fa-bars"></i>
                        </button>
                        <a href="https://www.google.com/maps/place/Klub+Studencki+%C5%BBaczek/@50.0527269,19.9179119,4833m/data=!3m1!1e3!4m6!3m5!1s0x47165b0ab06be74f:0xf3dd8c43cc3c000b!8m2!3d50.060407!4d19.9223938!16s%2Fg%2F11h0tfk2r?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D">Kraków<br>Klub Żaczek</a>
                    </div>
                    <div class="center">
                        <img :src="logo" alt="NotSoFest logo">
                    </div>
                    <div class="right">
                        <p>15.11.2025</p>
                    </div>
                </div>
                <div class="main-view">
                    <div class="placeholder"></div>
                    <div class="center-content">
                        <button class="tickets">
                            Kup<br>Bilet
                        </button>
                        <div class="time-remaining">
                            <h1>
                                Pozostało
                            </h1>
                            <p v-html="timeRemaining"></p>
                        </div>
                    </div>
                    <div href="#more" class="show-more">
                        <a href="#more">Pokaż więcej</a>
                        <a href="#more">
                            <i class="fas fa-chevron-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </transition>
    <transition>
        <section id="more" v-show="videoEnded">
            <div class="header">
                <div class="left">
                    <button>
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <div class="center">
                    <a href="#home">
                        <i class="fas fa-chevron-up"></i>
                    </a>
                </div>
                <div class="right">
                    <img :src="logo" alt="NotSoFest logo">
                </div>
            </div>
            <div class="main-view">
                <div class="co">
                    <p class="titles">Co?</p>
                    <div class="text-content">
                        <p>
                            Koncert, który łączy pasję do hip-hopu z klimatem prawdziwego spotkania fanów muzyki. Na scenie usłyszysz dynamiczne bity, teksty opowiadające historie z życia i energię, która stopniowo wciąga w rytm.
                            To wieczór pełen muzyki, kontaktu z publicznością i momentów, które zostają w pamięci jeszcze długo po ostatnim kawałku.
                        </p>
                    </div>
                </div>
                <div class="kto">
                    <p class="titles">Kto?</p>
                    <div class="text-content">
                        <p>
                            MC's i DJ-e, którzy wiedzą, jak poprowadzić publiczność przez całą muzyczną podróż. W składzie pojawią się zarówno wykonawcy, którzy mają już swoje miejsce na scenie, jak i ci, którzy dopiero pokazują swój potencjał.
                            Wspólnie tworzą mieszankę różnych stylów i brzmień, dzięki czemu każdy znajdzie tu coś dla siebie.
                        </p>
                    </div>
                    
                </div>
                <div class="gdzie">
                    <p class="titles">Gdzie?</p>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33410.03784441945!2d19.9179119!3d50.0527269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0ab06be74f%3A0xf3dd8c43cc3c000b!2sKlub%20Studencki%20%C5%BBaczek!5e1!3m2!1spl!2spl!4v1755817200793!5m2!1spl!2spl" 
                        style="border:0; border-radius: 15px; margin: 20px;"
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    </transition>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, watch} from "vue";
    import { motion } from "motion-v";
    import logo from "../assets/logo.png";
    import intro from "../assets/intro.mp4"
    import placeholder from "../assets/placeholder.png"
    

    const introLoaded = ref(false);
    const backgroundLoaded = ref(false);
    const videoEnded = ref(false);
    const minLoadingTime = ref(false);
    const startAnimation = ref(false);
    const animationEnded = ref(false);

    const eventDate = new Date("2025-11-15T12:00:00");
    const timeRemaining = ref("");

    const handleVideoLoad = () => {
        introLoaded.value = true;
    }

    const handleBackgroundLoad = () => {
        backgroundLoaded.value = true;
    }

    const handleVideoEnd = () => {
        videoEnded.value = true;
    }
    
    const handleAnimationEnd = () => {
        animationEnded.value = true;
    }

    watch([introLoaded, backgroundLoaded, minLoadingTime], ([intro, bg, time]) => {
        if (intro && bg && time){
            startAnimation.value = true;
        }
    });

    
    const updateTime = () => {
        const now = new Date().getTime();
        const timeToEvent = eventDate.getTime() - now;

        if (timeToEvent <= 0){
            timeRemaining.value = "Wydarzenie już trwa!";
            return;
        }

        const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
        const minutes = Math.floor((timeToEvent % (1000 * 60  * 60)) / (1000 * 60));
        const seconds = Math.floor((timeToEvent) % (1000 * 60) / 1000);
        timeRemaining.value = `${days} dni: ${hours} godzin: ${minutes} minut<br>${seconds} sekund`;
    }

    let interval;

    onMounted(() => {

        setTimeout(() => {
            minLoadingTime.value = true;
        }, 800)

        updateTime();
        interval = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
        clearInterval(interval);
    });

</script>

<style lang="scss" scoped>

    a:hover {
        scale: 1.05;
        color: #cc611f;
    }

    .intro {
        display: flex;
        position: fixed;
        justify-content: center;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .loading-fade-leave-active {
        transition: all 0.8s ease;
    }
    .loading-fade-leave-to {
        opacity: 0;
        transform: translateY(-20px);
        backdrop-filter: blur(0);
        background: rgba(0, 0, 0, 0);
    }

    .page-fade-enter-active {
        transition: all 0.8s ease 0.4s;
    }
    .page-fade-enter-from {
        opacity: 0;
        transform: translateY(20px);
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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 0px 0px 25px rgba(0,0,0,0.25);
    }

    .overlay {
        position: absolute;
        display: flex;
        flex-direction: column;
        background: rgba(0,0,0,0.5);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .header {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: flex-start;
        height: 140px;
    }
    
    .left, .center, .right {
        padding: 36px 40px;
        gap: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FD7622;
        
        img {
            height: auto;
            width: 200px;
        }
        button {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            i {
                font-size: 64px;
                color: #FD7622;
            }
        }
        button:hover {
            i{
                scale: 1.05;
                color: #cc611f;
            }
        }
    }

    .center {
        padding: 0;
        justify-self: center;
        align-self: center;
    }
    
    .right{
        justify-self: end;
    }

    .main-view {
        height: 100%;
        padding: 16px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #FD7622;
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
        background: #fd7622f5;
        border: none;
        margin-top: 32px;
        border-radius: 15px;
        padding: 32px 164px;
        color: black;
        font-size: 92px;
    }
    .tickets:hover {
        scale: 1.05;
        background: #cc611f;
        cursor: pointer;
    }

    .show-more {
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

        .center {
            padding: 36px 40px;
            align-self: flex-start;
            font-size: 64px;
        }
        .right {
            padding: 0 40px;
        }
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
        font-size: 20px;
        color: #FED1B6;
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

</style>