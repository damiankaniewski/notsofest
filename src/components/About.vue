<template>
    <SubHeader></SubHeader>
    <section id="about">
        <div class="content-box">
            <div class="about-us">
                <h1>O NAS</h1>
                <p>
                    Nootsofest to ekipa, która łączy energię ulicy z nowoczesnym brzmieniem.<br>
                    Tworzymy muzykę, w której bity pulsują w rytmie miasta, a teksty opowiadają nasze historie — szczere, surowe i bez filtrów.<br>
                    Każdy z nas wnosi do składu swój unikalny styl: od soczystych punchline'ów, przez melodyjne refreny, po produkcje, które wkręcają się w głowę na długo.<br>
                    Nie gonimy za trendami — wyznaczamy własne.<br>
                    Inspirujemy się kulturą hip-hopu w najczystszej formie, ale nie boimy się mieszać gatunków, eksperymentować i zaskakiwać.<br>
                    Nasze koncerty to mieszanka adrenaliny, kontaktu z publiką i energii, która nie pozwala stać w miejscu.<br>
                    Notsofest to nie tylko muzyka — to wspólnota ludzi, którzy czują ten sam vibe.<br>
                    Jeśli chcesz poczuć prawdziwy hip-hop w wersji 2025, jesteś we właściwym miejscu.
                </p>
            </div>
            <div class="links-box">
                <a href="/bilety">
                    <img :src="logo" alt="NotSoFest logo">
                    <p>Festiwal</p>
                </a>
                <a href="/galeria" class="center">
                    <i class="fa-solid fa-compact-disc"></i>
                    Muzyka
                </a>
                <a href="/merch">
                    <i class="fa-solid fa-shirt"></i>
                    Ubrania
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
    import SubHeader from "./SubdomainHeader.vue";
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

        h1 {
            color: #FD7622;
            padding-left: 1rem;
            font-size: 96px;
            margin-bottom: 0;
        }

        p {
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

            h1 {
                font-size: 80px;
            }
            p {
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
            h1 {
                font-size: 42px;
            }
            p {
                font-size: 14px;
            }
        }
    }

</style>