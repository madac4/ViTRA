import * as flsFunctions from './modules/functions.js'
import { sliderFunction } from './modules/slider.js';

flsFunctions.isWebp();
sliderFunction();

const overlay = document.querySelector('.overlay');
const burgerMobile = document.querySelector('.burger');
const burgerDesktop = document.querySelector('.header-menu__burger');
const menuDesktop = document.querySelector('.menu-nav');
const menuMobile = document.querySelector('.menu-nav--mobile');

document.addEventListener('DOMContentLoaded', () => {
    var headerH = document.querySelector('.header').offsetHeight;
    console.log(headerH);
    flsFunctions.burger(burgerMobile, menuMobile, headerH);
})
if (burgerDesktop) {
    burgerDesktop.addEventListener('click', () => {
        menuDesktop.classList.toggle('menu-open');
        overlay.classList.toggle('active');
        document.body.classList.toggle('lock')
    })
}


if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        speed: 800,
        // loop: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.slider-main-controls__dots',
            clickable: true,
        },
        navigation: {
            prevEl: '.slider-main-controls__arrows .slider-arrow__prev',
            nextEl: '.slider-main-controls__arrows .slider-arrow__next',
        },
    })
}

const headerSearch = document.querySelector('.header-right__search');
window.addEventListener('resize', () => {
    adaptive_function();
});

function adaptive_header(w, h) {
    var headerRight = document.querySelector('.header-right');

    var result = headerSearch.classList.contains('done');
    if (w < 992) {
        headerSearch.querySelector('input').classList.remove('filled')
        if (!result) {
            headerSearch.classList.add('done');
            menuMobile.insertBefore(headerSearch, menuMobile.firstChild);
        }
    } else {
        headerSearch.querySelector('input').classList.add('filled')
        if (result) {
            headerSearch.classList.remove('done');
            headerRight.insertBefore(headerSearch, headerRight.firstChild);
        }
    }
}

function adaptive_function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    adaptive_header(w, h);
}
adaptive_function();