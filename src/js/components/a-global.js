$(".my-select").niceSelect()

$(".header__burger").click(function() {
    $(".header").toggleClass("header--active")
    $("body").toggleClass("fixed-body")
})

$(".menu__title").click(function () {
    if($(this).hasClass("menu__title--active")){
        $(this).removeClass("menu__title--active")
        $(".menu__links").slideUp()
    } else{
        $(this).addClass("menu__title--active")
        $(".menu__links").slideUp()
        $(this).siblings(".menu__links").slideDown()
    }
})

$(".header__search").click(function () {
    console.log(true)
    $(this).toggleClass("header__search--active")
})

$(window).scroll(function() {
    $(".header__search").removeClass("header__search--active")
});
