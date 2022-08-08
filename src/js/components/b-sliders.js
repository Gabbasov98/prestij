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
    })
}


mainSlider()
projectSlider()
collectionSlider()
aboutGallerySlider()
