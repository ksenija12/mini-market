/////////////////////////////market-page/////////////////////////////

$("[data-text='#anchor1']").on('click', function () {
    if (miniMarketGame.gameMode == 1) {
        level1part1 = 1;
        $(".game-task__task-quest.task_level1:nth-child(1)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
    };
});


$(".goods__list-choose-sort_select select").on("input", function () {
    if (miniMarketGame.gameMode == 3) {
        if ($(this).val() == 2) {
            $(".game-task__task-quest:nth-child(16)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
            level3part4 = 1;
        };
    };
});

$(".good-card__about-garant-paying .good-card__about-title:nth-child(2)").on('click', function () {
    if (miniMarketGame.gameMode == 3) {
        $(".game-task__task-quest:nth-child(17)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
        level3part5 = 1;
    };
});


$(".nav-list__favourite, .nav-list__basket").on("click", function () {
    
    $('.nav').removeClass('nav_active');
    $("body").css("overflowY", "visible");
    $(".favourite h3").remove();
    $(".basket h3").remove();


})


//---------------назад к уровню---------------//

$(".backform").on("click", function() {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");
    symbol = [];
    miniMarketGame.operations = [];
    $(".market-page").toggleClass('dispFlex');
    $(".level").toggleClass('dispFlex');
    
    $(".level__operation-check-btn-input").prop("checked", false);
    $("#level__difficulty-radio-btn-01").prop("checked", true);
    

    for (let i = 2; i < 5; i++) {
        let check = $(`#level__operation-check-btn-0${i}`).parent('.level__operation-check-btn');
        if (check.hasClass("dispFlex")) {check.removeClass("dispFlex")}
    };
    
    potterCat(true);

    $(".sale__grid-col").remove();
    $(".basket__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();
    $('.nav').removeClass('nav_active');
    // $("body").css("overflowY", "visible");

    $(".level__difficulty-descript").removeClass('dispFlex');
    $(`.level__difficulty-descript[data-count="${$("#level__difficulty-radio-btn-01").attr("data-count")}"]`).addClass('dispFlex');

    $(".task__cat").toggleClass("dispFlex");
    $(".about__cat").toggleClass("dispFlex");

    $(".game-task__task-quest").find(".game-task__task-quest-text").css("textDecoration", "none");
    level1part1 = 0;
    level1part2 = 0;
    level1part3 = 0;
    level1part4 = 0;
    level1part5 = 0;
    level1part6 = 0;
    level2part1 = 0;
    level2part2 = 0;
    level2part3task1 = 0;
    level2part3task2 = 0;
    level2part3 = 0;
    level2part4task1 = 0;
    level2part4task2 = 0;
    level2part4 = 0;
    level2part5 = 0;
    level2part6 = 0;
    level3part1 = 0;
    level3part2 = 0;
    level3part3task1 = 0;
    level3part3task2 = 0;
    level3part3 = 0;
    level3part4 = 0;
    level3part5 = 0;
    level3part6 = 0;
});


//---------------navigation---------------//

$('.nav-toggle').on('click', function(){

    const $nav = $(this).siblings('.nav');
    const height = $('.header').outerHeight();
    const height2 = $('.good-card__header').outerHeight();

    $nav.toggleClass('nav_active');
    const $body = $('body');

    if ($nav.hasClass('nav_active')) {
        if ($(".game-task").hasClass("game-task_animation")) {$(".game-task").removeClass("game-task_animation").toggle(600)};
        
        if ($(".market-page").hasClass("dispFlex")) {
            $nav.css("top", height);
        } else {
            $nav.css("top", height2);
        };
        $body.css("overflow", "hidden");
    } else {
        $body.css("overflow-y", "visible");
    };

    $(".task__cat").toggleClass("hidden");
    
    if (window.matchMedia("(max-width: 767px)").matches) {
        if ($(".change-game").hasClass("dispFlex")) {
            $('.nav-list').css("paddingTop", `calc( 20px + ${$(".change-game__form").find(".dispFlex").outerHeight()}px )`);
        };
    }


})


//---------------выход---------------//

$('[data-text="#anchor7"]').on("click", function() {
    $(".entranse").toggleClass('dispFlex');
    if ($(".market-page").hasClass("dispFlex")) {
        $(".market-page").toggleClass("dispFlex")
    } else if ($(".good-card").hasClass("dispFlex")) {
        $(".good-card").toggleClass("dispFlex")
    } else if ($(".basket").hasClass("dispFlex")) {
        $(".basket").toggleClass("dispFlex")
    } else if ($(".favourite").hasClass("dispFlex")) {
        $(".favourite").toggleClass("dispFlex")
    };

    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".entranse__password-pass").val("");
    $(".entranse__login-name").val("");
    
    $(".level__operation-check-btn-input").prop("checked", false);
    $("#level__difficulty-radio-btn-01").prop("checked", true);

    miniMarketGame.operations = [];
    miniMarketGame.cart = [];
    miniMarketGame.favouriteGood = [];
    miniMarketGame.onAccount = 5000;

    helloCat();

    $(".sale__grid-col").remove();
    $(".basket__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();

    $('.nav').removeClass('nav_active');
    $("body").css("overflowY", "hidden");

    $(".level__difficulty-descript").removeClass('dispFlex');
    $(`.level__difficulty-descript[data-count="${$("#level__difficulty-radio-btn-01").attr("data-count")}"]`).addClass('dispFlex');

    $(".task__cat").toggleClass("dispFlex");
    $(".about__cat").toggleClass("dispFlex");

    $(".game-task__task-quest").find(".game-task__task-quest-text").css("textDecoration", "none");
    level1part1 = 0;
    level1part2 = 0;
    level1part3 = 0;
    level1part4 = 0;
    level1part5 = 0;
    level1part6 = 0;
    level2part1 = 0;
    level2part2 = 0;
    level2part3task1 = 0;
    level2part3task2 = 0;
    level2part3 = 0;
    level2part4task1 = 0;
    level2part4task2 = 0;
    level2part4 = 0;
    level2part5 = 0;
    level2part6 = 0;
    level3part1 = 0;
    level3part2 = 0;
    level3part3task1 = 0;
    level3part3task2 = 0;
    level3part3 = 0;
    level3part4 = 0;
    level3part5 = 0;
    level3part6 = 0;

    returnToLightTheme();


});

//---------------слик-меню---------------//

// const $header = $('.header');

// $(window).on('scroll', function() {
//     const scrollTop = $('body, html').scrollTop();
//     const offset = $('.sale').offset().top;

//     if (scrollTop >= offset) {
//         $header.addClass('header_sticky');

//         $(".market-page__cat").css("display", "none");
//         $(".market-page__title-img").css("height", "30px");
//         $(".nav-toggle").css("height", "30px");
//         $(".nav-toggle").css("width", "30px");
        
//         const height = $header.outerHeight();
//         $header.css('top', -height);
//         $header.animate({top:0}, 300);

//         $(".backtostart").css("visibility","visible");
//         $(".backform").css("top","5px");
//         // if (document.documentElement.clientWidth > 767) {$(".nav-list__link_sec").css("paddingTop","2px")};
//         if (window.matchMedia("(min-width: 768px)").matches) {$(".header .nav-list__link_sec").css("paddingTop","2px")};
        

//     } else if (scrollTop < 30) {
//         $header.removeClass('header_sticky');
//         $(".backtostart").css("visibility","hidden");
//         $(".market-page__cat").css("display", "block");
//         $(".market-page__title-img").css("height", "");
//         $(".nav-toggle").css("height", "25px");
//         $(".nav-toggle").css("width", "25px");
//         $(".backform").css("top","20px");
//         // if (document.documentElement.clientWidth > 767) {$(".nav-list__link_sec").css("paddingTop","7px")};
//         if (window.matchMedia("(min-width: 768px)").matches) {$(".header .nav-list__link_sec").css("paddingTop","7px")};
        
//     };
// });


//---------------прокрутка---------------//

$('[data-index]').on("click", function(event) {
    event.preventDefault();

    const $link = $(this);
    const selector = $link.attr('data-text');

    const $target = $(selector);
    const height = $('header').outerHeight() - 40;

    const offset = $target.offset().top - height;

    $('html, body').animate({scrollTop: offset}, 500);


    $('.nav').removeClass('nav_active');
    $("body").css("overflowY", "visible");
});


//---------------Коты на главной---------------//

$('.nav-list__link_heart').hover(function() {
    $(".main-block__cat-heart").addClass('dispFlex');
}, function() {
    $(".main-block__cat-heart").removeClass('dispFlex');
});


$('.nav-list__link_basket').hover(function() {
    $(".main-block__cat-basket").addClass('dispFlex');
}, function() {
    $(".main-block__cat-basket").removeClass('dispFlex');
});


$('.main-block__findarea-input').focusin(function() {
    $(".main-block__cat-find").addClass('dispFlex');
}).focusout(function() {
    $(".main-block__cat-find").removeClass('dispFlex');
    $(".main-block__findarea-results-list").remove();
});

$('.main-block__findarea-select').focusin(function() {
    $(".main-block__cat-find").addClass('dispFlex');
}).focusout(function() {
    $(".main-block__cat-find").removeClass('dispFlex');
});





////////////////////////////Поиск с задержкой////////////////////////////

let timer, value;

$('.main-block__findarea-input').on('input', function () {clearTimeout(timer);
    $(".main-block__findarea-results-list").remove();
    let str = $(this).val();
    
    if (str.length > 0 && value != str) {
        timer = setTimeout(function() {
            value = str;
            miniMarketGame.findGood = [];
            miniMarketGame.find();

            $(".main-block__findarea-results").append("<ul class='main-block__findarea-results-list'></ul>");
            $(".main-block__findarea-results-list").css("display", "block");
            const coef = 36;
            if (miniMarketGame.findGood.length > 6) {
                $(".main-block__findarea-results-list").css("height", `${6*coef}px`);
                $(".main-block__findarea-results-list").css("overflow-y", "scroll");
            } else if ((miniMarketGame.findGood.length > 0) && (miniMarketGame.findGood.length <=6)) {
                $(".main-block__findarea-results-list").css("height", `${miniMarketGame.findGood.length*coef}px`);
                $(".main-block__findarea-results-list").css("overflow-y", "auto");
            } else {
                $(".main-block__findarea-results-list").css("height", `${coef}px`);
                $(".main-block__findarea-results-list").css("overflow-y", "auto");
            }

            if (!miniMarketGame.findGood.length) {
                $(".main-block__findarea-results-list").append('<li>Товар не найден</li>');
            } else {
                for (let i = 0; i < miniMarketGame.findGood.length; i++) {
                    $(".main-block__findarea-results-list").append(`<li data-item="${miniMarketGame.findGood[i].id}">${miniMarketGame.findGood[i].title}</li>`);
                };
                
                $(".main-block__findarea-results-list li").on("mousedown", function () {
                    const good = miniMarketGame.selectedGood($(this).attr("data-item"));
                    
                    goToGood(good);
                });
            };

            
        }, 300);
    }});


$(".main-block__findarea-icon").on('click', function () {

    $(".modal-block").toggleClass("dispFlex");

    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $('.modal__grid-col').remove();

    
    if (!($(".main-block__findarea-input").val())) {
        miniMarketGame.findGood = miniMarketGame.miniMarket;
    };

    if (miniMarketGame.findGood.length) {
        for (let i = 0; i < miniMarketGame.findGood.length; i++) {
            $(".modal__grid").append(`<div class='modal__grid-col col-${i}'></div>`);
            $(`.modal__grid-col.col-${i}`).append(`<div class='modal__grid-item item-${i}'><div class="dark"></div><img src="${miniMarketGame.findGood[i].pic[0]}" alt="" data-item='${miniMarketGame.findGood[i].id}'><p class="goods__list-symbol"><i class="far fa-heart goods__list-star"></i><i class="fas fa-percent goods__list-persent"></i></p></div>`);
            
            if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

            if (window.matchMedia("(min-width: 981px)").matches) {
                $(`.modal__grid-col.col-${i} .modal__grid-item.item-${i}`).addClass("hint--left");
                $(`.modal__grid-col.col-${i} .modal__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.findGood[i].title}`);
            } else {
                $(`.modal__grid-col.col-${i} .modal__grid-item.item-${i}`).append(`<div>${miniMarketGame.findGood[i].title}</div>`)
            }

            
            let checkSale = miniMarketGame.saleGoods.find(function (el) {
                return  el.good.id == String(miniMarketGame.findGood[i].id)
            });

            
            if (checkSale) {
                $(`.modal__grid-item.item-${i} .goods__list-persent`).addClass("dispFlex");
            } else {
                $(`.modal__grid-item.item-${i} .goods__list-persent`).removeClass("dispFlex");
            }; 
            
            const checkFavourite = miniMarketGame.favouriteGood.find(function (el) {
                return el.id == String(miniMarketGame.findGood[i].id);
            });
            
            if (checkFavourite) {
                $(`.modal__grid-item.item-${i} .goods__list-star`).addClass("dispFlex");
            } else {
                $(`.modal__grid-item.item-${i} .goods__list-star`).removeClass("dispFlex");
            }; 
        }
    };

    $(".modal__grid-item").on("click", function() {
        const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
                    
        goToGood(good);

        $.fancybox.close();
        $(".modal-block").css("display", "none");
        $(".fancybox-container").css("display", "none");
    });
        
            
    $(".main-block__findarea-input").val("");
});


////////////////////////////Результат поиска////////////////////////////

$('[data-text="try"]').fancybox({
    "padding": 20,
    "width": 900,
    "overlayOpacity": 0.9,
    "overlayColor": '#f7f8fa',
    showCloseButton: true,
    modal: true,
    "height": "auto"
    
});
        

////////////////////////////Выбор категории////////////////////////////


//---------------показываем товары---------------//

function showGood(begin, end) {
    for (let i = ($("#goods-count").val() * begin - $("#goods-count").val()); i < end; i++) {
        $(".goods__list-grid").append(`<div class="goods__list-col col-${i}"></div>`);
        
        $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}"></div>`)
        
        let price;
        
        let checkSale = miniMarketGame.saleGoods.find(function (el) {
            return  el.good.id == String(miniMarketGame.clickedCategory[i].id)
        });
    
        if (checkSale) {
            miniMarketGame.gameMode == 1 ? price = ((100 - checkSale.discount) * miniMarketGame.clickedCategory[i].price / 100).toFixed(0) : price = ((100 - checkSale.discount) * miniMarketGame.clickedCategory[i].price / 100).toFixed(2);
        } else {
            miniMarketGame.gameMode == 1 ? price = miniMarketGame.clickedCategory[i].price.toFixed(0) : price = miniMarketGame.clickedCategory[i].price.toFixed(2);
        };        
        
        // miniMarketGame.gameMode == 1 ? price = miniMarketGame.clickedCategory[i].price.toFixed(0) : price = miniMarketGame.clickedCategory[i].price.toFixed(2);
        $(`.goods__list-item.item-${i}`).append(`<div class="dark"></div><img src="${miniMarketGame.clickedCategory[i].pic[0]}" alt="" data-item='${miniMarketGame.clickedCategory[i].id}'><div class="item_back-discount goods__list-price">${price} UAH</div><div class="goods__list-symbol"><i class="far fa-heart goods__list-star"></i><i class="fas fa-percent goods__list-persent"></i></div>`)
        
        if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

        if (checkSale) {
            $(`.goods__list-item.item-${i} .goods__list-persent`).addClass("dispFlex");
        } else {
            $(`.goods__list-item.item-${i} .goods__list-persent`).removeClass("dispFlex");
        };   

        $(`.goods__list-item.item-${i}`).addClass("hint--left");
        $(`.goods__list-item.item-${i}`).attr("aria-label", `${miniMarketGame.clickedCategory[i].title}`);

       
        
        const checkFavourite = miniMarketGame.favouriteGood.find(function (el) {
            return el.id == String(miniMarketGame.clickedCategory[i].id);
        });
        
        if (checkFavourite) {
            $(`.goods__list-item.item-${i} .goods__list-star`).addClass("dispFlex");
        } else {
            $(`.goods__list-item.item-${i} .goods__list-star`).removeClass("dispFlex");
        }; 
        
    };

    $(".goods__list-item").on("click", function() {
        const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));

                
        goToGood(good);
    });
};

let numPage, maxItem;

$(".goods__grid-block").on('click', function(event) {

    
    //---------------Товары из выбранной категории---------------//

    miniMarketGame.clickedCategory = miniMarketGame.miniMarket.filter(function (el) {
        return el.category == String($(event.target).attr("data-text"));
    })
    
    //---------------Если нажатие именно на категорию---------------//

    if (miniMarketGame.clickedCategory.length)  {

        $(this).css("position","absolute");
        $(this).css("left","-100vw");
        $(".goods__dots").toggleClass("dispFlex");
        $(".goods__list").toggleClass("dispFlex"); 
        
        //---------------Показываем первые 5 товаров---------------//

        let count = screenW();

        $("#goods-count").append(`<option class="option-change" value="${count}">${count}</option>`);
        if (miniMarketGame.clickedCategory.length > 1) {
            showGood(1, count);
        } else {
            showGood(1, 1);
        };


        //---------------Номера страниц---------------//        
        let goodsCountList;
        
        goodsCountList = miniMarketGame.clickedCategory.length % count == 0 ? miniMarketGame.clickedCategory.length / count - 1 : Math.floor(miniMarketGame.clickedCategory.length / count)
        
        for (let i = 0; i < goodsCountList; i++) {
            $("#goods-count").append(`<option class="option-change" value="${count*i+count*2}">${count*i+count*2}</option>`)
            
            $(".goods__list-pages-numbers").append(`<div data-count="${i+2}" data-text="goods__list-pages" class="goods__list-pages-num">${i+2}</div>`)
        };

        $(".goods__list-pages").toggleClass("dispFlex");

        //---------------Выводим товары соответствующие странице---------------//
        $("[data-text='goods__list-pages']").on('click', function (event) {
            numPage = $(this).attr("data-count");
            
            $("[data-text='goods__list-pages']").css("backgroundColor", "#16531849");
            $(this).css("backgroundColor", "#16531896");
            
            $(".goods__list-col").remove();

            maxItem = count * numPage < miniMarketGame.clickedCategory.length ? count * numPage : miniMarketGame.clickedCategory.length;

            showGood(numPage, maxItem);
        });

        //---------------Выбор сортировки---------------//
        $("#goods-sort").append('<option value="" hidden>без сортировки</option><option value="1">от дешевых к дорогим</option><option value="2">от дорогих к дешевым</option><option value="3">от А до Я</option><option value="4">от Я до А</option>');

        //---------------Выводим товары соответствующие странице отсортированные---------------//
        $("#goods-sort").change( function () {
            
            numPage = $("[data-text='goods__list-pages']").attr("data-count");

            $("[data-text='goods__list-pages']").css("backgroundColor", "#16531849");
            $(".goods__list-pages-num-main").css("backgroundColor", "#16531896");

            $(".goods__list-col").remove();

            let sorted;
            if ($("#goods-sort").val() == 1) {
                sorted =  miniMarketGame.clickedCategory.sort(function (a, b) { return a.price/a.count - b.price/b.count});
            } else if ($("#goods-sort").val() == 2) {
                sorted =  miniMarketGame.clickedCategory.sort(function (a, b) { return b.price/b.count - a.price/a.count});
            } else if ($("#goods-sort").val() == 3) {
                sorted =  miniMarketGame.clickedCategory.sort(function (a, b) {
                    if ( a.title < b.title ) return -1;
                    if ( b.title < a.title ) return 1;
                });
            } else if ($("#goods-sort").val() == 4) {
                sorted =  miniMarketGame.clickedCategory.sort(function (a, b) {
                    if ( a.title > b.title ) return -1;
                    if ( b.title > a.title ) return 1;
                });
            };
            
            maxItem = count * numPage < sorted.length ? count * numPage : sorted.length;

            for (let i = (count * numPage - count); i < maxItem; i++) {
                $(".goods__list-grid").append(`<div class="goods__list-col col-${i}"></div>`);
                
                $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}"><div class="dark"></div><img src="${sorted[i].pic[0]}" data-item="${sorted[i].id}"></div>`);

                if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

                $(`.goods__list-item.item-${i}`).addClass("hint--left");
                $(`.goods__list-item.item-${i}`).attr("aria-label", `${sorted[i].title}`);

                let price;
                miniMarketGame.gameMode == 1 ? price = sorted[i].price.toFixed(0) : price = sorted[i].price.toFixed(2);
                $(`.goods__list-item.item-${i}`).append(`<div class="item_back-discount goods__list-price">${price} UAH</div>`);
            };
        
                    
            $(".goods__list-item").on("click", function() {
                const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
            
                            
                goToGood(good);
            });
        });
        
        
    };
});


