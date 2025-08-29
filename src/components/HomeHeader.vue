<template>
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
</template>

<script setup>
    import logo from "../assets/logo.png";

</script>

<style lang="scss" scoped>

    .header {
        z-index: 100;
        position: fixed;
        display: grid;
        width: 100%;
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
        margin-top: -24px;
    }
    
    .right{
        justify-self: end;
    }

</style>