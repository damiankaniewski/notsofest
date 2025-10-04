<template>
    <SubHeader></SubHeader>
    <section id="merch">
        <motion.div 
            class="main-view"
            :initial="{ opacity: 0}"
            :animate="{ opacity: 1}"
            :transition="{delay: 0.4, duration: 0.6, type: spring, stifness: 120}"
        >
            <span class="coming-desktop"><h1>COMING&nbsp;SOON</h1><span class="cursor">|</span></span>
            <span class="coming-mobile">
                <div class="coming">
                    <h1>COMING</h1><span class="cursor">|</span>
                </div>
                <div class="soon">
                    <h2>SOON</h2><span class="cursor">|</span>
                </div>
            </span>
        </motion.div>
    </section>
</template>

<script setup>
    import { motion, spring } from 'motion-v';
    import SubHeader from './utils/SubdomainHeader.vue';
</script>

<style lang="scss" scoped>
    .main-view {
        display: flex;
        flex: 1;
        min-height: 100svh;
        align-items: center;
        justify-content: center;
        
        span{
            display: flex;
            flex-direction: row;
            color: #FF6600;

            h1{
                overflow: hidden;
                width: 0;
                font-size: 6rem;
                margin: 0;
                display: flex;
                white-space: nowrap;
                animation: typing 1.6s steps(13) 1s forwards;
            }
        }

        .cursor {
            font-size: 6rem;
            color: azure;
            animation: blink 1.4s step-end infinite;
        }

        .coming-mobile {
            display: none;
        }
    }

    @media (max-width: 1024px){
        .main-view{
            span {
                flex-direction: column;
            }

            .coming-desktop {
                display: none;
            }

            .coming-mobile {
                display: flex;

                div {
                    display: flex;
                    flex-direction: row;

                    h1 {
                        animation: typing-mobile-h1 1s steps(7) 1s forwards;
                    }

                    h2{
                        overflow: hidden;
                        width: 0;
                        font-size: 6rem;
                        margin: 0;
                        display: flex;
                        white-space: nowrap;
                        animation: typing-mobile-h2 1 steps(6) 1s forwards;
                        animation-delay: 2.0s;
                    }
                }

                .coming {
                    .cursor {
                        animation: blink 1.4s step-end infinite, hideCursor 0.1s forwards;
                        animation-delay: 0s, 1.9s;
                    }
                }

                .soon {
                    .cursor {
                        opacity: 0;
                        animation-delay: 2s;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .main-view {
            .coming-mobile {
                div {
                    h1 {
                        font-size: 4rem;
                    }
                    h2 {
                        font-size: 4rem;
                    }
                }
            }

            .cursor {
                font-size: 4rem;
            }
        }
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 12ch;
        }
    }

    @keyframes typing-mobile-h1 {
        from {
            width: 0;
        }
        to {
            width: 7ch;
        }
    }

    @keyframes typing-mobile-h2 {
        from {
            width: 0;
        }
        to {
            width: 5ch;
        }
    }

    @keyframes hideCursor {
        to {
            opacity: 0;
        }
    }

    @keyframes blink {
        0%, 50%, 100% {
            opacity: 1;
        }
        25%, 75% {
            opacity: 0;
        }
    }

</style>