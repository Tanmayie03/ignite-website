import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  // Check if window object exists to prevent errors on SSR
  if (typeof window !== 'undefined') {
    // Initialize AOS only in client-side code (avoid SSR errors)
    nuxtApp.provide('aos', new AOS.init({
      disable: window.innerWidth < 640,
      // offset: 200,
      duration: 600,
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom',
    })); // or any other options you need
  }
});
