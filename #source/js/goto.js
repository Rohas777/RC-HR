$(document).ready(function (e) {
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
})