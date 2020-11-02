$(".good-card__grid-back, .good-card__buying-back").on('click', function () {
    $(".market-page").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");

    $(".good-card__grid-main-photo-pic").remove();
    $(".good-card__grid-change-li").remove();

    if ($(".favourite-heart").find("i").hasClass("far")) {
        $(".favourite-heart").find("i").removeClass("far");
    } else if ($(".favourite-heart").find("i").hasClass("fas")) {
        $(".favourite-heart").find("i").removeClass("fas");
    };


    window.scrollTo(0, 0);
});

$(".favourite-heart").on('click', function () {
    $(this).find("i").toggleClass("far");
    $(this).find("i").toggleClass("fas");

    if ($(this).find("i").hasClass("far")) {
        $(this).attr("aria-label", "Добавить в избранное");
        miniMarketGame.favouriteGoodRemove($(".good-card__grid-code span").html());
    } else if ($(this).find("i").hasClass("fas")) {
        $(this).attr("aria-label", "Убрать из избранного");
        miniMarketGame.favouriteGoodAdd($(".good-card__grid-code span").html());
    };

    console.log(miniMarketGame.favouriteGood);
});

$(".good-card__grid-basketbtn, .good-card__buying-buy").on("click", function () {
    miniMarketGame.cartAdd($(".good-card__grid-code span").html());

    $(".good-card__grid-basketbtn, .good-card__buying-buy").toggleClass("dispFlex");
    $(".good-card__grid-basketbtn_action").toggleClass("dispFlex");


    console.log(miniMarketGame.cart);
});