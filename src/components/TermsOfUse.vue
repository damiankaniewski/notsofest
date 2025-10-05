<template>
  <SubHeader></SubHeader>
  <section id="terms-of-use">
    <div class="main-view">
      <h1>Regulamin</h1>
      <div id="rules1">
        <h2>
          §1. Postanowienia ogólne
        </h2>
        <ol>
          <li>
            Niniejszy regulamin określa zasady uczestnictwa w wydarzeniach pod nazwą Not So Fest.
          </li>
          <li>
            Organizatorem wydarzenia jest Jakub Troc, zwany dalej „Organizatorem”.
          </li>
          <li>
            Każdy uczestnik wydarzenia, zwany dalej „Uczestnikiem”, zobowiązany jest do przestrzegania niniejszego Regulaminu. Zakup biletu i/lub wejście na teren wydarzenia jest równoznaczne z jego akceptacją.
          </li>
        </ol>
      </div>
      <div id="rules2">
        <h2>
          §2. Zasady uczestnictwa
        </h2>
        <ol>
          <li>
            Wstęp na wydarzenie mają osoby pełnoletnie oraz osoby, które ukończyły 16 lat i:
              <br/>a) przebywają pod opieką osoby pełnoletniej, lub
              <br/>b) przedstawią pisemną zgodę opiekuna prawnego (wzór zgody dostępny <a href="/ZGODA RODZICA_OPIEKUNA PRAWNEGO NOT SO FEST 2025.pdf" download>[TUTAJ]</a>).
          </li>
          <li>
            Wydarzenie jest biletowane. Bilety można nabyć:
              <br/>a) online za pośrednictwem zewnętrznej platformy sprzedażowej,
              <br/>b) stacjonarnie w dniu wydarzenia – o ile nie wyczerpie się pula biletów.
          </li>
          <li>   
            Ilość miejsc może być ograniczona. Organizator zastrzega sobie prawo odmowy wstępu po osiągnięciu limitu wejść.
          </li>
        </ol>
      </div>
      <div id="rules3">
        <h2>
          §3. Zasady bezpieczeństwa i porządku
        </h2>
        <ol>
          <li>
            Na terenie wydarzenia obowiązuje zakaz palenia tytoniu i papierosów elektronicznych. Wyznaczona strefa dla palących znajduje się przed lokalem.
          </li>
          <li>
            Obowiązuje bezwzględny zakaz wnoszenia alkoholu, narkotyków oraz innych środków odurzających.
          </li>
          <li>
            Zabrania się wnoszenia na teren wydarzenia:
              <br/>a) ostrych narzędzi,
              <br/>b) broni lub jej atrap,
              <br/>c) materiałów niebezpiecznych lub wybuchowych,
              <br/>d) przedmiotów mogących stanowić zagrożenie dla innych uczestników.
          </li>
          <li>
            Uczestnicy zobowiązani są do stosowania się do poleceń Organizatora, ochrony oraz obsługi technicznej.
          </li>
          <li>
            Uczestnicy nie mają prawa wstępu do stref oznaczonych jako „wyłączone z użytku” – w szczególności: scena, garderoba, zaplecze techniczne, fosa sceniczna.
          </li>
        </ol>
      </div>
      <div id="rules4">
        <h2>
          §4. Wizerunek i materiały promocyjne
        </h2>
        <ol>
          <li>
            Uczestnik wydarzenia wyraża zgodę na nieodpłatne utrwalenie i rozpowszechnianie swojego wizerunku przez Organizatora:
              <br/>a) w ramach fotorelacji z wydarzenia,
              <br/>b) do celów promocyjnych i marketingowych obecnych oraz przyszłych wydarzeń “Not So Fest”.
          </li>
          <li>
            Zgoda obejmuje publikację zdjęć i nagrań m.in. na stronie internetowej, profilach społecznościowych, materiałach graficznych i promocyjnych.
          </li>
        </ol>
      </div>
      <div id="rules5">
        <h2>
          §5. Odpowiedzialność
        </h2>
        <ol>
          <li>
            Organizator nie ponosi odpowiedzialności za:
              <br/>a) rzeczy pozostawione bez nadzoru,
              <br/>b) szkody wyrządzone przez uczestników innym uczestnikom,
              <br/>c) skutki nieprzestrzegania Regulaminu.
          </li>
          <li>
            Organizator zastrzega sobie prawo do:
              <br/>a) usunięcia z terenu wydarzenia osób zakłócających porządek lub naruszających Regulamin,
              <br/>b) zmian w programie wydarzenia (np. zmiany w przebiegu wydarzenia),
              <br/>c) odwołania wydarzenia z przyczyn niezależnych (np. siła wyższa).
          </li>
        </ol>
      </div>
      <div id="rules6">
        <h2>
          §6. Postanowienia końcowe
        </h2>
        <ol>
          <li>
            Regulamin dostępny jest:
              <br/>a) na stronie internetowej wydarzenia: <a href="/regulamin">www.notsofest.pl/regulamin</a>,
              <br/>b) przy wejściu na teren wydarzenia.
          </li>
          <li>
            W sprawach nieuregulowanych Regulaminem zastosowanie mają odpowiednie przepisy prawa polskiego.
          </li>
          <li>
            Regulamin obowiązuje od dnia 05.10.2025 i dotyczy wydarzenia odbywającego się w dniu 15.11.2025.
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
  import SubHeader from "./utils/SubdomainHeader.vue";
</script>

<style lang="scss" scoped>
  .main-view {
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100svh;

    div {
      width: 78%;
      padding: 0 4rem;
      padding-right: 7rem;
      text-align: center;
      justify-content: center;

      ol {
        margin-left: 1rem;
        text-align: start;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
      }
    }
  }

  h1 {
    color: #FF6600;
    font-size: 6rem;
    margin: 0;
  }

  h2 {
    text-align: start;
    color: #FF6600;
    font-size: 1.8rem;
  }

  li {
    color: white;
    font-size: 1.4rem;
  }

  @media (max-width: 1280px){
    .main-view{
      div {
        width: 70%;
        padding-right: 10rem;
      }
    }

    h1 {
      font-size: 5rem;
    }

    h2{
      font-size: 1.6rem;  
    }
    li {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1024px){
    .main-view {
      div {
        width: 70%;
        padding-left: 10rem;
      }
    }
    h1 {
      font-size: 3.6rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    li {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px){
    .main-view {
      div {
        width: 80%;
        padding: 0 2rem;
        ol {
          margin-left: 0;
        }
      }
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1rem;
    }
    li {
      font-size: 0.8rem;
    }
  }
</style>