import { Swiper, Navigation, EffectFade, Pagination } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, EffectFade, Pagination]);

export default function pricingSlider() {
    const elements = Array.from(document.querySelectorAll('.js-pricing-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        const fractionPagination = element.querySelector('.pricing__slider-pagination');

        const setPagination = swiper => {
            fractionPagination.innerHTML = `${String(swiper.activeIndex + 1)} / ${String(swiper.slides.length)}`
        }

        const instance = new Swiper(container, {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.pricing__slider-controls-btn--next'),
                prevEl: element.querySelector('.pricing__slider-controls-btn--prev')
            },
            autoHeight: IS_MOBILE ? true : false,
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            init: false,
            on: {
                init: swiper => {
                    setPagination(swiper);
                },
                slideChange: swiper => {
                    setPagination(swiper)
                }
            }
        });

        instance.init();
    });
}
