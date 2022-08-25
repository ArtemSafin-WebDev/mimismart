import { Swiper, Navigation, EffectFade, Pagination, Autoplay } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, EffectFade, Pagination, Autoplay]);

export default function pricingSlider() {
    const elements = Array.from(document.querySelectorAll('.js-pricing-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        const fractionPagination = element.querySelector('.pricing__slider-pagination');
        const slides = Array.from(element.querySelectorAll('.swiper-slide'))

        const setPagination = swiper => {
            fractionPagination.innerHTML = `${String(swiper.realIndex + 1)} / ${String(slides.length)}`;
        };

        let options = {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            loop: true,
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
                    setPagination(swiper);
                }
            }
        };

        if (!window.matchMedia('(max-width: 640px)').matches) {
            options = {
                ...options,
                autoplay: {
                    delay: 5000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }
            };
        }

        const instance = new Swiper(container, options);

        instance.init();
    });
}
