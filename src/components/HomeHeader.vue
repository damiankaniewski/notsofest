<template>
    <header class="header">
        <div class="left">
            <button v-if="!openedMenu" @click="handleOpenedMenu">
                <i class="fa-solid fa-bars"></i>
            </button>
            <button v-else @click="handleClosedMenu">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <a v-show="!scrolledDown && !openedMenu" href="https://www.google.com/maps/place/Klub+Studencki+%C5%BBaczek/@50.0527269,19.9179119,4833m/data=!3m1!1e3!4m6!3m5!1s0x47165b0ab06be74f:0xf3dd8c43cc3c000b!8m2!3d50.060407!4d19.9223938!16s%2Fg%2F11h0tfk2r?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D">Kraków<br>Klub Żaczek</a>
        </div>
        <div class="center">
            <img v-if="!scrolledDown && !openedMenu" :src="logo" alt="NotSoFest logo">
        </div>
        <div class="right" :class="{ 'right-scrolled': scrolledDown || openedMenu}">
            <p v-if="!scrolledDown && !openedMenu">15.11.2025</p>
            <img v-else :src="logo" alt="NotSoFest logo" class="logo-scrolled">
        </div>
    </header>
</template>

<script setup>
    import { defineEmits, onMounted, onUnmounted, ref } from "vue";
    import logo from "../assets/logo.png";

    const emit = defineEmits(['toggle-menu']);

    const scrolledDown = ref(false);
    const openedMenu = ref(false);

    const handleScroll = () => {
        scrolledDown.value = window.scrollY >= 100;
    };

    const handleOpenedMenu = () => {
        openedMenu.value = true;
        emit('toggle-menu');
    };

    const handleClosedMenu = () => {
        openedMenu.value = false;
        emit('untoggle-menu');
    }

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });

</script>

<style lang="scss" scoped>

    .header {
        z-index: 20;
        position: fixed;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        height: 140px;
        width: 100%;
    }
    
    .left, .center, .right {
        display: flex;
        padding: 36px 40px;
        gap: 20px;
        align-items: center;
        text-align: center;
        color: #FD7622;
        
        img {
            height: 200px;
            width: auto;
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

    @media(max-width: 1024px) {
        .left {
            a {
                display: none;
            }
        }
    }

    @media(max-width: 768px) {
        .right {
            display: none;
        }

        .center, .right-scrolled {
            display: flex;
            img {
                height: 100px;
            }
        }

        .left {
            padding: 36px 12px;
            button {
                i {
                    font-size: 36px;
                }
            }
            a {
                display: none;
            }
        }

        .logo-scrolled {
            padding: 0 12px;
        }
    }

</style>