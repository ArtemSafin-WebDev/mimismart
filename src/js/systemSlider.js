import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';

Swiper.use([Navigation, Pagination, EffectCreative, EffectFade, Controller]);

export default function systemSlider() {
    const elements = Array.from(document.querySelectorAll('.js-system-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            speed: 500,
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            effect: 'creative',
            slidesPerView: 'auto',
            creativeEffect: {
                prev: {
                    // will set `translateZ(-400px)` on previous slides
                    translate: [0, 0, -400],
                    opacity: 0
                    // scale: 0
                },
                next: {
                    // will set `translateX(100%)` on next slides
                    translate: ['100%', 0, 0],
                    opacity: 1
                },
                limitProgress: 15
            }
        });
    });
}