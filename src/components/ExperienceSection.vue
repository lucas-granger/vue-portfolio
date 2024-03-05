<template>
  <section id="experience">
    <p class="section__text__p1">Explore My</p>
    <h1 class="title">Experience</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Frontend Development</h2>
          <div class="article-container">
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>SASS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>JavaScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>TypeScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>Material UI</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details-container">
          <h2 class="experience-sub-title">Frontend Development</h2>
          <div class="article-container">
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>PostgreSQL</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>Node JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>Express JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src="@/assets/checkmark.png" alt="Experience icon" class="icon">
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/arrow.png" alt="Arrow-icon" class="icon arrow" @click="locProjects">
  </section>
</template>

<script>
  export default {
    methods: {
      locProjects() {
        location.href='./projects'
      },
    },
  }
</script>

<style>
/*------------------------EXPERIENCE--------------------------*/
  #experience {
    position: relative;
  }

  .experience-sub-title {
    color: rgb(85, 85, 85);
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .experience-details-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .article-container {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;
  }

  article {
    display: flex;
    width: 10rem;
    justify-content: space-around;
    gap: 0.5rem;
  }

  article .icon {
    cursor: default;
  }
</style>