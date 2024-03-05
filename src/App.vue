<script>
  import HomeSection from './components/HomeSection.vue';
  import AboutSection from './components/AboutSection.vue';
  import ExperienceSection from './components/ExperienceSection.vue';
  import ProjectsSection from './components/ProjectsSection.vue';
  import ContactSection from './components/ContactSection.vue';
  import FooterBar from './components/FooterBar.vue';

  export default {
    components: {
      HomeSection,
      AboutSection,
      ExperienceSection,
      ProjectsSection,
      ContactSection,
      FooterBar,
    }
  }
</script>

<template>
  <HomeSection />
  <AboutSection />
  <ExperienceSection />
  <ProjectsSection />
  <ContactSection />
  <FooterBar />
</template>