////////////////////////////Возврат к категориям////////////////////////////

$(".goods__list-category").on("click", function () {

    $(".goods__list-col").remove();

    // $(".goods__grid-block").toggleClass("dispFlex");
    $(".goods__grid-block").css("position","relative");
    $(".goods__grid-block").css("left","0");
    $(".goods__dots").toggleClass("dispFlex");
    $(".goods__list").toggleClass("dispFlex");

    let count = screenW();

    $("#goods-count").val(`${count}`);

    // $("#goods-count").val("5");

    $(".option-change").remove();

    $(".goods__list-pages").toggleClass("dispFlex");

    $(".goods__list-pages-num").remove();

    $("#goods-sort").children().remove();
   

});


////////////////////////////Смена количества товаров на странице////////////////////////////

$("#goods-count").on("input", function () {
    
    // const $goodsHeight = $(".goods").outerHeight();

    $(".goods__list-pages-num").remove();
    $(".goods__list-grid").remove();

    $("[data-text='goods__list-pages']").css("backgroundColor", "#16531849");
    $(".goods__list-pages-num-main").css("backgroundColor", "#16531896");
    //---------------Показываем первые товары выбранное количество---------------//
    $(".goods__list-goods").append("<div class='goods__list-grid'></div>");

    let maxCount;
    ( $(this).val() <= miniMarketGame.clickedCategory.length ) ? maxCount = $(this).val() : maxCount = miniMarketGame.clickedCategory.length;

    showGood(1, maxCount)

    //---------------Номера страниц---------------// 
    let pages = miniMarketGame.clickedCategory.length % ($(this).val()) == 0 ? miniMarketGame.clickedCategory.length / ($(this).val()) - 1 : Math.floor(miniMarketGame.clickedCategory.length / ($(this).val()))

    for (let i = 0; i < pages; i++) {
        $(".goods__list-pages-numbers").append(`<div data-count="${i+2}" data-text="goods__list-pages" class="goods__list-pages-num">${i+2}</div>`);
    };

    //---------------Выводим товары соответствующие странице---------------//
    $("[data-text='goods__list-pages']").on('click', function () {

        numPage = $(this).attr("data-count");

        $("[data-text='goods__list-pages']").css("backgroundColor", "#16531849");
        $(this).css("backgroundColor", "#16531896");
        
        $(".goods__list-col").remove();

        maxItem = $("#goods-count").val() * numPage < miniMarketGame.clickedCategory.length ? $("#goods-count").val() * numPage : miniMarketGame.clickedCategory.length;

        
        const selector = "#anchor1";

        const $target = $(selector);
        // const height = $('header').outerHeight() - 40;

        // const offset = $target.offset().top - height;
        const offset = $target.offset().top ;

        $('html, body').animate({scrollTop: offset}, 500);

        const $body = $('body');

        showGood(numPage, maxItem)
    });

    //---------------Выводим товары соответствующие странице отсортированные---------------//
    $("#goods-sort").change( function () {
        let sorted;
        if ($("#goods-sort").val() == 1) {
            sorted =  miniMarketGame.clickedCategory.sort(function (a, b) { return a.price/a.count - b.price/b.count});
        } else if ($("#goods-sort").val() == 2) {
            sorted =  miniMarketGame.clickedCategory.sort(function (a, b) { return b.price/b.count - a.price/a.count});
        } else if ($("#goods-sort").val() == 3) {
            sorted =  miniMarketGame.clickedCategory.sort(function (a, b) {
                if ( a.title < b.title ) return -1;
                if ( b.title < a.title ) return 1;
            });
        } else if ($("#goods-sort").val() == 4) {
            sorted =  miniMarketGame.clickedCategory.sort(function (a, b) {
                if ( a.title > b.title ) return -1;
                if ( b.title > a.title ) return 1;
            });
        };

        numPage = $("[data-text='goods__list-pages']").attr("data-count");

        $("[data-text='goods__list-pages']").css("backgroundColor", "#16531849");
        $(".goods__list-pages-num-main").css("backgroundColor", "#16531896");
        
        $(".goods__list-col").remove();
                
        maxItem = $("#goods-count").val() * numPage < sorted.length ? $("#goods-count").val() * numPage : sorted.length;

        
        for (let i = (5 * numPage - 5); i < maxItem; i++) {
            $(".goods__list-grid").append(`<div class="goods__list-col col-${i}"></div>`);
                
            $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}"><div class="dark"></div><img src="${sorted[i].pic[0]}" data-item="${sorted[i].id}"></div>`)
                
            if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

            $(`.goods__list-item.item-${i}`).addClass("hint--left");
            $(`.goods__list-item.item-${i}`).attr("aria-label", `${sorted[i].title}`);

            let price;
            miniMarketGame.gameMode == 1 ? price = sorted[i].price.toFixed(0) : price = sorted[i].price.toFixed(2);    
            $(`.goods__list-item.item-${i}`).append(`<div class="item_back-discount goods__list-price">${price} UAH</div>`);
        };

        $(".goods__list-item").on("click", function() {
            const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
        
                        
            goToGood(good);
        });
    
    })
    
});



