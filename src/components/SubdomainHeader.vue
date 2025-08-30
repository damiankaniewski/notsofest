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
        z-index: 20;
        position: fixed;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        height: 140px;
        width: 100%;
        
        div {
            display: flex;
            padding: 36px 40px;
            align-items: center;
            text-align: center;   
        }
        .right {
            padding: 0 40px;
            justify-self: flex-end;
            align-self: center;
        }
        img {
            width: auto;
            height: 200px;
        }
    }
</style>