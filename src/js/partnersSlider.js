import gsap from 'gsap';
import { chunk } from 'lodash';

export default function partnersSlider() {
    const elements = Array.from(document.querySelectorAll('.js-partners-slider'));

    elements.forEach(element => {
        const cards = Array.from(element.querySelectorAll('.setup__partners-card'));

        const AUTOPLAY_DURATION = 3000;

        let cardsVisible = 5;

        if (window.matchMedia("(max-width: 768px)").matches) {
            cardsVisible = 3;
        }
        if (window.matchMedia("(max-width: 640px)").matches) {
            cardsVisible = 4;
        }

        const cardChunks = chunk(cards, cardsVisible);

        console.log('Cards chunks', cardChunks);

        let index = 0;

        setInterval(() => {
            if (index > cardChunks.length - 1) {
                index = 0;
            }
            cards.forEach(card => card.classList.remove('visible'));

            cardChunks[index].forEach(card => card.classList.add('visible'));

            index++;
        }, AUTOPLAY_DURATION);
    });
}
