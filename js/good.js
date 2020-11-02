$(".good-card__grid-back, .good-card__buying-back").on('click', function () {
    $(".market-page").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");

    $(".good-card__grid-main-photo-pic").remove();
    $(".good-card__grid-change-li").remove();

    window.scrollTo(0, 0);
});

$(".favourite-heart").on('click', function () {
    $(this).find("i").toggleClass("far");
    $(this).find("i").toggleClass("fas");

    if ($(this).find("i").hasClass("far")) {
        $(this).attr("aria-label", "Добавить в избранное");
    } else if ($(this).find("i").hasClass("fas")) {
        $(this).attr("aria-label", "Убрать из избранного");
    };
});