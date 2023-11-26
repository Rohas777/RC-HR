$(document).ready(function () {
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
})