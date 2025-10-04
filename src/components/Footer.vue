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
      <a href="/polityka-prywatnosci">
        Polityka prywatności
      </a>
      <a href="/regulamin">
        Regulamin
      </a>
      <a href="/ZGODA RODZICA_OPIEKUNA PRAWNEGO NOT SO FEST 2025.pdf" download>
        Zgoda rodzica
      </a>
    </div>
  </section>
</template>
<script setup></script>

<style lang="scss" scoped>
.footer {
  background-color: black;
  color: white;
  max-height: 500px;
  padding-bottom: 2rem;
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
        color: #FF6600;
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
      color: #FF6600;
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
}
</style>
