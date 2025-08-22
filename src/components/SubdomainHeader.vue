<template>
    <div class="header">
        <div class="left">
            <a href="/">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
        </div>
        <div class="right">
            <img :src="logo" alt="NotSoFest logo">
        </div>
    </div>
    
</template>

<script setup>
    import logo from "../assets/logo.png";


</script>

<style lang="scss" scoped>

    a {
        cursor: pointer;
    }
    i {
        color: #FD7622;
        font-size: 64px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        position: fixed;
        height: 140px;
        width: 100%;
        z-index: 10;

        div {
            display: flex;
            padding: 36px 40px;
            text-align: center;
            align-items: center;
        }
        .right {
            justify-self: center;
            align-self: center;
            padding: 0 40px;
        }
        img {
            height: auto;
            width: 200px;
        }
    }
</style>