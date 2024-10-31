// Using the imported functions
import { heroSectionAnimation } from './modules/hero_section.js'

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger)
    console.log('DOM fully loaded and parsed');
    heroSectionAnimation();
});