////////////////////////////Переход в избранное////////////////////////////


$(".nav-list__favourite, .nav-list__link_heart, .footer__buyer-favourite").on("click", function() {
    $(".favourite__grid-col").remove();

    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".favourite").toggleClass("dispFlex");
    if ($(".market-page").hasClass("dispFlex")) {
        $(".market-page").toggleClass("dispFlex")
    } else if ($(".good-card").hasClass("dispFlex")) {
        $(".good-card").toggleClass("dispFlex")
    } else if ($(".basket").hasClass("dispFlex")) {
        $(".basket").toggleClass("dispFlex")
    };

    if (($(".favourite__choose-ico").find("i")).hasClass("fa-grip-lines")) {($(".favourite__choose-ico").find("i")).toggleClass("fa-grip-horizontal").toggleClass("fa-grip-lines");}

    $(".favourite h3").remove();

    window.scrollTo(0, 0);

    if (miniMarketGame.favouriteGood.length == 0) {
        $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
    } else {
        for (let i = 0; i < miniMarketGame.favouriteGood.length; i++) {
            $(".favourite__grid").append(`<div class="favourite__grid-col col-${i}"></div>`);
                
            $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item item-${i}"><div class="dark"></div><img src="${miniMarketGame.favouriteGood[i].pic[0]}" data-item="${miniMarketGame.favouriteGood[i].id}"></div>
            <div class="favourite__grid-item-remove hint--top" aria-label="Удалить из избранного" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="far fa-trash-alt"></i></div>
            <div class="favourite__grid-item-cart hint--bottom" aria-label="Добавить в корзину" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="fas fa-shopping-basket"></i></div>`);
            
            if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

            // if (document.documentElement.clientWidth <= 980) {
            if (window.matchMedia("(max-width: 980px)").matches) {
                $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item-title">${miniMarketGame.favouriteGood[i].title}</div>`)
            } else {
                $(`.favourite__grid-item.item-${i}`).addClass("hint--left");
                $(`.favourite__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.favouriteGood[i].title}`);
            }

            
        };

        $(".favourite__grid-item").on("click", function() {
            $(".favourite__grid-col").remove();

            const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
            
            goToFavouriteGood(good);
        });

        $(".favourite__grid-item-remove").on("click", function () {
            miniMarketGame.favouriteGoodRemove($(this).attr("data-item"));

            const that = this;
            const elem = miniMarketGame.miniMarket.find(function (el) {
                return el.id == String($(that).attr("data-item"));
            });

            const good = elem.title;
            catHint(`Удалено из избранного: ${good}`, ".favourite__hint");

            $(this).parent().remove();

            if (miniMarketGame.favouriteGood.length == 0) {
                $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
            };

        });

        $(".favourite__grid-item-cart").on("click", function () {
            
            if (miniMarketGame.gameMode == 2) {
                level2part3task1 = 1;
            };

            miniMarketGame.cartAdd($(this).attr("data-item"));

            const that = this;
            const elem = miniMarketGame.miniMarket.find(function (el) {
                return el.id == String($(that).attr("data-item"));
            });

            const good = elem.title;
            catHint(`В корзину добавлено: ${good}`, ".favourite__hint");

        });


        $(".favourite__grid-col").css("flexDirection", "column");
        $(".favourite__grid-col").css("border", "none");
        $(".favourite__grid").css("border", "none");
    };

    

});


