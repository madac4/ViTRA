import * as flsFunctions from './modules/functions.js'
import { sliderFunction } from './modules/slider.js';

flsFunctions.isWebp();
sliderFunction();

const overlay = document.querySelector('.overlay');
const burgerMobile = document.querySelector('.burger');
const burgerDesktop = document.querySelector('.header-menu__burger');
const menuDesktop = document.querySelector('.menu-nav');
const menuMobile = document.querySelector('.menu-nav--mobile');

const headerMobile = document.querySelector('.upper-header--mobile');
const headerMobileToggler = document.querySelector('.bottom-navigation--toggle');

document.addEventListener('DOMContentLoaded', () => {
    var headerH = document.querySelector('.header').offsetHeight;
    flsFunctions.burger(burgerMobile, menuMobile, headerH, headerMobile);
})
if (headerMobile && headerMobileToggler) {
    headerMobileToggler.addEventListener('click', () => {
        if (!menuMobile.classList.contains('active')) {
            headerMobile.classList.toggle('active')
            headerMobileToggler.classList.toggle('active')
            document.body.classList.toggle('lock')
        }
    })
}
if (burgerDesktop) {
    burgerDesktop.addEventListener('click', () => {
        menuDesktop.classList.toggle('menu-open');
        overlay.classList.toggle('active');
        document.body.classList.toggle('lock')
    })
    overlay.addEventListener('click', () =>{
        menuDesktop.classList.remove('menu-open');
        overlay.classList.remove('active');
        document.body.classList.remove('lock')
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

if (document.querySelector('.slider-offers__body')) {
    new Swiper('.slider-offers__body', {
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
        speed: 800,
        preloadImages: false,
        lazy: true,
        navigation: {
            prevEl: '.slider-offers-controls__arrows .slider-arrow__prev',
            nextEl: '.slider-offers-controls__arrows .slider-arrow__next',
        },
    })
}

const productSlider = document.querySelectorAll('.slider-product__body');

if (productSlider.length >= 1) {
    for( let i = 0; i < productSlider.length; i++) {
        productSlider[i].classList.add(`slider-product__body--${i}`);
        productSlider[i].parentNode.querySelector('.slider-product-controls__arrows').classList.add(`slider-product-${i}-controls__arrows`);
    
        new Swiper(`.slider-product__body--${i}`, {
            grabCursor: true,
            observer: true,
            observeParents: true,
            autoHeight: true,
            speed: 800,
            spaceBetween: 20,
            preloadImages: false,
            lazy: true,
            navigation: {
                prevEl: `.slider-product-${i}-controls__arrows .slider-arrow__prev`,
                nextEl: `.slider-product-${i}-controls__arrows .slider-arrow__next`,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.4,
                    spaceBetween: 10,
                    freeMode: true
                },
                500: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                    freeMode: true
                },
                640: {
                    slidesPerView: 2,
                },
                860: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        })
    
    }
}

const headerSearch = document.querySelector('.header-right__search');
if (headerSearch) {
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
}

const filterMobile = document.querySelectorAll('.filter-mobile__body .filter-mobile');
const filterDesktop = document.querySelectorAll('.filter-body__main .filter-desktop')

if (filterMobile[0] && filterDesktop[0]) {
    for (let index = 0; index < filterMobile.length; index++) {
        filterMobile[index].addEventListener('click', () => {
            if (filterDesktop[index].classList.contains('modal-filter')) {
                filterDesktop[index].classList.remove('modal-filter')
            } else {
                filterDesktop.forEach(el => {
                    el.classList.remove('modal-filter')
                })
                filterDesktop[index].classList.add('modal-filter')
            }
        })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const w = window.innerWidth;
    console.log(w);
    if (w >= 992) {
        productSliders();
    }
});

const products = document.querySelectorAll('.product');
function productSliders() {
    if (products[0]) {
        products.forEach(product => {
            const productImages = product.querySelectorAll('.product__images img');
            const productPagination = product.querySelector('.product__pagination');
            for (let index = 0; index < productImages.length; index++) {
                productPagination.innerHTML += '<div class="pagination-item"></div>';
            }
            const productPaginationItem = productPagination.querySelectorAll('.pagination-item')
            productPaginationItem[0].classList.add('pagination-item--active')

            if (productImages.length > 1) {
                product.addEventListener('mouseenter', () => {
                    var i = 0;
                    var imageSwitch = setInterval(function() {
                        productImages[i].classList.remove('product-images__image--active')
                        productPaginationItem[i].classList.remove('pagination-item--active')
                        i++
                        productImages[i].classList.add('product-images__image--active')
                        productPaginationItem[i].classList.add('pagination-item--active')
                        if (i >= productImages.length - 1) {
                            clearInterval(imageSwitch);
                        }

                    }, 1000);

                    product.addEventListener('mouseleave', () => {
                        clearInterval(imageSwitch);
                        productImages[i].classList.remove('product-images__image--active')
                        productPaginationItem[i].classList.remove('pagination-item--active')
                        productImages[0].classList.add('product-images__image--active')
                        productPaginationItem[0].classList.add('pagination-item--active')
                    })
                })
            }

        })
    }
}


function checkLabels(products) {
    products.forEach(product => {
        if (!product.querySelector('.product__labels')) {
            product.querySelector('.product__images').style.marginTop = '0';
            product.querySelector('.product__images').style.height = '298px';
        }
    })
}

checkLabels(products);

new Cuttr('.product-name', {
    truncate: 'letters',
    length: 60
});