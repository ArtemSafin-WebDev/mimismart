import { Swiper, Navigation, EffectFade, Pagination } from 'swiper';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
Swiper.use([Navigation, EffectFade, Pagination]);
gsap.registerPlugin(ScrollTrigger);

export default function scenariosSlider() {
    const elements = Array.from(document.querySelectorAll('.js-scenarios-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');
        const btns = Array.from(element.querySelectorAll('.scenarios__nav-btn'));

        const setActiveBtn = index => {
            btns.forEach(btn => btn.classList.remove('active'));

            btns[index]?.classList.add('active');
        };

        const slider = new Swiper(container, {
            speed: 500,
            slidesPerView: 'auto',
            pagination: {
                el: element.querySelector('.slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoHeight: true,
            init: false,
            on: {
                init: swiper => {
                    setActiveBtn(swiper.realIndex);
                    ScrollTrigger.refresh();
                },
                slideChange: swiper => {
                    setActiveBtn(swiper.realIndex);
                    ScrollTrigger.refresh();
                }
            }
        });

        slider.init();

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                slider.slideTo(btnIndex);
            });
        });
    });
}
