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
                    Festiwal
                </a>
                <a href="/galeria">
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

<style lang="scss">

    #about {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .content-box {
        position: absolute;
        align-items: flex-start;
        justify-content: space-between;
        display: flex;
        padding: 6rem 12rem 6rem 12rem;
    }

    .about-us {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 50%;
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
                margin: -50px;
                height: 200px;
                width: 200px;
            }
        }
    }

</style>