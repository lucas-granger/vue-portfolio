<template>
  <section id="about">
    <p class="section__text__p1">Get To Know More</p>
    <h1 class="title">About Me</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <img src="@/assets/about-pic.jpeg" alt="Profile picture" class="about-pic">
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img src="@/assets/experience.png" alt="Experience Icon" class="icon">
            <h3>Experience</h3>
            <p>2+ years <br />Frontend Development</p>
          </div>
          <div class="details-container">
          <img src="@/assets/education.png" alt="Education Icon" class="icon">
            <h3>Education</h3>
            <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
          </div>
        </div>
        <div class="text-container">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores ratione veniam qui rerum vitae, quis odio assumenda neque sunt odit obcaecati optio iste architecto fugit aliquam nam laboriosam necessitatibus quas molestias impedit reiciendis cupiditate aperiam ab. Sunt corrupti optio, cumque eos cum animi impedit sapiente mollitia accusantium dolores! Ipsum!</p>
        </div>
      </div>
    </div>
    <img src="@/assets/arrow.png" alt="Arrow-icon" class="icon arrow" @click="locExp">
  </section>
</template>

<script>
  export default {
    methods: {
      locExp() {
        location.href = './#experience'
      },
    },
  }
</script>

<style>
  #about {
    position: relative;
  }

  .about-containers {
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .about-details-container {
    justify-content: center;
    flex-direction: column;
  }

  .about-containers, .about-details-container {
    display: flex;
  }

  .about-pic {
    border-radius: 2rem;
  }

  .arrow {
    position: absolute;
    right: 5rem;
    bottom: 2.5rem;
  }

  .details-container {
    padding: 1.5rem;
    flex: 1;
    background: white;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;
  }

  .section-container {
    gap: 4rem;
    height: 80%;
  }

  .section__pic-container {
    height: 400px;
    width: 400px;
    margin: auto 0;
    margin-bottom: 1.5rem;
  }
</style>