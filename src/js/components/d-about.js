$(".stage__tab").click(function () {
    let path = $(this).attr("data-tabs-path")
    $(".stage__tab").removeClass("stage__tab--active")
    $(this).addClass("stage__tab--active")
    $(".stage__img").removeClass("stage__img--active")
    $(`.stage__img[data-tabs-path="${path}"]`).addClass("stage__img--active")
})
