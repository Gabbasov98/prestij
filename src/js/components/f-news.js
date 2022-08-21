$(".filter__mob").click(function () {
    $(".filter").addClass("is-open")
    $("body").addClass("fixed-body")
})

$(".filter__close").click(function () {
    closeFilter()
})

$(".filter__bg").click(function () {
    closeFilter()
})

function closeFilter() {
    $(".filter").removeClass("is-open")
    $("body").removeClass("fixed-body")
}
