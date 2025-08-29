<template>
    <header class="header">
        <div class="left">
            <button>
                <i class="fas fa-bars"></i>
            </button>
            <a :class="{ localization: scrolledDown}" href="https://www.google.com/maps/place/Klub+Studencki+%C5%BBaczek/@50.0527269,19.9179119,4833m/data=!3m1!1e3!4m6!3m5!1s0x47165b0ab06be74f:0xf3dd8c43cc3c000b!8m2!3d50.060407!4d19.9223938!16s%2Fg%2F11h0tfk2r?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D">Kraków<br>Klub Żaczek</a>
        </div>
        <div class="center">
            <img v-if="!scrolledDown" :src="logo" alt="NotSoFest logo">
        </div>
        <div class="right" :class="{ 'right-scrolled': scrolledDown}">
            <p v-if="!scrolledDown">15.11.2025</p>
            <img v-else :src="logo" alt="NotSoFest logo" class="logo-scrolled">
        </div>
    </header>
</template>

<script setup>
    import { onMounted, onUnmounted, ref } from "vue";
    import logo from "../assets/logo.png";

    const scrolledDown = ref(false);

    const handleScroll = () => {
        scrolledDown.value = window.scrollY >= 100;
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });

</script>

<style lang="scss" scoped>

    .header {
        z-index: 10;
        position: fixed;
        display: grid;
        width: 100%;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        height: 140px;
    }
    
    .localization {
        visibility: hidden;
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
    
    .right {
        justify-self: end;   
    }

    .logo-scrolled {
        padding: 0 40px;
    }

    .right-scrolled {
        padding: 0;
    }

</style>