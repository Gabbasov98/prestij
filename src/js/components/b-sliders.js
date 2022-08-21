function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 2000,
        autoplay:{
            delay: 3000
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function modelSlider() {
    var swiper = new Swiper('.model .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.model .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function catalogSlider() {
    var swiper = new Swiper('.catalog .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.catalog .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function projectSlider() {
    var swiper = new Swiper('.project .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.project .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function collectionSlider() {
    var swiper = new Swiper('.collection .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 40,
        navigation: {
            nextEl: '.collection .swiper-button-next',
            prevEl: '.collection .swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 20
            },
            992: {
                spaceBetween: 40
            },
        }
    })
}

function aboutGallerySlider() {
    var swiper = new Swiper('.about-gallery .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
            el: '.about-gallery .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 12
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    })
}


mainSlider()
modelSlider()
catalogSlider()
projectSlider()
collectionSlider()
aboutGallerySlider()
