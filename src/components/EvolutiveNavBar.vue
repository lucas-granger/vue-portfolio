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

@media screen and (max-width: 1000px) {
  #desktop-nav {
    display: none;
  }

  #hamburger-nav {
    display: flex;
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
</style>