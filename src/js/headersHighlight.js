import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function headersHighlight() {
    const elements = Array.from(document.querySelectorAll('.features__card-heading, .system__control-heading, .system__box-heading, .system__slider-heading'));

    ScrollTrigger.matchMedia({
        '(min-width: 641px)': function() {
            elements.forEach(element => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: 'center center',
                        end: '20%',
                        toggleActions: 'play reverse play reverse'
                    }
                });

                tl.to(element, {
                    color: '#5eccfa',
                    duration: 0.2
                });
            });
        }
    });
}
