<template>
  <section id="projects">
    <p class="section__text__p1">Browse my recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container color-container">
          <div class="article-container">
            <img src="@/assets/project-1.png" alt="Project 1" class="project-img">
          </div>
          <h2 class="experience-sub-title project-title">Project One</h2>
          <div class="btn-container">
            <button class="btn btn-color-2 project-btn" @click="locGitHub">
            GitHub
            </button>
            <button class="btn btn-color-2 project-btn" @click="locGitHub">
            Live Demo
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img src="@/assets/project-2.png" alt="Project 2" class="project-img">
          </div>
          <h2 class="experience-sub-title project-title">Project Two</h2>
          <div class="btn-container">
            <button class="btn btn-color-2 project-btn" @click="locGitHub">
            GitHub
            </button>
            <button class="btn btn-color-2 project-btn" @click="locGitHub">
            Live Demo
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img src="@/assets/project-3.png" alt="Project 3" class="project-img">
          </div>
          <h2 class="experience-sub-title project-title">Project Three</h2>
          <div class="btn-container">
            <button class="btn btn-color-2 project-btn" @click="locGitHub">
            GitHub
            </button>
            <button class="btn btn-color-2 project-btn" @click="locGitHub">
            Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/arrow.png" alt="Arrow-icon" class="icon arrow" @click="locResume">
  </section>
</template>

<script>
  export default {
    methods: {
      locResume() {
          location.href = './#contact'
      },
    }
  }
</script>

<style>
  #projects {
    position: relative;
  }

  .color-container {
    border-color: rgb(163, 163, 163);
    background: rgb(250, 250, 250);
  }

  .project-img {
    border-radius: 2rem;
    width: 90%;
  }

  .project-title {
    margin: 1rem;
    color: black;
  }

  .project-btn {
    color: black;
    border-collapse: rgb(163, 163, 163);
  }
</style>