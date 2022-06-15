import gsap from 'gsap';

export default function partnersSlider() {
    const elements = Array.from(document.querySelectorAll('.js-partners-slider'));

    elements.forEach(element => {
        const cards = Array.from(element.querySelectorAll('.setup__partners-card'));
        const images = Array.from(element.querySelectorAll('.setup__partners-card-image')).map(image => image.src);
        if (!cards.length) return;
        let offset = 5;

        if (cards.length < 5) {
            offset = cards.length;
        }

        const swapCard = (card, delay = 0) => {
            const img = card.querySelector('img');
            gsap.to(card, {
                autoAlpha: 0,
                duration: 0.4,
                ease: 'none',
                delay,
                onComplete: () => {
                    setTimeout(() => {
                        const currentSrc = img.src;
                        const nextSrc = images.shift();
                        images.push(currentSrc);
                        img.src = nextSrc;

                        gsap.to(card, {
                            autoAlpha: 1,
                            duration: 0.4,
                            ease: 'none',
                            onComplete: () => {
                                swapCard(card, 2);
                            }
                        });
                    }, 200);
                }
            });
        };

        cards.forEach((card, cardIndex) => {
            if (cardIndex <= offset - 1) {
                swapCard(card);
            }
        });

        console.log('images', images);
    });
}
