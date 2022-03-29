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

        document.body.classList.remove('lock')
        cartModal && cartModal.classList.remove('active')
        filters && filters.classList.remove('open')
        favModal && favModal.classList.remove('active');
        callModal && callModal.classList.remove('open')
    })
    overlay.addEventListener('click', () => {
        menuDesktop && menuDesktop.classList.remove('menu-open');
        overlay.classList.remove('active');
        document.body.classList.remove('lock')
        cartModal && cartModal.classList.remove('active')
        filters && filters.classList.remove('open')
        favModal && favModal.classList.remove('active');
        callModal && callModal.classList.remove('open');
        login && login.classList.remove('open')
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

if (document.querySelector('.slider-articles__body')) {
    new Swiper('.slider-articles__body', {
        grabCursor: true,
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 800,
        preloadImages: false,
        lazy: true,
        navigation: {
            prevEl: '.slider-articles-controls__arrows .slider-arrow__prev',
            nextEl: '.slider-articles-controls__arrows .slider-arrow__next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    })
}

const productSlider = document.querySelectorAll('.slider-product__body');

if (productSlider.length >= 1) {
    for (let i = 0; i < productSlider.length; i++) {
        productSlider[i].classList.add(`slider-product__body--${i}`);
        productSlider[i].parentNode.querySelector('.slider-product-controls__arrows').classList.add(`slider-product-${i}-controls__arrows`);

        new Swiper(`.slider-product__body--${i}`, {
            grabCursor: true,
            observer: true,
            observeParents: true,
            autoHeight: true,
            slidesPerGroup: 4,
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
                    freeMode: true,
                    slidesPerGroup: 1,
                },
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                860: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        })

    }
}

const headerSearch = document.querySelector('.upper-header__search');
if (headerSearch) {
    window.addEventListener('resize', () => {
        adaptive_function();
    });

    function adaptive_header(w, h) {
        var headerRight = document.querySelector('.upper-header__form');

        var result = headerSearch.classList.contains('done');
        if (w < 992) {
            headerSearch.querySelector('input').classList.remove('filled')
            headerSearch.querySelector('button').style.color = '#3C3C3C';
            if (!result) {
                headerSearch.classList.add('done');
                menuMobile.insertBefore(headerSearch, menuMobile.firstChild);
            }
        } else {
            headerSearch.querySelector('input').classList.add('filled')
            headerSearch.querySelector('button').style.color = '#fff';
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

const products = document.querySelectorAll('.product');
window.addEventListener('DOMContentLoaded', () => {
    const w = window.innerWidth;
    if (w >= 992) {
        productSliders();
    }
    if (w <= 640) {
        checkLabelsMobile(products);
        const mobileSortToggler = document.querySelector('.product-sort--mobile .product-sort__header button');
        const mobileSort = document.querySelector('.product-sort--mobile');
        if (mobileSortToggler && mobileSort) {
            mobileSortToggler.addEventListener('click', () => {
                mobileSort.classList.toggle('open')
            })
        }
    } else {
        checkLabels(products)
    }

    function checkLabels(products) {
        products.forEach(product => {
            if (!product.querySelector('.product__labels')) {
                product.querySelector('.product__images').style.marginTop = '0';
                product.querySelector('.product__images').style.height = '298px';
            }
        })
    }

    function checkLabelsMobile(products) {
        products.forEach(product => {
            if (!product.querySelector('.product__labels')) {
                product.querySelector('.product__images').style.marginTop = '38px';
            }
        })
    }


    if (w <= 767) {
        if (document.querySelector('.slider-mobile__body')) {
            new Swiper('.slider-mobile__body', {
                grabCursor: true,
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 800,
                preloadImages: false,
                lazy: true,
                pagination: {
                    el: ".slider-mobile-controls__fraction",
                    type: "fraction",
                },
                navigation: {
                    prevEl: '.slider-mobile-controls__arrows .slider-arrow__prev',
                    nextEl: '.slider-mobile-controls__arrows .slider-arrow__next',
                },
            })
        }
    }
});

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
                    var imageSwitch = setInterval(function () {
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



if (document.querySelector('.product-name') || document.querySelector('.prost-article__title')) {
    Ellipsis({
        className: '.product-name',
        lines: 2
    });
    Ellipsis({
        className: '.post-article__title',
        lines: 2
    });
}

const filterToggler = document.querySelector('.product-filter__button');
const filters = document.querySelector('.product-filter__options');
const filterItem = document.querySelectorAll('.filter-body__option');


if (filterToggler && filters) {
    filterToggler.addEventListener('click', () => {
        filters.classList.add('open');
        overlay.classList.add('active');
        filters.querySelector('.filter-footer__close').addEventListener('click', () => {
            filters.classList.remove('open')
            overlay.classList.remove('active')
        })
    })
}
if (filterItem.length > 0) {
    filterItem.forEach(item => {
        item.querySelector('.filter-option__header').addEventListener('click', () => {
            item.classList.toggle('open');
        })
    })
}



const scrollContainer = document.querySelector('.scroll-category__body');

if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}

const headerCart = document.querySelector('.header-right__cart button');
const bottomNavigationCart = document.querySelector('.bottom-navigation__cart');
const cartModal = document.querySelector('.cart-modal');

if (cartModal) {
    headerCart.addEventListener('click', () => {
        cartModal.classList.toggle('active');
        overlay.classList.toggle('active')
    })
    bottomNavigationCart.addEventListener('click', () => {
        cartModal.classList.toggle('active');
        bottomNavigationCart.classList.toggle('active');
        document.body.classList.toggle('lock')
        favModal.classList.remove('active');
        bottomNavigationFav.classList.remove('active')
    })
}

const headerFav = document.querySelector('.header-right__favorite button');
const bottomNavigationFav = document.querySelector('.bottom-navigation__fav');
const favModal = document.querySelector('.fav-modal');

// const historyContent = document.querySelectorAll('.Login-history__item')
// const itemControl = document.querySelector('.item-header__control')

// if (historyContent.length > 0) {
//     for (let index = 0; index < historyContent.length; index++) {
//         historyContent[index].addEventListener('click', () => {
//             if (filterDesktop[index].classList.contains('open')) {
//                 filterDesktop[index].classList.remove('open')
//             } else {
//                 filterDesktop.forEach(el => {
//                     el.classList.remove('modal-filter')
//                 })
//                 filterDesktop[index].classList.add('modal-filter')
//             }
//         })
//     }
// }
if (favModal) {
    headerFav.addEventListener('click', () => {
        favModal.classList.toggle('active');
        overlay.classList.toggle('active')
    })
    bottomNavigationFav.addEventListener('click', () => {
        favModal.classList.toggle('active');
        bottomNavigationFav.classList.toggle('active')
        document.body.classList.toggle('lock')
        cartModal.classList.remove('active');
        bottomNavigationCart.classList.remove('active');
    })
}

const getCall = document.querySelectorAll('.get-call');
const callModal = document.querySelector('.call-modal');
const callModalClose = document.querySelector('.call-modal .icon-close');

if (callModal) {
    getCall.forEach(callButton => {
        callButton.addEventListener('click', () => {
            headerMobile && headerMobile.classList.remove('active')
            headerMobileToggler && headerMobileToggler.classList.remove('active')
            callModal.classList.toggle('open')
            overlay.classList.toggle('active')
            document.body.classList.toggle('lock')
        })
    })

    callModalClose.addEventListener('click', () => {
        callModal.classList.remove('open')
        overlay.classList.remove('active')
        document.body.classList.remove('lock')
    })
}

const tabs = document.querySelector('.tabs');
const tabsButtons = document.querySelectorAll('.tabs__button');
const tabsContents = document.querySelectorAll('.tabs__content');

if (tabs) {
    tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs__button')) {
            const tabsPath = e.target.dataset.tabsPath;
            tabsHandler(tabsPath);
        }
    })
}

const tabsHandler = (path) => {
    tabsButtons.forEach(button => {
        button.classList.remove('tabs__button--active')
    })
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__button--active');

    tabsContents.forEach(content => {
        content.classList.remove('tabs__content--active')
    })
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
}

if (document.querySelector('.slider-single__body')) {
    const thumb = new Swiper('.slider-thumb__body', {
        grabCursor: true,
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        spaceBetween: 10,
        speed: 800,
        preloadImages: false,
        lazy: true,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
    })

    new Swiper('.slider-single__body', {
        grabCursor: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 800,
        preloadImages: false,
        lazy: true,
        spaceBetween: 10,
        autoHeight: true,
        thumbs: {
            swiper: thumb,
        },
    })
}

const profileItem = document.querySelectorAll('.profile-history__item');

profileItem.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.toggle('open');
    });
});


const tabsProfile = document.querySelector('.tabs__list');
const tabsProfileButtons = document.querySelectorAll('.tabs__button');
const tabsProfileContents = document.querySelectorAll('.tabs__content');

if (tabsProfile) {
    tabsProfile.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabs__button')) {
            const tabsPath = e.target.dataset.tabsPath;
            tabsProfileHandler(tabsPath);
        }
    })
}

