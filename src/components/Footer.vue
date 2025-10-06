<template>
  <section class="footer">
    <div class="contact-info">
      <p>
        <a href="mailto:kontakt@notsofest.pl">kontakt@notsofest.pl</a>
      </p>
      <p>Odwiedź nas na:</p>
      <div class="social-icons">
        <a
          href="https://www.facebook.com/notsofest"
          target="_blank"
          aria-label="Facebook"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/notsofest/"
          target="_blank"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.tiktok.com/@notsofest_"
          target="_blank"
          aria-label="TikTok"
        >
          <i class="fab fa-tiktok"></i>
        </a>
        <a
          href="https://www.youtube.com/@NOTSOFEST"
          target="_blank"
          aria-label="YouTube"
        >
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>

    <div class="terms">
      <a href="/polityka-prywatnosci">Polityka prywatności</a>
      <a href="/regulamin">Regulamin</a>
      <a href="/ZGODA RODZICA_OPIEKUNA PRAWNEGO NOT SO FEST 2025.pdf" download>
        Zgoda rodzica
      </a>
    </div>

    <div class="credits">
      <p>
        <a href="https://policrafts.com" target="_blank">© Policrafts 2025</a> —
        Twórca:
        <a href="https://github.com/drdaroo" target="_blank"
          >Dariusz Cegliński</a
        >
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  background-color: black;
  color: white;
  max-height: 500px;
  padding-bottom: 0;
  min-height: unset;
}

.contact-info {
  margin-top: 3rem;
  text-align: center;

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;

    a {
      font-size: 2.5rem;
      color: #333;
      transition: all 0.3s ease;

      &:hover {
        color: #ff6600;
      }
    }
  }
}

.terms {
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.4rem;

  a {
    color: #222;

    &:hover {
      color: #ff6600;
    }
  }
}

.credits {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
  padding: 0;
  margin: 0;

  a {
    color: #555;
    text-decoration: none;

    &:hover {
      color: #ff6600;
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .contact-info {
    margin-top: 2rem;

    .social-icons {
      flex-wrap: wrap;
      gap: 0.5rem;

      a {
        font-size: 3rem;
      }
    }
  }

  .terms {
    flex-direction: column;
  }

  .credits {
    font-size: 0.8rem;
  }
}
</style>
