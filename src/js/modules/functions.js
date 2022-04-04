export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

export function burger(burger, menu, headerH, headerM) {
    menu.style.top = `${headerH}px`
    menu.style.paddingBottom = `${headerH + 10}px`
    burger.addEventListener('click', () => {
        if (!headerM.classList.contains('active')) {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('lock');
        }
    })
}

export const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
}

export function fixedHeader(header) {
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > header.offsetHeight + 30) {
            header.classList.add('sticky')
            document.querySelector('main').style.marginTop = `${header.offsetHeight}px`
        } else {
            header.classList.remove('sticky');
            document.querySelector('main').style.marginTop = null
        }
    })
}