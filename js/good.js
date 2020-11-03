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

    $(".good-card__grid-num").val("");
    $(".good-card__grid-count .good-card__grid-num").val("1");

    if (!($(".good-card__grid-basketbtn").hasClass("dispFlex"))) {
        $(".good-card__grid-basketbtn, .good-card__buying-buy").toggleClass("dispFlex");
    };

    if ($(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
        $(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
    };

    if ($(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
        $(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
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
   

    $(".good-card__grid-basketbtn, .good-card__buying-buy").toggleClass("dispFlex");
    ($(this).siblings(".good-card__grid-basketbtn_task")).toggleClass("dispFlex");
    
});

$(".basketbtn_task-check").on("click", function () {
    if ($(".basketbtn_task-answer").val() == taskArr[3]) {
        miniMarketGame.cartAdd($(".good-card__grid-code span").html());
    
        if ($(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
            $(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
        };
    
        if ($(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
            $(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
        };

        $(".good-card__grid-basketbtn_action").toggleClass("dispFlex");    
    
        console.log(miniMarketGame.cart);
    } else {
        alert("wrong");
        $(".good-card__grid-basketbtn, .good-card__buying-buy").toggleClass("dispFlex");

        if ($(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
            $(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
        };
    
        if ($(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
            $(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
        };
    }


});