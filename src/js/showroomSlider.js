import { Swiper, Navigation, EffectFade, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Pagination]);

export default function showroomSlider() {
    const elements = Array.from(document.querySelectorAll('.js-showroom-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            speed: 500,
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}
