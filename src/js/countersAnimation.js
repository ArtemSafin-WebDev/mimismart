import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function countersAnimations() {
    const numbersBlock = document.querySelector('.pricing__numbers-content');
    if (!numbersBlock) return;

    const counters = Array.from(numbersBlock.querySelectorAll('.js-counter'));

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: numbersBlock,
            start: 'top bottom',
            markers: true
        }
    });

    tl.from(counters, {
        textContent: 1,
        duration: 4,
        ease: 'power1.in',
        snap: { textContent: 1 }
    }, 0);

   
}
