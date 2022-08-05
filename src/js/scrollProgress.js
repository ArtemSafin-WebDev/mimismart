import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function scrollProgress() {
    const elements = Array.from(document.querySelectorAll('.system__scrollable-content'));

    elements.forEach(element => {
        const progress = element.querySelector('.system__scroll-progress');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                markers: false,
                endTrigger: '.system__slider'
            }
        });

        tl.fromTo(
            progress,
            { '--progress': 0 },
            {
                '--progress': 1,
                duration: 1,
                ease: 'linear'
            }
        );
    });
}