const tabsProfileHandler = (path) => {
    tabsProfileButtons.forEach(button => {
        button.classList.remove('tabs__button--active')
    })
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('tabs__button--active');

    tabsProfileContents.forEach(content => {
        content.classList.remove('tabs__content--active')
    })
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
}

const tabsLogin = document.querySelector('.login-tabs__list');
const tabsLoginButtons = document.querySelectorAll('.login-tabs__button');
const tabsLoginContents = document.querySelectorAll('.login-tabs__content');

if (tabsLogin) {
    tabsLogin.addEventListener('click', (e) => {
        if (e.target.classList.contains('login-tabs__button')) {
            const tabsPath = e.target.dataset.tabsPath;
            tabsLoginHandler(tabsPath);
        }
    })
}

const user = document.querySelector('.header-right__user')
const login = document.querySelector('.login')


user.addEventListener('click', () => {
    login.classList.toggle('open');
    overlay.classList.toggle('active');
})

const tabsLoginHandler = (path) => {
    tabsLoginButtons.forEach(button => {
        button.classList.remove('login-tabs__button--active')
    })
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('login-tabs__button--active');

    tabsLoginContents.forEach(content => {
        content.classList.remove('tabs__content--active')
    })
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
}

const changeType = document.querySelector('.change-type');
const passInput = document.querySelector('#pass')

changeType.addEventListener('click', () => {
    if (passInput.type === "password") {
        passInput.type = "text"
        document.querySelector('.icon-eye').style.color = '#3C3C3C'
    } else {
        document.querySelector('.icon-eye').style.color = '#BDBDBD'
        passInput.type = "password"
    }
})

