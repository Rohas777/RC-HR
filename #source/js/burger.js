$(document).ready(function () {
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
})