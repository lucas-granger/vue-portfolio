<template>
  <section id="contact">
    <p class="section__text__p1">Get in Touch</p>
    <h1 class="title">Contact Me</h1>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <img src="@/assets/email.png" alt="Email icon" class="icon contact-icon email-icon">
        <p><a href="mailto:lucas.granger@etu.isae-ensma.fr">lucas.granger@etu.isae-ensma.fr</a></p>
      </div>
      <div class="contact-info-container">
        <img src="@/assets/linkedin.png" alt="LinkedIn icon" class="icon contact-icon">
        <p><a href="https://www.linkedin.com/in/lucas-granger-960325239/">LinkedIn</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
  #contact {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
  }

  .contact-info-upper-container {
    display: flex;
    justify-content: center;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    background: rgb(250, 250, 250);
    margin: 2rem auto;  
    padding: 0.5rem;
  }

  .contact-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;
  }

  .contact-info-container p {
    font-size: larger;
  }

  .contact-info {
    cursor: default;
  }

  .email-icon {
    height: 2.5rem;
  }
</style>