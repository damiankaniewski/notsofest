<template>
    <SubHeader></SubHeader>
    <section id="about">
        <div class="content-box">
            <div class="about-us">
                <motion.h1
                    class="title"
                    :initial="{ opacity: 0, scale: 0.8}"
                    :animate="{ opacity: 1, scale: [1.0, 1.01, 1.0]}"
                    :transition="{ 
                        opacity: { duration: 0.4, delay: 0.2, type: spring, stiffness: 120 },
                        scale: { repeat: Infinity, duration: 2, ease: 'easeInOut', delay: 0.6}
                    }"
                >O NAS</motion.h1>
                <AnimatedText
                    class="content"
                    delay="0.4"
                    text="Nootsofest to ekipa, która łączy energię ulicy z nowoczesnym brzmieniem.
                    Tworzymy muzykę, w której bity pulsują w rytmie miasta, a teksty opowiadają nasze historie — szczere, surowe i bez filtrów.
                    Każdy z nas wnosi do składu swój unikalny styl: od soczystych punchline'ów, przez melodyjne refreny, po produkcje, które wkręcają się w głowę na długo.
                    Nie gonimy za trendami — wyznaczamy własne.
                    Inspirujemy się kulturą hip-hopu w najczystszej formie, ale nie boimy się mieszać gatunków, eksperymentować i zaskakiwać.
                    Nasze koncerty to mieszanka adrenaliny, kontaktu z publiką i energii, która nie pozwala stać w miejscu.
                    Notsofest to nie tylko muzyka — to wspólnota ludzi, którzy czują ten sam vibe.
                    Jeśli chcesz poczuć prawdziwy hip-hop w wersji 2025, jesteś we właściwym miejscu."
                ></AnimatedText>
            </div>
            <div class="links-box">
                <motion.a
                    href="/bilety"
                    :initial="{ opacity: 0, scale: 0.8}"
                    :animate="{ opacity: 1, scale: 1.0}"
                    :transition="{ duration: 0.4, delay: 0.3, type: spring, stiffness: 120}"
                >
                    <img :src="logo" alt="NotSoFest logo">
                    <p>Festiwal</p>
                </motion.a>
                <motion.a 
                    href="/galeria"
                    class="center"
                    :initial="{ opacity: 0, scale: 0.8}"
                    :animate="{ opacity: 1, scale: 1.0}"
                    :transition="{ duration: 0.4, delay: 0.5, type: spring, stiffness: 120}"
                >
                    <i class="fa-solid fa-compact-disc"></i>
                    Muzyka
                </motion.a>
                <motion.a 
                    href="/merch"
                    :initial="{ opacity: 0, scale: 0.8}"
                    :animate="{ opacity: 1, scale: 1.0}"
                    :transition="{ duration: 0.4, delay: 0.7, type: spring, stiffness: 120}"
                >
                    <i class="fa-solid fa-shirt"></i>
                    Ubrania
                </motion.a>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { motion, spring } from "motion-v";
    import AnimatedText from "./utils/AnimatedText.vue";
    import SubHeader from "./utils/SubdomainHeader.vue";
    import logo from "../assets/logo.png";

</script>

<style lang="scss" scoped>

    #about {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .content-box {
        position: relative;
        align-items: flex-start;
        justify-content: space-between;
        display: flex;
        padding: 6rem 140px 6rem 12rem;
    }

    .about-us {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 60%;
        text-align: left;
        color: orange;

        .title {
            color: #FD7622;
            padding-left: 1rem;
            font-size: 96px;
            margin-bottom: 0;
        }

        .content {
            font-size: 20px;
            color: #FED1B6;
        }
    }

    .center {
        margin-top: 40px;
    }

    .links-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6rem;
        padding-top: 8rem;
        padding-right: 3rem;

        a {
            display: flex;
            flex-direction: column;
            text-align: center;

            i {
                font-size: 128px;
            }

            img {
                align-self: center;
                margin-top: -78px;
                height: 200px;
                width: 200px;
            }
            p {
                margin: -50px;
                align-self: center;
            }
        }
    }
    @media(max-width: 1024px) {
        .content-box {
            flex-direction: column;
            justify-items: flex-start;
            align-items: center;
            padding: 0;
            padding-top: 80px;
        }

        .links-box {
            padding-top: 2rem;
            padding-right: 0;
            flex-direction: row;
            width: 80%;
            justify-content: space-between;
            gap: 0;
        }

        .center {
            margin-top: 0;
        }

        .about-us {
            width: 80%;

            .title {
                font-size: 80px;
            }
            .content {
                font-size: 16px;
            }
        }
    }

    @media(max-width: 768px) {

        .content-box {
            padding-top: 80px;
        }

        .links-box {
            flex-direction: column;
            gap: 2rem;
            padding-top: 4rem;
            padding-bottom: 2rem;
        }

        .center {
            margin-top: 46px;
        }

        .about-us {
            .title {
                font-size: 42px;
            }
            .content {
                font-size: 14px;
            }
        }
    }

</style>