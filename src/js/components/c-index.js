$(".model__tab").click(function () {
    let path = $(this).attr("data-tabs-path")
    $(".model__tab").removeClass("model__tab--active")
    $(this).addClass("model__tab--active")
    $(".model__content").removeClass("model__content--active")
    $(`.model__content[data-tabs-path="${path}"]`).addClass("model__content--active")
})