$(".favourite__choose-ico").on("click", function() {
    if (miniMarketGame.gameMode == 3) {
        level3part3task2 = 1;
        if ((level3part3task1 + level3part3task2) == 2) {
            $(".game-task__task-quest:nth-child(15)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
            level3part3 = 1;
        };
    };

    $(".favourite__grid-col").remove();
    $(this).find("i").toggleClass("fa-grip-horizontal").toggleClass("fa-grip-lines");

    if (($(this).find("i")).hasClass("fa-grip-horizontal")) {
        
        $(this).attr("aria-label", "Сетка");
        for (let i = 0; i < miniMarketGame.favouriteGood.length; i++) {
            $(".favourite__grid").append(`<div class="favourite__grid-col col-${i}"></div>`);
                
            $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item item-${i}"><div class="dark"></div><img src="${miniMarketGame.favouriteGood[i].pic[0]}" data-item="${miniMarketGame.favouriteGood[i].id}"></div>
            <div class="favourite__grid-item-remove hint--top" aria-label="Удалить из избранного" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="far fa-trash-alt"></i></div>
            <div class="favourite__grid-item-cart hint--bottom" aria-label="Добавить в корзину" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="fas fa-shopping-basket"></i></div>`);
            
            if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

            // if (document.documentElement.clientWidth <= 980) {
            if (window.matchMedia("(max-width: 980px)").matches) {
                $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item-title">${miniMarketGame.favouriteGood[i].title}</div>`)
            } else {
                $(`.favourite__grid-item.item-${i}`).addClass("hint--left");
                $(`.favourite__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.favouriteGood[i].title}`);
            };
        };

        $(".favourite__grid-item").on("click", function() {
            $(".favourite__grid-col").remove();

            const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
            
            goToFavouriteGood(good);
        });

        $(".favourite__grid-item-remove").on("click", function () {
            miniMarketGame.favouriteGoodRemove($(this).attr("data-item"));
            $(this).parent().remove();

            const that = this;
            const elem = miniMarketGame.miniMarket.find(function (el) {
                return el.id == String($(that).attr("data-item"));
            });

            const good = elem.title;
            catHint(`Удалено из избранного: ${good}`, ".favourite__hint");
            

            if (miniMarketGame.favouriteGood.length == 0) {
                $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
            };
        });

        $(".favourite__grid-item-cart").on("click", function () {
            miniMarketGame.cartAdd($(this).attr("data-item"));


            const that = this;
            const elem = miniMarketGame.miniMarket.find(function (el) {
                return el.id == String($(that).attr("data-item"));
            });

            const good = elem.title;
            catHint(`В корзину добавлено: ${good}`, ".favourite__hint");


            // console.log(miniMarketGame.cart);
        });

        $(".favourite__grid-col").css("flexDirection", "column");
        $(".favourite__grid-col").css("border", "none");
        $(".favourite__grid").css("border", "none");

    } else if (($(this).find("i")).hasClass("fa-grip-lines")) {
        
        $(".favourite__grid-col").css("flexDirection", "row");
        $(this).attr("aria-label", "Список");
        for (let i = 0; i < miniMarketGame.favouriteGood.length; i++) {
            $(".favourite__grid").append(`<div class="favourite__grid-col col-${i}"></div>`);
                
            $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item item-${i}"><div class="dark"></div><img src="${miniMarketGame.favouriteGood[i].pic[0]}" data-item="${miniMarketGame.favouriteGood[i].id}"></div>
            <div class="button favourite__grid-item-remove-list hint--top" aria-label="Удалить из избранного" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="far fa-trash-alt"></i></div>
            <div class="button favourite__grid-item-cart-list hint--top" aria-label="Добавить в корзину" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="fas fa-shopping-basket"></i></div>`);
            
            $(`.favourite__grid-item.item-${i}`).addClass("hint--left");
            $(`.favourite__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.favouriteGood[i].title}`);

            if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

            let val = (miniMarketGame.favouriteGood[i].count == 1) ? "" : "/ " + miniMarketGame.favouriteGood[i].count + " " + miniMarketGame.favouriteGood[i].val;
            let price;
            miniMarketGame.gameMode == 1 ? price = miniMarketGame.favouriteGood[i].price.toFixed(0) : price = miniMarketGame.favouriteGood[i].price.toFixed(2);
            
            $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item-description"><div class='favourite__grid-title'>${miniMarketGame.favouriteGood[i].title}</div>
            <div class='favourite__grid-category'>Категория: ${miniMarketGame.favouriteGood[i].category}</div>
            <div class='favourite__grid-code'>Код: ${miniMarketGame.favouriteGood[i].id}</div>
            <div class='favourite__grid-price'>Цена: ${price} UAH ${val}</div>
            </div>`)
            $(`.favourite__grid-col`).css('width', "100%");
            
            if (window.matchMedia("(min-width: 981px)").matches) {
                // if (document.documentElement.clientWidth > 980) {
                $(`.favourite__grid-item-description`).css('width', "75%")
                $(`.favourite__grid-item`).css('width', "25%");
                $(`.favourite__grid-item-description`).css('marginLeft', "20px");
            // } else if ((document.documentElement.clientWidth <= 980) && (document.documentElement.clientWidth > 380)) {
            } else if ((window.matchMedia("(max-width: 980px)").matches) && (window.matchMedia("(min-width: 381px)").matches)) {
                $(`.favourite__grid-item-description`).css('width', "70%")
                $(`.favourite__grid-item`).css('width', "30%");
                $(`.favourite__grid-item-description`).css('marginLeft', "20px");
            } else if ((window.matchMedia("(max-width: 380px)").matches) && (window.matchMedia("(min-width: 331px)").matches)) {
                $(`.favourite__grid-item-description`).css('width', "60%")
                $(`.favourite__grid-item`).css('width', "40%");
                $(`.favourite__grid-item-description`).css('marginLeft', "10px");
            } else {
                $(`.favourite__grid-item-description`).css('width', "100%")
                $(`.favourite__grid-item`).css('width', "60%");
                $(`.favourite__grid-item-description`).css('marginLeft', "0");
            };
            
           
        };

        $(".favourite__grid-item").on("click", function() {
            $(".favourite__grid-col").remove();

            const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
            
            goToFavouriteGood(good);
        });

        $(".favourite__grid-item-remove-list").on("click", function () {
            miniMarketGame.favouriteGoodRemove($(this).attr("data-item"));

            const that = this;
            const elem = miniMarketGame.miniMarket.find(function (el) {
                return el.id == String($(that).attr("data-item"));
            });

            const good = elem.title;
            catHint(`Удалено из избранного: ${good}`, ".favourite__hint");

            $(this).parent().remove();

            if (miniMarketGame.favouriteGood.length == 0) {
                $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
            };


        });

        $(".favourite__grid-item-cart-list").on("click", function () {
            miniMarketGame.cartAdd($(this).attr("data-item"));

            const that = this;
            const elem = miniMarketGame.miniMarket.find(function (el) {
                return el.id == String($(that).attr("data-item"));
            });

            const good = elem.title;
            catHint(`В корзину добавлено: ${good}`, ".favourite__hint");
        });
    }

});

$(".favourite__back").on("click", function() {
    $(".favourite").toggleClass("dispFlex");
    $(".market-page").toggleClass("dispFlex");

    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".favourite__grid-col").remove();
});

$(".favourite__remove").on("click", function () {
    
    
    if (miniMarketGame.favouriteGood.length > 0) {
        $("[data-text='clearFavourite']").fancybox({
            "padding": 20,
            "width": 600,
            "overlayOpacity": 0.9,
            "overlayColor": '#f7f8fa',
            showCloseButton: true,
            modal: true,
            "height": "auto"
            
        });


        $(".modal-block_clearFavourite-yes").on("click", function() {
            if (miniMarketGame.gameMode == 2) {
                level2part3task2 = 1;

                if ((level2part3task1 + level2part3task2) == 2) {  

                    $(".game-task__task-quest:nth-child(9)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
                    level2part3 = 1;
                };
            };
            

            catHint("Список избанного очищен", ".favourite__hint");
            $(".favourite__grid-col").remove();
            $(".favourite__list h3").remove();
            miniMarketGame.favouriteGood = [];
            $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
            $.fancybox.close();
        });


        $(".modal-block_clearFavourite-no").on("click", function() {
            $.fancybox.close();
        });
    };

})

////////////////////////////Карта товара////////////////////////////

//---------------меняем картинку и текст---------------//

function changePic() {
    $(".good-card__grid-change-photo img").on("mouseover", function () { 
        const elem = $(this);

        const pic = $(".good-card__grid-main-photo-pic");
        pic.attr("src", `${elem.attr("src")}`);
        pic.css("backgroundColor", "rgba(0,0,0,.1)");

        $(".good-card__grid-change-photo img").css("borderColor", "#268329");
        elem.css("borderColor", "rgba(255, 0, 0, .5)");
        
    
    });
    
};


//---------------добавляем картинки---------------//

function goodsCardAdd(good) {
    $(".good-card__grid-main-photo-pic").remove();
    $(".good-card__grid-main-photo-discount").remove();
    $(".good-card__grid-change-li").remove();
    $(".good-card__grid-main-photo .dark").remove();

    $(".good-card__grid-main-photo").append(`<div class="dark"></div><img  class="good-card__grid-main-photo-pic" src="${good.pic[0]}" alt="${good.title}"><div class="good-card__grid-main-photo-discount"></div>`);
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[0]}" alt="${good.title}"></li>`);
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[1]}" alt="${good.title}"></li>`);
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[2]}" alt="${good.title}"></li>`);
    $(".good-card__grid-change-photo img").css("borderColor", "rgba(255, 0, 0, .5)");

    if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

    $(".good-card__grid-title span").html(`${good.title}`);
    $(".good-card__grid-category span").html(`${good.category}`);
    $(".good-card__grid-code span").html(`${good.id}`);

    let val = (good.count == 1) ? "" : "/ " + good.count + " " + good.val

    let price;

    let checkSale = miniMarketGame.saleGoods.find(function (el) {
        return  el.good.id == String(good.id)
    });

    if (checkSale) {
        miniMarketGame.gameMode == 1 ? price = ((100 - checkSale.discount) * good.price / 100).toFixed(0) : price = ((100 - checkSale.discount) * good.price / 100).toFixed(2);
        let oldPrice;
        miniMarketGame.gameMode == 1 ? oldPrice = good.price.toFixed(0) : oldPrice = good.price.toFixed(2);
        $(".good-card__grid-price span.old").html(`${oldPrice} UAH`);
        $(".good-card__grid-price span.new").html(`${price} UAH ${val}`);
        $(".good-card__grid-main-photo-discount").css("display", "flex");
        $(".good-card__grid-main-photo-discount").html(`- ${checkSale.discount} %`);
    } else {
        miniMarketGame.gameMode == 1 ? price = good.price.toFixed(0) : price = good.price.toFixed(2);
        $(".good-card__grid-price span.old").html("");
        $(".good-card__grid-price span.new").html(`${price} UAH ${val}`);
        $(".good-card__grid-main-photo-discount").css("display", "none");
        // $(".good-card__grid-main-photo-discount").html("")
    };

    
    $(".good-card__about-descr .good-card__about-text").html(`${good.descr}`);

    const checkFavourite = miniMarketGame.favouriteGood.find(function (el) {
        return el.id == String(good.id);
    });
    
    if (checkFavourite) {
        $(".favourite-heart").find("i").addClass("fas");
        $(".favourite-heart").attr("aria-label", "Убрать из избранного");
    } else {
        $(".favourite-heart").find("i").addClass("far");
        $(".favourite-heart").attr("aria-label", "Добавить в избранное");
    };    
    
    $(".good-card__grid-basketbtn, .good-card__buying-buy").addClass("dispFlex");

    const checkCart = miniMarketGame.cart.find(function (elem) {
        return elem.el.id == String(good.id);
    });

    if (!checkCart) {
        $(".good-card__grid-basketbtn_task").removeClass("dispFlex");
        $(".good-card__grid-basketbtn_action").removeClass("dispFlex");
    } else {
        $(".good-card__grid-basketbtn_task").removeClass("dispFlex");
        $(".good-card__grid-basketbtn_action").addClass("dispFlex");
    };

    
};

