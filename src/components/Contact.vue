<template>
  <SubHeader />

  <section class="contact-page">
    <form class="contact-form" @submit.prevent="handleSubmit">
      <h2>Formularz kontaktowy</h2>

      <div class="form-group">
        <input
          id="firstName"
          v-model="form.firstName"
          type="text"
          placeholder="Imię"
          required
        />
      </div>

      <div class="form-group">
        <input
          id="lastName"
          v-model="form.lastName"
          type="text"
          placeholder="Nazwisko"
          required
        />
      </div>

      <div class="form-group">
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Email*"
          required
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          placeholder="Telefon"
        />
      </div>

      <div class="form-group">
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Treść wiadomości"
          rows="5"
          required
        ></textarea>
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </div>

      <div class="form-group checkbox">
        <input id="privacy" v-model="privacyConsent" type="checkbox" />
        <label for="privacy">Akceptuję politykę prywatności</label>
        <span v-if="errors.privacyConsent" class="error">{{
          errors.privacyConsent
        }}</span>
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? "Wysyłanie..." : "Wyślij" }}
      </button>
    </form>
  </section>
</template>

<script setup>
import SubHeader from "./utils/SubdomainHeader.vue";
import { reactive, ref } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});

const privacyConsent = ref(false);
const errors = reactive({
  email: null,
  message: null,
  privacyConsent: null,
});
const loading = ref(false);

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

async function handleSubmit() {
  errors.email = errors.message = errors.privacyConsent = null;

  if (!validateEmail(form.email)) {
    errors.email = "Podaj poprawny adres email.";
  }
  if (!form.message.trim()) {
    errors.message = "Wprowadź wiadomość.";
  }
  if (!privacyConsent.value) {
    errors.privacyConsent = "Musisz zaakceptować politykę prywatności.";
  }

  if (errors.email || errors.message || errors.privacyConsent) return;

  try {
    loading.value = true;
    const payload = {
      email: "kontakt@notsofest.pl",
      subject: `Wiadomość od: ${form.firstName} ${form.lastName}`,
      message:
        `Imię i nazwisko: ${form.firstName} ${form.lastName}\n` +
        `Email: ${form.email}\n` +
        `Telefon: ${form.phone || "-"}\n\n` +
        `${form.message}`,
    };

    const response = await fetch(
      "https://jc5vg6se5e.execute-api.eu-north-1.amazonaws.com/dev/send-mail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "_just-a'test\"key,or>is<it?",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) throw new Error("Błąd podczas wysyłania formularza.");

    alert("Formularz wysłany pomyślnie!");
    Object.assign(form, {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    privacyConsent.value = false;
  } catch (err) {
    console.error(err);
    alert("Nie udało się wysłać wiadomości. Spróbuj ponownie.");
  } finally {
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  color: #FF6600;
  overflow-y: auto;

  .contact-form {
    .form-group {
      input,
      textarea {
        width: 100%;
        border: none;
        border-bottom: 2px solid white;
        padding: 0.5rem 0;
        font-size: 1.5rem;
        outline: none;
        background: transparent;
        color: white;

        &::placeholder {
          color: #FF6600;
        }

        &:focus {
          border-bottom-color: #FF6600;
        }
      }

      .error {
        color: red;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }

      &.checkbox {
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        label {
          font-size: 1rem !important;
          padding-left: 0.25rem;
        }

        input[type="checkbox"] {
          width: auto;
          margin: 0;
        }
      }
    }

    button {
      padding: 0.75rem;
      background-color: #FF6600;
      width: 100%;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:hover:enabled {
        background-color: #ffffff;
        color: #FF6600;
      }
    }
  }
}

@media (max-width: 1024px) {
  .contact-form {
    margin-top: 100px;
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 0;
    padding-top: 5rem;
    width: 100%;

    .contact-form {
      margin: 0;
      width: 90%;
      max-width: 90%;

      .form-group {
        input,
        textarea {
          font-size: 1.2rem;
        }

        &.checkbox {
          flex-wrap: wrap;
        }
      }

      button {
        font-size: 1rem;
      }
    }
  }
}
</style>
