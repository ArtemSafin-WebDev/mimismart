import gsap from 'gsap';

export default function featuresCards() {
    const cards = Array.from(document.querySelectorAll('.features__card'));

    cards.forEach(card => {
        const circle1 = card.querySelector('.circle-1');
        const circle2 = card.querySelector('.circle-2');

        const tl = gsap.timeline({repeat: -1, repeatDelay: 0.3});

        tl.from([circle1, circle2], {duration: 1, scale: 0, autoAlpha: 0, transformOrigin: "50% 50%"}).to([circle1, circle2], {
            autoAlpha: 0,
            duration: 0.5
        })

       
    })
}