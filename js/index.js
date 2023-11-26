$(document).ready(function () {

    //SECTION - Burger Menu

    $(".burger").click(function (event) {
        $(".burger,.menu").addClass("active")
        $("body,html").addClass("menu-opened")

        if ($(window).width() <= "1024") {
            $(".burger").addClass("hide")
            $(".burger__close").removeClass("hide")
        }

    })

    $(".menu__close").click(function (event) {
        $(".burger,.menu").removeClass("active")
        $("body,html").removeClass("menu-opened")

        if ($(window).width() <= "1024") {
            $(".burger").removeClass("hide")
            $(".burger__close").addClass("hide")
        }

    })

    $(".burger__close").click(function (event) {
        $(".burger,.menu").removeClass("active")
        $("body,html").removeClass("menu-opened")

        if ($(window).width() <= "1024") {
            $(".burger").removeClass("hide")
            $(".burger__close").addClass("hide")
        }
    })

    //SECTION - Goto Feature

    $("[data-goto]").click(function (e) {

        const destination = $(`${$(this).attr("data-goto")}`)
        $("html,body").animate({
            scrollTop: destination.offset().top
        }, "slow")


        $(".burger,.menu").removeClass("active")
        $("body,html").removeClass("menu-opened")

        if ($(window).width() <= "1024") {
            $(".burger").removeClass("hide")
            $(".burger__close").addClass("hide")
        }
    })

    //SECTION - Quiz Component

    let counter = 1
    const questions = $(".quiz__content")

    $(".quiz__next").click(function () {
        $(questions[counter - 1]).addClass("disable")
        counter += 1
        $(questions[counter - 1]).removeClass("disable")

    })

    $(".quiz__back").click(function () {
        if (counter > 1) {
            $(questions[counter - 1]).addClass("disable")
            counter -= 1
            $(questions[counter - 1]).removeClass("disable")

        }
    })

    //SECTION - Swiper Component

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