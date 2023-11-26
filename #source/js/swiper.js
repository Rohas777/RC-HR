$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
        },

        pagination: {
            el: '.swiper-pagination',
        },
    });

    $(".carusel__next").click(function () {
        swiper.slideNext()
    })
    $(".carusel__prev").click(function () {
        swiper.slidePrev()
    })
})