import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import handMove from './handMove';
import datepicker from './datepicker';
import Rellax from 'rellax';
import imagesLoaded from 'imagesloaded';
import map from './map';
import pricingSlider from './pricingSlider';
import historySlider from './historySlider';
import showroomSlider from './showroomSlider';
import { IS_MOBILE } from './utils';
import partnersSlider from './partnersSlider';
import projectsSlider from './projectsSlider';
import countersAnimations from './countersAnimation';
import featuresCards from './featuresCards';
import customSelects from './customSelects';
import scenariosSlider from './scenariosSlider';
import systemSlider from './systemSlider';
import scrollProgress from './scrollProgress';

gsap.registerPlugin(ScrollTrigger);

window.parallax = null;

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    datepicker();
    validation();
    // anchorLinks();
    accordions();
    customSelects();
    tabs();
    // menu();
    handMove();
    map();
    pricingSlider();
    historySlider();
    showroomSlider();
    partnersSlider();
    projectsSlider();
    modals();
    countersAnimations();
    featuresCards();
    scenariosSlider();
    systemSlider();
    scrollProgress();
  
    const imgLoaded = imagesLoaded(document.querySelector('body'));

    imgLoaded.on('always', () => {
        if (!IS_MOBILE) {
            window.parallax = new Rellax('.rellax', {
                breakpoints:[576, 768, 1201]
            })
        }
        ScrollTrigger.refresh();
    });

});

;

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
    if (window.parallax) window.parallax.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