//---------------переход к товару---------------//
function goToGood(good) {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".market-page").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");

    window.scrollTo(0, 0);
    
    taskArr = miniMarketGame.createTask();
    goodsCardAdd(good);
    changePic();

};

function goToFavouriteGood(good) {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".favourite").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");

    window.scrollTo(0, 0);
    
    taskArr = miniMarketGame.createTask();
    goodsCardAdd(good);
    changePic();
};


$('.good-card__about-garant-paying .good-card__about-title').each(function() {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    const $target = $(this);

    $target.on("click", function() {
        const $targetBtn = $(this);
        const index = $targetBtn.attr('data-ind');

        $('.good-card__about-garant-paying .good-card__about-text_active').removeClass('good-card__about-text_active');

        const $tab = $(`[data-tab="${index}"]`);
        $tab.addClass('good-card__about-text_active');

        $('.good-card__about-garant-paying .good-card__about-title_active').removeClass('good-card__about-title_active');

        $targetBtn.addClass('good-card__about-title_active');

    });
});

////////////////////////////Корзина////////////////////////////

$(".nav-list__basket, .nav-list__link_basket, .footer__buyer-basket").on("click", function() {
    if (miniMarketGame.gameMode == 1) {
        $(".game-task__task-quest.task_level1:nth-child(5)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
        level1part5 = 1;
    };

    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".basket").toggleClass("dispFlex");
    if ($(".market-page").hasClass("dispFlex")) {
        $(".market-page").toggleClass("dispFlex")
    } else if ($(".good-card").hasClass("dispFlex")) {
        $(".good-card").toggleClass("dispFlex")
    } else if ($(".favourite").hasClass("dispFlex")) {
        $(".favourite").toggleClass("dispFlex")
    };

    // $(".market-page").toggleClass("dispFlex");
    $(".basket__onAccount-summa").html(`${miniMarketGame.onAccount.toFixed(2)} UAH`);
    $(".basket__result-summa-input").val("");
    $("#basket__enough-choose-list").val("");

    $(".basket h3").remove();

    window.scrollTo(0, 0);

    if (miniMarketGame.cart.length == 0) {
        $(".basket__block").append("<h3>Здесь будут находиться товары, которые Вы сможете приобрести. Не пора ли добавить несколько?</h3>");
        $(".basket__result, .basket__enough, .basket__buttons").removeClass("dispFlex");
    } else {
        buildCartGrid ();


        $(".basket__result, .basket__enough, .basket__buttons").addClass("dispFlex");
        $(".basket__block h3").remove();
        
        delCartItem();
    };
});


$(".modal-block_toCart-cartBtn").on("click", function() {
    if (miniMarketGame.gameMode == 1) {
        $(".game-task__task-quest.task_level1:nth-child(5)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
        level1part5 = 1;
    };

    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");
    
    $(".basket").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");
    $(".basket__onAccount-summa").html(`${miniMarketGame.onAccount.toFixed(2)} UAH`);
    $(".basket__result-summa-input").val("");
    $("#basket__enough-choose-list").val("");

    $.fancybox.close();
    if (miniMarketGame.cart.length == 0) {
        $(".basket__result, .basket__enough, .basket__buttons").removeClass("dispFlex");
        $(".basket__block").append("<h3>Здесь будут находиться товары, которые Вы сможете приобрести. Не пора ли добавить несколько?</h3>");
    } else {
        buildCartGrid ();


        $(".basket__result, .basket__enough, .basket__buttons").addClass("dispFlex");
        $(".basket__block h3").remove();
        
        delCartItem();
    };
});


$(".basket__back, .basket__buttons-return").on("click", function() {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".basket").toggleClass("dispFlex");
    $(".market-page").toggleClass("dispFlex");
    $(".basket__grid-col").remove();
    $(".good-card__grid-num").val("");
    $(".good-card__grid-count .good-card__grid-num").val("1");
    $(".basket__block h3").remove();

    window.scrollTo(0, 0);
});


