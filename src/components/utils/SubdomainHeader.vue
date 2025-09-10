<template>
    <div class="header">
        <motion.div
            class="left"
            :initial="{ opacity: 0, scale: 0.8, x: -250}"
            :animate="{ opacity: 1, scale: 1.0, x: 0}"
            :transition="{ duration: 0.4, delay: 0.2, type: spring, stiffness: 120}"
        >
            <a href="/">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
        </motion.div>
        <motion.div 
            class="right"
            :initial="{ opacity: 0, scale: 0.8, x: 300}"
            :animate="{ opacity: 1, scale: 1.0, x: 0}"
            :transition="{ duration: 0.4, delay: 0.2, type: spring, stiffness: 120}"
        >
            <img :src="logo" alt="NotSoFest logo">
        </motion.div>
    </div>
    
</template>

<script setup>
    import { motion } from "motion-v";
    import logo from "../../assets/logo.png";
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

    @media(max-width: 768px) {
        .left {
            padding: 36px 12px;
            i {
                font-size: 36px;
            }
        }

        .header {
            img {
                height: 100px;
            }
        }
    }

</style>