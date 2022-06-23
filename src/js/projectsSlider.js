import { Swiper, Navigation, EffectFade, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Pagination]);

export default function projectsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-projects-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            speed: 500,
            slidesPerView: 'auto',
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}