function buildCartGrid () {
    $(".basket__grid-col").remove();
    $(".basket__hint-total").remove();
    $(".basket h3").remove();
    let totalSumm = 0;
    for (let i = 0; i < miniMarketGame.cart.length; i++) {
        $(".basket__grid").append(`<div class="basket__grid-col col-${i}"></div>`);
            
        $(`.basket__grid-col.col-${i}`).append(`<div class="basket__grid-item item-${i}"><div class="dark"></div><img src="${miniMarketGame.cart[i].el.pic[0]}" data-item="${miniMarketGame.cart[i].el.id}"></div>`);
        
        $(`.basket__grid-item.item-${i}`).addClass("hint--left");
        $(`.basket__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.cart[i].el.title}`);
        
        if ($(".change-game__color-select").val() == 2) {$(".dark").addClass("darkThemeImg")};

        let val = (miniMarketGame.cart[i].el.count == 1) ? "" : "/ " + miniMarketGame.cart[i].el.count + " " + miniMarketGame.cart[i].el.val;
        
        let price;

        let checkSale = miniMarketGame.saleGoods.find(function (el) {
            return  el.good.id == String(miniMarketGame.cart[i].el.id)
        });

        if (checkSale) {
            miniMarketGame.gameMode == 1 ? price = ((100 - checkSale.discount) * miniMarketGame.cart[i].el.price / 100).toFixed(0) : price = ((100 - checkSale.discount) * miniMarketGame.cart[i].el.price / 100).toFixed(2);
        } else {
            miniMarketGame.gameMode == 1 ? price = miniMarketGame.cart[i].el.price.toFixed(0) : price = miniMarketGame.cart[i].el.price.toFixed(2);
        };
        // miniMarketGame.gameMode == 1 ? price = miniMarketGame.cart[i].el.price.toFixed(0) : price = miniMarketGame.cart[i].el.price.toFixed(2);
            
        $(`.basket__grid-col.col-${i}`).append(`<div class="basket__grid-item-description"><div class="basket__grid-item-remove hint--top" aria-label="Удалить из корзины" data-item="${miniMarketGame.cart[i].el.id}"><i class="far fa-trash-alt"></i></div><div class='basket__grid-title'>${miniMarketGame.cart[i].el.title}</div>
        <div class='basket__grid-category'>Категория: ${miniMarketGame.cart[i].el.category}</div>
        <div class='basket__grid-code'>Код: ${miniMarketGame.cart[i].el.id}</div>
        <div class='basket__grid-price'>Цена: ${price} UAH ${val}</div>        
        <div class='basket__count'><div class="good-card__grid-count">
                                    <div class="good-card__grid-less hint--left" aria-label="Отнять"  onclick="this.nextElementSibling.stepDown()"><i class="fas fa-minus"></i></div>
                                    <input type="number" value="${miniMarketGame.cart[i].count}" min="1" max="99" step="1" readonly class="good-card__grid-num basket__count-num-${i}">
                                    <div class="good-card__grid-more hint--right" aria-label="Добавить" onclick="this.previousElementSibling.stepUp()"><i class="fas fa-plus"></i></div>
                                </div><div class='basket__count-x'>x</div><div class='basket__count-price'>${price} UAH</div><div class="basket__count-newString"></div><div class='basket__count-summ'>
                                <input type="number" value="" min="1" max="100000000" step="1" class="basket__count-input-${i}"><span> UAH</span></div></div>
        </div>`)
        
        $(`.basket__grid-col`).css('width', "100%");
        
        if (window.matchMedia("(min-width: 768px)").matches) {
            // if (document.documentElement.clientWidth > 767) {
            $(`.basket__grid-item-description`).css('width', "75%");
            $(`.basket__grid-item-description`).css('marginLeft', "20px");
            $(`.basket__grid-item`).css('width', "25%");
        // } else if ((document.documentElement.clientWidth <= 766) && (document.documentElement.clientWidth > 480)) {
        } else if ((window.matchMedia("(max-width: 767px)").matches) && (window.matchMedia("(min-width: 331px)").matches)) {
            $(`.basket__grid-item-description`).css('width', "60%");
            $(`.basket__grid-item-description`).css('marginLeft', "20px");
            $(`.basket__grid-item`).css('width', "40%");
        } else {
            $(`.basket__grid-item-description`).css('width', "100%");
            $(`.basket__grid-item-description`).css('marginLeft', "0");
            $(`.basket__grid-item`).css('width', "60%");
        };

        if (miniMarketGame.gameMode == 1) {
            if (window.matchMedia("(min-width: 981px)").matches) {
                // if (document.documentElement.clientWidth > 980) {

                $(`.basket__grid-col.col-${i} .basket__count-summ`).append(`<div class="basket__hint basket__hint-${i} hint--top" aria-label="Ответ: ${Number(price * ($(`.basket__count-num-${i}`).val()))}"><i class="far fa-question-circle"></i></div>`);
                $(".fas.fa-plus").on("click", function() {
                    
                    $(`.basket__hint-${i}`).attr("aria-label", `Ответ: ${(Number(price * ($(`.basket__count-num-${i}`).val()))) + Number(price)}`);  
                });
                $(".fas.fa-minus").on("click", function() {
                    if ($(`.basket__count-num-${i}`).val() > 1) {
                        $(`.basket__hint-${i}`).attr("aria-label", `Ответ: ${(Number(price * ($(`.basket__count-num-${i}`).val()))) - Number(price)}`);
                    };            
                });
            } else {
                $(`.basket__grid-col.col-${i} .basket__count-summ`).append(`<div class="basket__hint basket__hint-${i}"><i class="far fa-question-circle"></i></div>`);
                $(`.basket__hint-${i}`).on("click", function() {
                    $(`.basket__count-input-${i}`).attr("placeholder", `${Number(price * ($(`.basket__count-num-${i}`).val()))}`);

                    $(".fas.fa-plus").on("click", function() {
                        
                        $(`.basket__count-input-${i}`).attr("placeholder", `${(Number(price * ($(`.basket__count-num-${i}`).val()))) + Number(price)}`);
                    });
                    $(".fas.fa-minus").on("click", function() {
                        if ($(`.basket__count-num-${i}`).val() > 1) {
                            $(`.basket__count-input-${i}`).attr("placeholder", `${(Number(price * ($(`.basket__count-num-${i}`).val()))) - Number(price)}`);
                        };            
                    });
                    $(`.basket__count-input-${i}:placeholder`).css("color", "#16531896");

                });
                
            }
        
        };  
    };
    if (miniMarketGame.gameMode == 1) {$(".basket__result").append(`<div class="basket__hint-total hint--top" aria-label=""><i class="far fa-question-circle"></i></div>`)};

    
    if (miniMarketGame.gameMode == 2) {
        $(".fas.fa-plus").on("click", function() {
            if ((($(this).parent().siblings("input")).val() + 1) > 1) {
                $(".game-task__task-quest:nth-child(11)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
                level2part5 = 1;
            } else {
                $(".game-task__task-quest:nth-child(11)").find(".game-task__task-quest-text").css("textDecoration", "none");
                level2part5 = 0;
            };
        });

        $(".fas.fa-minus").on("click", function() {
            if ((($(this).parent().siblings("input")).val() - 1) > 1) {
                $(".game-task__task-quest:nth-child(11)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
                level2part5 = 1;
            } else {
                $(".game-task__task-quest:nth-child(11)").find(".game-task__task-quest-text").css("textDecoration", "none");
                level2part5 = 0;
            };
        });
    };

};



$(".basket__remove").on("click", function () {
    
    if (miniMarketGame.cart.length > 0) {
        $("[data-text='clearCart']").fancybox({
            "padding": 20,
            "width": 600,
            "overlayOpacity": 0.9,
            "overlayColor": '#f7f8fa',
            showCloseButton: true,
            modal: true,
            "height": "auto"
            
        });


        $(".modal-block_clearCart-yes").on("click", function() {
            $(".basket__grid-col").remove();
            $(".basket__hint-total").remove();
            $(".basket__block h3").remove();
            miniMarketGame.cart = [];
            $(".basket__result, .basket__enough, .basket__buttons").removeClass("dispFlex");
            $(".basket__block").append("<h3>Здесь будут находиться товары, которые Вы сможете приобрести. Не пора ли добавить несколько?</h3>");
            $.fancybox.close();
        });


        $(".modal-block_clearCart-no").on("click", function() {
            $.fancybox.close();
        });
    };
});


function delCartItem() {
    $(".basket__grid-item-remove").on("click", function () {
        miniMarketGame.cartRemove($(this).attr("data-item"));
        $(this).parent().parent().remove();

        if (miniMarketGame.cart.length == 0) {
            $(".basket__result, .basket__enough, .basket__buttons").removeClass("dispFlex");
            $(".basket__block").append("<h3>Здесь будут находиться товары, которые Вы сможете приобрести. Не пора ли добавить несколько?</h3>");
        };
    });
};


$(".last-step__buttons-return").on('click', function () {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".market-page").toggleClass("dispFlex");
    $(".last-step").toggleClass("dispFlex");
    window.scrollTo(0, 0);
});


$(".last-step__form-payForm-list").on("input",function () {
    if (($(".last-step__form-payForm-list").val() == "1") && (differance < 0)) {
        catHint("На счету не достаточно средств", ".basket__catHint");
        $(".last-step__form-payForm-list").val("0");
    };
    $(".last-step__form-payForm-list").css("color", "#000000");
});


$(".last-step__form-postService-list").on("input",function () {
    $(".last-step__form-postService-list").css("color", "#000000");
});


$(".last-step__buttons-continue").on('click', function () {
    
    if ($(".last-step__form-firstName-input").val() == "") {
        catHint("Введите имя", ".basket__catHint");
    } else if ($(".last-step__form-lastName-input").val() == "") {
        catHint("Введите фамилию", ".basket__catHint");
    } else if ($(".last-step__form-payForm-list").val() == "") {
        catHint("Выберите форму оплаты", ".basket__catHint");
    } else if ($(".last-step__form-postService-list").val() == "") {
        catHint("Выберите службу доставки", ".basket__catHint");
    } else if ($(".last-step__form-commit-area").val() == "") {
        catHint("Введите комментарии", ".basket__catHint");
    } else {
        if (miniMarketGame.gameMode == 1) {
            $(".game-task__task-quest.task_level1:nth-child(6)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
            level1part6 = 1;
        };

        if (miniMarketGame.gameMode == 2) {
            $(".game-task__task-quest:nth-child(12)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
            level2part6 = 1;
        };

        if (miniMarketGame.gameMode == 3) {
            if ($(".last-step__form-payForm-list").val() == 1) {
                $(".game-task__task-quest:nth-child(18)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
                level3part6 = 1;
            };
        };

        miniMarketGame.scoreLevel1 = level1part1 + level1part2 + level1part3 + level1part4 + level1part5 + level1part6;
        miniMarketGame.scoreLevel2 = level2part1 + level2part2 + level2part3 + level2part4 + level2part5 + level2part6;
        miniMarketGame.scoreLevel3 = level3part1 + level3part2 + level3part3 + level3part4 + level3part5 + level3part6;
        

        if ($(".last-step__form-payForm-list").val() == "1") {
            miniMarketGame.onAccount = differance;
        };
        $(".last-step").toggleClass("dispFlex");
        synth.cancel();
        $(".audio").each(function (i, el) {
            if (!el.paused) {
                el.pause();
            };
        });;
        $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

        let cash = '';
        if ($(".last-step__form-payForm-list").val() == 0) {
            cash = "наличные";
        } else if ($(".last-step__form-payForm-list").val() == 1) {
            cash = "безналичные";
        };

        let score = miniMarketGame.gameMode == 1 ? miniMarketGame.scoreLevel1 * 2 :  miniMarketGame.gameMode == 2 ? miniMarketGame.scoreLevel2 * 2 : miniMarketGame.scoreLevel3 * 2;

        
        $(".modal_container-lastStep-congrats").html(`Поздравляем!! Вы совершили покупку за ${cash} средства. На Вашем счету: ${miniMarketGame.onAccount.toFixed(2)} UAH`);
        $(".modal_container-lastStep-score").html(`За прохождение игры Вы заработали: ${score} очков из 12 возможных.`);

        $("[data-text='lastStep']").fancybox({
            "padding": 20,
            "width": 600,
            "overlayOpacity": 0.9,
            "overlayColor": '#f7f8fa',
            showCloseButton: true,
            modal: true,
            "height": "auto"
            
        });

        $(".game-task__task-quest").find(".game-task__task-quest-text").css("textDecoration", "none");
        level1part1 = 0;
        level1part2 = 0;
        level1part3 = 0;
        level1part4 = 0;
        level1part5 = 0;
        level1part6 = 0;
        level2part1 = 0;
        level2part2 = 0;
        level2part3task1 = 0;
        level2part3task2 = 0;
        level2part3 = 0;
        level2part4task1 = 0;
        level2part4task2 = 0;
        level2part4 = 0;
        level2part5 = 0;
        level2part6 = 0;
        level3part1 = 0;
        level3part2 = 0;
        level3part3task1 = 0;
        level3part3task2 = 0;
        level3part3 = 0;
        level3part4 = 0;
        level3part5 = 0;
        level3part6 = 0;
    };
});


$(".modal-block_lastStep-buy").on('click', function () {
    $.fancybox.close();
    $(".level").toggleClass("dispFlex");
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");
    miniMarketGame.operations = [];
    miniMarketGame.cart = [];
    // $(".level__difficulty-radio-btn-input").prop("checked", false);
    $(".level__operation-check-btn-input").prop("checked", false);
    $("#level__difficulty-radio-btn-01").prop("checked", true);

    for (let i = 2; i < 5; i++) {
        let check = $(`#level__operation-check-btn-0${i}`).parent('.level__operation-check-btn');
        if (check.hasClass("dispFlex")) {check.removeClass("dispFlex")}
    };
    
    potterCat(true);

    $(".sale__grid-col").remove();
    $(".basket__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();
    

    $(".last-step__form-firstName-input").val("");
    $(".last-step__form-lastName-input").val("");
    $(".last-step__form-payForm-list").val("");
    $(".last-step__form-postService-list").val("");
    $(".last-step__form-commit-area").val("");
    $(".basket__result-summa-input").css('backgroundColor', "#ffffff");

    $(".task__cat").toggleClass("dispFlex");
    $(".about__cat").toggleClass("dispFlex");

    $("body").css("overflowY", "hidden");


});


$(".modal-block_lastStep-play, .modal-lastStep-button").on('click', function () {
    $.fancybox.close();
    $(".prise").toggleClass("dispFlex");
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");
    
    let colCount;
    if (window.matchMedia("(min-width: 981px)").matches) {
        // if (document.documentElement.clientWidth > 980) {
        colCount = 6;
    // } else if ((document.documentElement.clientWidth <= 980) && (document.documentElement.clientWidth > 767)) {
    } else if ((window.matchMedia("(max-width: 980px)").matches) && (window.matchMedia("(min-width: 768px)").matches)) {
        colCount = 5;
    // }  else if ((document.documentElement.clientWidth <= 767) && (document.documentElement.clientWidth > 640)) {
    }  else if ((window.matchMedia("(max-width: 980px)").matches) && (window.matchMedia("(min-width: 641px)").matches)) {
        colCount = 3;
    } else {
        colCount = 2;
    }


    if (miniMarketGame.gameMode == 1) {
        $(".col__level-1").addClass("dispFlex");
    } else if (miniMarketGame.gameMode == 2) {
        $(".col__level-1").addClass("dispFlex");
        $(".col__level-2").addClass("dispFlex");
        
    } else if (miniMarketGame.gameMode == 3) {
        $(".col__level-1").addClass("dispFlex");
        $(".col__level-2").addClass("dispFlex");
        $(".col__level-3").addClass("dispFlex");
    };
    // console.log($(".prise__grid-col.dispFlex"))
    if ($(".prise__grid-col.dispFlex").length < colCount) {
        $(".prise__grid-col.dispFlex").css("width", `calc(100% / ${$(".prise__grid-col.dispFlex").length})`);
        $(".prise__grid-col.dispFlex").css("height", `calc(100% / ${$(".prise__grid-col.dispFlex").length})`);
    } else {
        $(".prise__grid-col.dispFlex").css("width", `calc(100% / ${colCount})`);
        $(".prise__grid-col.dispFlex").css("height", `calc(100% / ${colCount})`);
    };
});


$(".prise__block-entranse").on('click', function () {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".prise").toggleClass('dispFlex');
    $(".entranse").toggleClass('dispFlex');
    $(".entranse__password-pass").val("");
    $(".entranse__login-name").val("");
    
    $(".level__operation-check-btn-input").prop("checked", false);
    $("#level__difficulty-radio-btn-01").prop("checked", true);

    miniMarketGame.operations = [];
    miniMarketGame.cart = [];
    miniMarketGame.favouriteGood = [];
    miniMarketGame.onAccount = 5000;

    helloCat();

    $(".sale__grid-col").remove();
    $(".basket__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();
    $(".task__cat").toggleClass("dispFlex");
    $(".about__cat").toggleClass("dispFlex");
    $("body").css("overflowY", "hidden");

    returnToLightTheme();

    $(".change-game__color-select").val("1");
    if ($(".change-game__change-form").hasClass("dispFlex")) {
        $(".change-game__change-form").removeClass("dispFlex");
        $(".change-game__password").addClass("dispFlex");
    };
});

$(".prise__block-level").on('click', function () {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".prise").toggleClass('dispFlex');
    $(".level").toggleClass("dispFlex");
    miniMarketGame.operations = [];
    miniMarketGame.cart = [];
    
    $(".level__operation-check-btn-input").prop("checked", false);
    $("#level__difficulty-radio-btn-01").prop("checked", true);

    for (let i = 2; i < 5; i++) {
        let check = $(`#level__operation-check-btn-0${i}`).parent('.level__operation-check-btn');
        if (check.hasClass("dispFlex")) {check.removeClass("dispFlex")}
    };

    $(".level__difficulty-descript").removeClass('dispFlex');
    $(`.level__difficulty-descript[data-count="${$("#level__difficulty-radio-btn-01").attr("data-count")}"]`).addClass('dispFlex');
    
    potterCat(true);

    $(".sale__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();

    $(".task__cat").toggleClass("dispFlex");
    $(".about__cat").toggleClass("dispFlex");
    $("body").css("overflowY", "hidden");
});


$(".footer__info-pay").on("click", function () {
    if (miniMarketGame.gameMode == 1) {
        $(".game-task__task-quest.task_level1:nth-child(2)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
        level1part2 = 1;
    };
    
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $("[data-text='payAndDelivery']").fancybox({
        "padding": 20,
        "width": 600,
        "overlayOpacity": 0.9,
        "overlayColor": '#f7f8fa',
        showCloseButton: true,
        modal: true,
        "height": "auto"
        
    });
});

$(".footer__info-garant").on("click", function () {
    if (miniMarketGame.gameMode == 2) {
        $(".game-task__task-quest:nth-child(7)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
        level2part1 = 1;
    };

    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    
    $("[data-text='garanty']").fancybox({
        "padding": 20,
        "width": 600,
        "overlayOpacity": 0.9,
        "overlayColor": '#f7f8fa',
        showCloseButton: true,
        modal: true,
        "height": "auto"
        
    });
});

$(".footer__info-contact").on("click", function () {
    if (miniMarketGame.gameMode == 3) {
        $(".game-task__task-quest:nth-child(13)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
        level3part1 = 1;
    };

    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $("[data-text='contact']").fancybox({
        "padding": 20,
        "width": 600,
        "overlayOpacity": 0.9,
        "overlayColor": '#f7f8fa',
        showCloseButton: true,
        modal: true,
        "height": "auto"
    });
});



let differance = 0;

$(".basket__buttons-continue").on("click", function() {
    synth.cancel();
    $(".audio").each(function (i, el) {
        if (!el.paused) {
            el.pause();
        };
    });;
    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");

    $(".last-step__form-firstName-input").val("");
    $(".last-step__form-lastName-input").val("");
    $(".last-step__form-payForm-list").val("");
    $(".last-step__form-postService-list").val("");
    $(".last-step__form-commit-area").val("");
    $(".last-step__form-payForm-list").css("color", "#16531896");
    $(".last-step__form-postService-list").css("color", "#16531896");


    let count = 0;
    let result = 0;
    let totalSumm = 0;
        
    for (let i = 0; i < miniMarketGame.cart.length; i++) {
        let price;

        let checkSale = miniMarketGame.saleGoods.find(function (el) {
            return  el.good.id == String(miniMarketGame.cart[i].el.id)
        });

        if (checkSale) {
            miniMarketGame.gameMode == 1 ? price = ((100 - checkSale.discount) * miniMarketGame.cart[i].el.price / 100).toFixed(0) : price = ((100 - checkSale.discount) * miniMarketGame.cart[i].el.price / 100).toFixed(2);
        } else {
            miniMarketGame.gameMode == 1 ? price = miniMarketGame.cart[i].el.price.toFixed(0) : price = miniMarketGame.cart[i].el.price.toFixed(2);
        };

        let fullPrice = (price * ($(`.basket__count-num-${i}`).val())) == Number($(`.basket__count-input-${i}`).val())
            
        if ($(`.basket__count-input-${i}`).val() == "") {
            $(`.basket__count-input-${i}`).addClass("inputRed");
            $(`.basket__count-input-${i}`).removeClass("inputRedLight");
            count++; 
        } else if (fullPrice == false) {
            $(`.basket__count-input-${i}`).addClass("inputRedLight");
            result++;
        } else if (fullPrice == true) {
            $(`.basket__count-input-${i}`).removeClass("inputRedLight");
            if ($(`.basket__count-input-${i}`).val() != "") {
                $(`.basket__count-input-${i}`).removeClass("inputRed");
            };
        }

        totalSumm = Number(totalSumm) + (Number(price * ($(`.basket__count-num-${i}`).val())));
    };
    
    if (window.matchMedia("(min-width: 981px)").matches) {
        // if (document.documentElement.clientWidth > 980) {
        $(".basket__hint-total").attr("aria-label", `Ответ: ${Number(totalSumm)}`);
    } else {
        $(".basket__hint-total").on("click", function () {
            
            $(".basket__result-summa-input").attr("placeholder", `${Number(totalSumm)}`)
        });
    };  
        
    if (count != 0) {
        catHint("Есть не заполненные поля", ".basket__catHint");
        // alert(`Есть не заполненные поля: ${count}`);
    } else if (result != 0) {
        catHint("Есть результат с ошибкой", ".basket__catHint");
        // alert(`Есть результат с ошибкой: ${result}`);
    } else if ($(`.basket__result-summa-input`).val() == "") {
        $(`.basket__result-summa-input`).addClass("inputRed");
        catHint("Не введена итоговая сумма", ".basket__catHint");
        // alert(`Не введена итоговая сумма`);
    } else if ($(`.basket__result-summa-input`).val() != totalSumm) {
        $(`.basket__result-summa-input`).removeClass("inputRed");
        $(`.basket__result-summa-input`).addClass("inputRedLight");
        catHint("Не верная итоговая сумма", ".basket__catHint");
        // alert(`Не верная итоговая сумма`);
    } else if (($(`.basket__result-summa-input`).val() == totalSumm) && ($("#basket__enough-choose-list").val() == "")) {            
        $(`.basket__result-summa-input`).removeClass("inputRedLight")
        $(`.basket__result-summa-input`).removeClass("inputRed")
            
        catHint("Укажите достаточно ли средств на счету", ".basket__catHint");
        // alert(`Укажите достаточно ли средств на счету`)

    } else if ((parseFloat($(".basket__onAccount-summa").html()) - totalSumm >= 0) && ($("#basket__enough-choose-list").val() == "1")) {                
        catHint("Вы не верно указали достаточно ли средств", ".basket__catHint");
        // alert("Вы не верно указали достаточно ли средств на счету")
                            
    } else if ((parseFloat($(".basket__onAccount-summa").html()) - totalSumm < 0) && ($("#basket__enough-choose-list").val() == "0")) {
        catHint("Вы не верно указали достаточно ли средств", ".basket__catHint");
        // alert("Вы не верно указали достаточно ли средств на счету")
    } else {
        $(".basket").toggleClass("dispFlex");
        $(".last-step").toggleClass("dispFlex");
        window.scrollTo(0, 0);
  
    };

    differance = parseFloat($(".basket__onAccount-summa").html()) - totalSumm;

    if ($(".change-game").hasClass("dispFlex")) {$(".change-game").removeClass("dispFlex")};
    if ($(".change-game__good-form").hasClass("dispFlex")) {$(".change-game").removeClass("dispFlex")};
       
});


$(".change-game__password-btn").on('click', function () {
    if ($(".change-game__password-input").val() == passwordForChange) {
        $(".change-game__password").toggleClass("dispFlex");
        $(".change-game__change-form").toggleClass("dispFlex");
        if (window.matchMedia("(max-width: 767px)").matches) {
            $('.nav-list').css("paddingTop", "20px");
        };
    } else {
        $(".change-game__password-input").attr("placeholder", "введите верный пароль");
        $(".change-game__password-input").addClass("forgotToInput");
    };
});


$(".change-game__cash-input").on("input", function () {
    miniMarketGame.onAccount = Number($(this).val());
    $(".basket__onAccount-summa").html(`${miniMarketGame.onAccount.toFixed(2)} UAH`);
});





let firstPic, secondPic, thirdPic, categoryPic;

$(".change-game__good-form-pic-first-title").on('click', function () {

    let input = document.createElement('input');
    input.type = 'file';
    
    input.onchange = e => { 
    
        let file = e.target.files[0]; 
        
        let reader = new FileReader();
        reader.readAsDataURL(file); 
    
        reader.onload = readerEvent => {
            firstPic = readerEvent.target.result; 
            $(this).next("img").attr("src", `${firstPic}`)
        
            
        };
    };
    
    input.click();
});

$(".change-game__good-form-pic-second-title").on('click', function () {

    let input = document.createElement('input');
    input.type = 'file';
    
    input.onchange = e => { 
    
        let file = e.target.files[0]; 
        
        let reader = new FileReader();
        reader.readAsDataURL(file); 
    
        reader.onload = readerEvent => {
            secondPic = readerEvent.target.result; 
            $(this).next("img").attr("src", `${secondPic}`)
        
            
        };
    };
    
    input.click();
});

$(".change-game__good-form-pic-third-title").on('click', function () {

    let input = document.createElement('input');
    input.type = 'file';
    
    input.onchange = e => { 
    
        let file = e.target.files[0]; 
        
        let reader = new FileReader();
        reader.readAsDataURL(file); 
    
        reader.onload = readerEvent => {
            thirdPic = readerEvent.target.result; 
            $(this).next("img").attr("src", `${thirdPic}`)
        
            
        };
    };
    
    input.click();
});

$(".change-game__good-form-categ-pic-title").on('click', function () {

    let input = document.createElement('input');
    input.type = 'file';
    
    input.onchange = e => { 
    
        let file = e.target.files[0]; 
        
        let reader = new FileReader();
        reader.readAsDataURL(file); 
    
        reader.onload = readerEvent => {
            categoryPic = readerEvent.target.result; 
            $(this).next("img").attr("src", `${categoryPic}`)
        
            
        };
    };
    
    input.click();
});


$(".addGoodToMarket").on('click', function () {
    if ($(".change-game__good-form-title-input").val() == "") {
        $(".change-game__good-form-title-input").addClass("forgotToInput");
    } else if ($(".change-game__good-form-code-input").val() == "") {
        $(".change-game__good-form-code-input").addClass("forgotToInput");
    } else if ($(".change-game__good-form-category-input").val() == "") {
        $(".change-game__good-form-category-input").addClass("forgotToInput");
    } else {

        miniMarketGame.miniMarket.push(
            {
                title: `${$(".change-game__good-form-title-input").val()}`,
                id: `${$(".change-game__good-form-code-input").val()}`,
                category: `${$(".change-game__good-form-category-input").val()}`,
                categpic: `${categoryPic}`,
                pic: [`${firstPic}`, `${secondPic}`, `${thirdPic}`],
                price: Number($(".change-game__good-form-price-input").val()),
                count: Number($(".change-game__good-form-count-select").val()),
                val: `${$(".change-game__good-form-val-select").val()}`,
                descr: `${$(".change-game__good-form-descr-area").val()}`
            }
        );
    
        $(".change-game__good-form-title-input").val('').removeClass("forgotToInput");
        $(".change-game__good-form-code-input").val('').removeClass("forgotToInput");
        $(".change-game__good-form-category-input").val('').removeClass("forgotToInput");

        $(".change-game__good-form-title-input").val('');
        $(".change-game__good-form-code-input").val('');
        $(".change-game__good-form-category-input").val('');
        $(".change-game__good-form-price-input").val('');
        $(".change-game__good-form-count-select").val('');
        $(".change-game__good-form-val-select").val('');
        $(".change-game__good-form-descr-area").val('');
    
        if ($(".change-game__good-form").hasClass("dispFlex")) {
            $(".change-game__good-form").removeClass("dispFlex");
            $(".change-game__form").removeClass("change-game__form_clicked");                 
            // $(".change-game").removeClass("dispFlex");  
            $("body").css("overflowY", "visible");               
        };

        $(".goods__grid").remove();
        $(".slick-dots").remove();
        

        miniMarketGame.numCategory();

        $(".goods__grid-block").append('<div class="goods__grid"></div>');

        for (let i = 0; i < miniMarketGame.category.length; i++) {

            $(".goods__grid").append(`<div class='goods__grid-col col-${i}'></div>`);
            $(`.goods__grid-col.col-${i}`).append(`<div class='goods__grid-item item-${i}'></div>`);
            $(`.goods__grid-item.item-${i}`).append(`<div class='goods__grid-item-title'></div><div class='goods__grid-item-pict'><img src="${miniMarketGame.category[i].pic}" alt=""></div>`);


            ($(`.goods__grid-item.item-${i} .goods__grid-item-pict`).find("img")).css("objectFit", "fill");
            ($(`.goods__grid-item.item-${i} .goods__grid-item-pict`).find("img")).css("width", "100%");
            ($(`.goods__grid-item.item-${i} .goods__grid-item-pict`).find("img")).css("height", "100%");
            ($(`.goods__grid-item.item-${i} .goods__grid-item-pict`).find("img")).attr("data-text", `${miniMarketGame.category[i].cat}`);
            $(`.goods__grid-item.item-${i} .goods__grid-item-title`).text(`${miniMarketGame.category[i].cat}`);
            $(`.goods__grid-item.item-${i} .goods__grid-item-title`).attr("data-text", `${miniMarketGame.category[i].cat}`);

        };

        // ////////////////////////////Товары слайдер////////////////////////////

        $('.goods__grid').slick(
            {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
                dots: true,
                autoplay: true,
                autoplaySpeed: 1000,
                appendDots: $(".goods__dots"),
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                      }
                    },
                    {
                        breakpoint: 641,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                    }
                  ]
            }
        );

        let count = screenW();

        $("#goods-count").val(`${count}`);


    };


});

$(".change-game__exit-title").on('click', function () {
    $(".change-game__password").toggleClass("dispFlex");
    $(".change-game__change-form").toggleClass("dispFlex");
    
    $(".change-game__password-input").val("");
    $(".change-game__password-input").attr("placeholder", "введите пароль");
    $(".change-game__password-input").removeClass("forgotToInput");

    $(".change-game__good-form").toggleClass("dispFlex");
    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.nav-list').css("paddingTop", "20px");
    };

});

$(".change-game__good-title").on('click', function () {
    $(".change-game__good-form").toggleClass("dispFlex");
    if (!($(".change-game__form").hasClass("change-game__form_clicked"))) {
        $(".hideBody").toggleClass("dispFlex");
        $(".hideBody").toggleClass("change-game__form_clicked");
        let sel = $("body").children("div.dispFlex").outerHeight();
        $(".change-game__form_clicked").css("height", `${sel}px`);

    };
});

$(".change-game__color-select").on('input', function () {
    if ($(this).val() == 2) {
        // $("body").css("backgroundImage", "url('../img/back_dark.jpg'");
        $("body").css("backgroundImage", "url('../img/back-dark.jpeg'");

        $(".button").addClass("darkThemeHover");
        
        $(".level__form").addClass("darkTheme");
        $(".level__form-item").addClass("darkTheme");
        
        $(".market-page").addClass("darkTheme");
        $(".goods__grid-item-title").addClass("darkTheme");
        $(".goods__grid-item-title").addClass("darkThemeBefore");
        $(".dark").addClass("darkThemeImg");
        $(".sale__grid-item, .good-card__grid-main-photo, .good-card__grid-change-li").css("position", 'relative');
        $(".goods__grid-item-pict").addClass("darkThemeAfter");
        $(".modal-block").addClass("darkThemeModal");
        $(".change-game__form").addClass("darkThemeModal");
        $(".change-game__form").addClass("darkThemeMainColor");
        $(".change-game__good-form").addClass("darkThemeModal");
        $(".change-game__good-form").addClass("darkThemeMainColor");
        $(".hideBody").addClass("darkThemeModal");
        $(".contact__text p + p").addClass("darkThemeMainColorRed");
        
        $(".good-card_container").addClass("darkTheme");

        $(".favourite__block").addClass("darkTheme");

        $(".basket__block").addClass("darkTheme");
        $(".good-card__grid-change-li").addClass("darkThemeAfter");
        
        $(".last-step__block").addClass("darkTheme");

        $(".prise__block").addClass("darkTheme");

        $("[class$='__hint']").addClass("darkThemeHint");

    } else if ($(this).val() == 1) {
        
        returnToLightTheme();
    }
});

function returnToLightTheme() {
    $("body").css("backgroundImage", "url('../img/back.jpg'");

        // if ($(".button").hasClass("darkThemeHover")) {$(".button").removeClass("darkThemeHover")};
        
        // if ($(".level__form").hasClass("darkTheme")) {$(".level__form").removeClass("darkTheme")};
        // if ($(".level__form-item").hasClass("darkTheme")) {$(".level__form-item").removeClass("darkTheme")};
        
        // if ($(".market-page").hasClass("darkTheme")) {$(".market-page").removeClass("darkTheme")};
        // if ($(".goods__grid-item-title").hasClass("darkTheme")) {$(".goods__grid-item-title").removeClass("darkTheme")};
        // if ($(".goods__grid-item-title").hasClass("darkThemeBefore")) {$(".goods__grid-item-title").removeClass("darkThemeBefore")};
        // if ($(".dark").hasClass("darkThemeImg")) {$(".dark").removeClass("darkThemeImg")};
        // if ($(".goods__grid-item-pict").hasClass("darkThemeAfter")) {$(".goods__grid-item-pict").removeClass("darkThemeAfter")};
        // if ($(".modal-block").hasClass("darkThemeModal")) {$(".modal-block").removeClass("darkThemeModal")};
        // if ($(".change-game__form").hasClass("darkThemeModal")) {$(".change-game__form").removeClass("darkThemeModal")};
        // if ($(".change-game__form").hasClass("darkThemeMainColor")) {$(".change-game__form").removeClass("darkThemeMainColor")};
        // if ($(".change-game__good-form").hasClass("darkThemeModal")) {$(".change-game__good-form").removeClass("darkThemeModal")};
        // if ($(".change-game__good-form").hasClass("darkThemeMainColor")) {$(".change-game__good-form").removeClass("darkThemeMainColor")};
        // if ($(".hideBody").hasClass("darkThemeModal")) {$(".hideBody").removeClass("darkThemeModal")};
        // if ($(".contact__text p + p").hasClass("darkThemeMainColorRed")) {$(".contact__text p + p").removeClass("darkThemeMainColorRed")};
        
        // if ($(".good-card_container").hasClass("darkTheme")) {$(".good-card_container").removeClass("darkTheme")};

        // if ($(".favourite__block").hasClass("darkTheme")) {$(".favourite__block").removeClass("darkTheme")};

        // if ($(".basket__block").hasClass("darkTheme")) {$(".basket__block").removeClass("darkTheme")};
        // if ($(".good-card__grid-change-li").hasClass("darkThemeAfter")) {$(".good-card__grid-change-li").removeClass("darkThemeAfter")};
        
        // if ($(".last-step__block").hasClass("darkTheme")) {$(".last-step__block").removeClass("darkTheme")};

        // if ($(".prise__block").hasClass("darkTheme")) {$(".prise__block").removeClass("darkTheme")};

        // if ($("[class$='__hint']").hasClass("darkThemeHint")) {$("[class$='__hint']").removeClass("darkThemeHint")};

    $(".darkTheme").removeClass('darkTheme');
    $(".darkThemeModal").removeClass('darkThemeModal');
    $(".darkThemeMainColor").removeClass('darkThemeMainColor');
    $(".darkThemeMainColorRed").removeClass('darkThemeMainColorRed');
    $(".darkThemeHover").removeClass('darkThemeHover');
    $(".darkThemeText").removeClass('darkThemeText');
    $(".darkThemeHint").removeClass('darkThemeHint');
    $(".darkThemeBefore").removeClass('darkThemeBefore');
    $(".darkThemeAfter").removeClass('darkThemeAfter');
    $(".darkThemeImg").removeClass('darkThemeImg');
    $(".darkThemePlHolder").removeClass('darkThemePlHolder');
    $(".change-game__color-select").val("1");
};


// TODO enter для входов
