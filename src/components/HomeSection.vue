<template>
  <nav id = "desktop-nav">
    <div class="logo">Lucas Granger</div>
    <div>
      <ul class="nav-links">
        <li><a href="/about">About</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <nav id="hamburger-nav">
    <div class="logo">Lucas Granger</div>
    <div class="hamburger-menu">
      <div class="hamburger-icon" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu-links">
        <li><a href="/about" @click="toggleMenu">About</a></li>
        <li><a href="/experience" @click="toggleMenu">Experience</a></li>
        <li><a href="/projects" @click="toggleMenu">Projects</a></li>
        <li><a href="/contact" @click="toggleMenu">Contact</a></li>
      </div>
    </div>
  </nav>
  <section id="profile">
    <div class="section__pic-container">
      <img src="@/assets/profile-pic.png" alt="Lucas Granger Profile Picture">
    </div>
    <div class="section__text">
      <p class="section__text__p1">Hello I'm</p>
      <h1>Lucas Granger</h1>
      <p class="section__text__p2">Engineer Specialized in Big Data</p>
      <div class="btn-container">
        <button class="btn btn-color-2" @click="openResume">Download CV</button>
        <button class="btn btn-color-1" @click="locResume">Contact Info</button>
      </div>
      <div id="socials-container">
        <img src="@/assets/linkedin.png" alt="My LinkedIn profile" class="icon" @click="locLinkedIn">
        <img src="@/assets/github.png" alt="My GitHub profile" class="icon" @click="locGitHub">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    // eslint-disable-next-line
    
    methods: {
      toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      },
      openResume() {
        window.open('./resume-example.pdf');
      },
      locResume() {
        location.href = './contact'
      },
      locLinkedIn() {
        location.href='https://www.linkedin.com/in/lucas-granger-960325239/'
      },
      locGitHub() {
        location.href='https://github.com/lucas-granger'
      }
    },
  }
</script>

<style>

/*------------------------GENERAL--------------------------*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

p {
  color: rgb(85, 85, 85);
}

/*------------------------TRANSITION--------------------------*/
a, .btn {
  transition: all 300ms ease;
}

/*------------------------DESKTOP NAV--------------------------*/
nav, .nav-links{
  display: flex;
}

nav {
  justify-content: space-around;
  align-items: center;
  height: 17vh;
}

.nav-links {
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
}

a {
  color: black;
  text-decoration: none;
  text-decoration-color: white;
}

a:hover {
  color: grey;
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-color: rgb(181, 181, 181);
}

.logo{
  font-size: 2rem;
}

.logo:hover {
  cursor: default;
}

/*------------------------HAMBURGER MENU--------------------------*/
#hamburger-nav {
  display: none;
}

.hamburger-menu {
  position: relative;
  display: inline-block;
}

.hamburger-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;
}

@media screen and (max-width: 1400px) {
  #profile {
    height: 83vh;
    margin-bottom: 6rem;
  }

  .about-containers {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 1200px) {
  #desktop-nav {
    display: none;
  }

  #hamburger-nav {
    display: flex;
  }

  #experience, .experience-details-conatainer {
    margin-top: 2rem;
  }

  #profile, .section-container {
    display: block;
  }

  .arrow {
    display: none;
  }

  section, .section-container {
    height: fit-content;
  }

  section {
    margin: 0 5%;
  }

  .section__pic-container {
    width: 275px;
    height: 275px;
    margin: 0 aauto 2rem;
  }

  .about-containers {
    margin-top: 0;
  }
}

@media screen and (max-width: 600px) {
  #contact, footer {
    height: 40vh;
  }

  #profile {
    height: 83vh;
    margin-bottom: 0;
  }

  article {
    font-size: 1rem;
  }

  footer nav {
    height: fit-content;
    margin-bottom: 2rem;
  }

  .about-containers, .contact-info-upper-container, .btn-container {
    flex-wrap: wrap;
  }

  .contact-info-container {
    margin: 0;
  }

  .contact-info-container p, .nav-links li a {
    font-size: 1rem;
  }

  .experience-sub-title {
    font-size: 1.25rem;
  }

  .logo {
    font-size: 1.5rem;
  }

  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .section__pic-container {
    width: auto;
    height: 46vw;
    justify-content: center;
  }

  .section__text__p2 {
    font-size: 1.25rem;
  }

  .title {
    font-size: 2rem;
  }

  .text-container {
    text-align: justify;
  }
}

.hamburger-icon span {
  width: 100%;
  height: 2px;
  background-color: black;
  transition: all 0.3 ease-in-out;
}

.menu-links {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  width: fit-content;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3 ease-in-out;
}

.menu-links a{
  display: block;
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  transition: all 0.3 ease-in-out;
}

.menu-links li {
  list-style: none;
}

.menu-links.open {
  max-height: 300px;
}

.hamburger-icon.open span:first-child {
  transform: rotate(45deg) translate(10px, 5px);
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open span:last-child {
  transform: rotate(-45deg) translate(10px, -5px);
}

.hamburger-icon span:first-child {
  transform: none;
}

.hamburger-icon span:nth-child(2) {
  opacity: 1;
}

.hamburger-icon span:last-child {
  transform: none;
}

/*------------------------SECTIONS--------------------------*/
section {
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

.section-container {
  display: flex;
}

/*------------------------PROFILE SECTION--------------------------*/
#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
}

.section__pic-container {
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
}

.section__text {
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.section__text__p1 {
  text-align: center;
}

.section__text__p2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  text-align: center;
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

/*------------------------ICONS--------------------------*/
.icon {
  cursor: pointer;
  height: 2rem;
}

/*------------------------BUTTONS--------------------------*/
.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
}

.btn-color-1, .btn-color-2 {
  border: rgb(53, 53, 53) 0.1rem solid;
}

.btn-color-1:hover, .btn-color-2:hover {
  cursor: pointer;
}

.btn-color-1, .btn-color-2:hover {
  background: rgb(53, 53, 53);
  color: white;
}

.btn-color-1:hover {
  background: rgb(0, 0, 0);
}

.btn-color-2 {
  background: none;
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-container {
  gap: 1rem;
}
</style>
