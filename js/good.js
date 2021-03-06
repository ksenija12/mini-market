$(".nav-list__market-page").on("click", function () {
    $(".market-page").toggleClass("dispFlex");

    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    if ($(".favourite").hasClass("dispFlex")) {
        $(".favourite").toggleClass("dispFlex")
    } else if ($(".good-card").hasClass("dispFlex")) {
        $(".good-card").toggleClass("dispFlex")
    } else if ($(".basket").hasClass("dispFlex")) {
        $(".basket").toggleClass("dispFlex")
    };
    
    $('.nav').removeClass('nav_active');
    $("body").css("overflowY", "visible")
})

$(".good-card__grid-back, .good-card__buying-back").on('click', function () {
    $(".market-page").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");

    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".good-card__grid-main-photo-pic").remove();
    $(".good-card__grid-main-photo .dark").remove();
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

    $(".basketbtn_task-answer").val("");
    $(".basketbtn_task-answer-alt").val("");

    window.scrollTo(0, 0);
    // levelHint();
});

$(".favourite-heart").on('click', function () {
    if (miniMarketGame.gameMode == 2) {
        $(".game-task__task-quest:nth-child(8)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
        level2part2 = 1;
    };

    if (miniMarketGame.gameMode == 3) {
        if (($(".good-card__grid-category span").text()).toLowerCase() == "мебель") {
            $(".game-task__task-quest:nth-child(14)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
            level3part2 = 1;
        } else {
            if ( miniMarketGame.gameMode == 3) {level3part3task1 = 1};
        };
    };

    $(this).find("i").toggleClass("far");
    $(this).find("i").toggleClass("fas");

    if ($(this).find("i").hasClass("far")) {
        $(this).attr("aria-label", "Добавить в избранное");
        miniMarketGame.favouriteGoodRemove($(".good-card__grid-code span").html());
    } else if ($(this).find("i").hasClass("fas")) {
        $(this).attr("aria-label", "Убрать из избранного");
        miniMarketGame.favouriteGoodAdd($(".good-card__grid-code span").html());
    };

    // console.log(miniMarketGame.favouriteGood);
});

$(".good-card__grid-basketbtn, .good-card__buying-buy").on("click", function () {
    taskArr = miniMarketGame.createTask();

    $(".basketbtn_task-first").html(`${taskArr[0]}`);
    $(".basketbtn_task-operation").html(`${taskArr[1]}`);
    $(".basketbtn_task-second").html(`${taskArr[2]}`);

    $(".basketbtn_task-answer").val("");
    $(".basketbtn_task-answer-alt").val("");

    $(".good-card__grid-basketbtn, .good-card__buying-buy").toggleClass("dispFlex");
    ($(this).siblings(".good-card__grid-basketbtn_task")).toggleClass("dispFlex");
    
});

$(".basketbtn_task-check").on("click", function () {
    const answerCheck = $(".basketbtn_task-answer").val() == taskArr[3];
    const answerCheckAlt = $(".basketbtn_task-answer-alt").val() == taskArr[3]; 

    if (answerCheck || answerCheckAlt) {
        miniMarketGame.cartAdd($(".good-card__grid-code span").html());

        if (miniMarketGame.gameMode == 1) {
            $(".game-task__task-quest.task_level1:nth-child(4)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
            level1part4 = 1;
        };

        if (miniMarketGame.gameMode == 2) {
            let checkSale = miniMarketGame.saleGoods.find(function (el) {
                return  el.good.id == $(".good-card__grid-code").text()
            });

            if (checkSale) {
                level2part4task2 = 1;
                if ((level2part4task1 + level2part4task2) == 2) {
                    $(".game-task__task-quest:nth-child(10)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
                    level2part4 = 1;
                };
            };
        };
    
        // модалка
        fancyRight();

        if ($(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
            $(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
        };
    
        if ($(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
            $(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
        };

        $(".good-card__grid-basketbtn, .good-card__buying-buy").toggleClass("dispFlex");

        if (!($(".good-card__grid-basketbtn_action").hasClass("dispFlex"))) {$(".good-card__grid-basketbtn_action").addClass("dispFlex")};    
    
        // console.log(miniMarketGame.cart);

    } else if (!answerCheck && !answerCheckAlt) {
        alert("Ответ не верный! Попробуй еще)");
        $(".good-card__grid-basketbtn, .good-card__buying-buy").toggleClass("dispFlex");

        if ($(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
            $(".good-card__grid-basketbtn").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
        };
    
        if ($(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").hasClass("dispFlex")) {
            $(".good-card__buying-buy").siblings(".good-card__grid-basketbtn_task").toggleClass("dispFlex");
        };

        $('[data-text="goToCart"]').unbind();
        
    }


});  

function fancyRight () {
    $('[data-text="goToCart"]').fancybox({
        "padding": 20,
        "width": 600,
        "overlayOpacity": 0.9,
        "overlayColor": '#f7f8fa',
        showCloseButton: true,
        modal: true,
        "height": "auto"
        
    });

    $(".modal-block_toCart-buyBtn").on("click", function() {
        $.fancybox.close();
    });
};