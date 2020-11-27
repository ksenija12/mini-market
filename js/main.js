/////////////////////////////market-page/////////////////////////////

$(".nav-list__favourite, .nav-list__basket").on("click", function () {
    
    $('.nav').removeClass('nav_active');
    $("body").css("overflowY", "visible");
})



//---------------назад к уровню---------------//

$(".backform").on("click", function() {
    symbol = [];
    $(".market-page").toggleClass('dispFlex');
    $(".level").toggleClass('dispFlex');
    $(".level__difficulty-radio-btn-input").prop("checked", false);
    $(".level__operation-check-btn-input").prop("checked", false);

    for (let i = 2; i < 5; i++) {
        let check = $(`#level__operation-check-btn-0${i}`).parent('.level__operation-check-btn');
        if (check.hasClass("dispFlex")) {check.removeClass("dispFlex")}
    };
    
    potterCat();

    $(".sale__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();
    $('.nav').removeClass('nav_active');
    $("body").css("overflowY", "visible");

});


//---------------navigation---------------//

$('.nav-toggle').on('click', function(){
    const $nav = $('.nav');
    const height = $('.header').outerHeight();

    $nav.toggleClass('nav_active');
    const $body = $('body');

    if ($nav.hasClass('nav_active')) {
        
        $nav.css("top", height);
        $body.css("overflow", "hidden");
    } else {
        $body.css("overflow-y", "visible");
    }



})


//---------------выход---------------//

$('[data-text="#anchor7"]').on("click", function() {
    $(".market-page").toggleClass('dispFlex');
    $(".entranse").toggleClass('dispFlex');

    $(".entranse__password-pass").val("");
    $(".entranse__login-name").val("");
    $(".level__difficulty-radio-btn-input").prop("checked", false);
    $(".level__operation-check-btn-input").prop("checked", false);

    miniMarketGame.operations = [];
    miniMarketGame.cart = [];
    miniMarketGame.favouriteGood = [];
    miniMarketGame.onAccount = 5000;

    helloCat();

    $(".sale__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();

    $('.nav').removeClass('nav_active');
    $("body").css("overflowY", "visible");
});

//---------------слик-меню---------------//

const $header = $('.header');

$(window).on('scroll', function() {
    const scrollTop = $('body, html').scrollTop();
    const offset = $('.sale').offset().top;

    if (scrollTop >= offset) {
        $header.addClass('header_sticky');

        $(".market-page__cat").css("display", "none");
        $(".market-page__title-img").css("height", "30");
        $(".nav-toggle").css("height", "30");
        $(".nav-toggle").css("wigth", "30");
        
        const height = $header.outerHeight();
        $header.css('top', -height);
        $header.animate({top:0}, 300);

        $(".backtostart").css("visibility","visible");
        $(".backform").css("top","5px");
        if (document.documentElement.clientWidth > 767) {$(".nav-list__link_sec").css("paddingTop","2px")};

    } else if (scrollTop < 30) {
        $header.removeClass('header_sticky');
        $(".backtostart").css("visibility","hidden");
        $(".market-page__cat").css("display", "block");
        $(".market-page__title-img").css("height", "");
        $(".nav-toggle").css("height", "25");
        $(".nav-toggle").css("width", "25");
        $(".backform").css("top","20px");
        if (document.documentElement.clientWidth > 767) {$(".nav-list__link_sec").css("paddingTop","7px")};
        
    };
});


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
            const coef = 18;
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

    $('.modal__grid-col').remove();

    
    if (!($(".main-block__findarea-input").val())) {
        miniMarketGame.findGood = miniMarketGame.miniMarket;
    };

    if (miniMarketGame.findGood.length) {
        for (let i = 0; i < miniMarketGame.findGood.length; i++) {
            $(".modal__grid").append(`<div class='modal__grid-col col-${i}'></div>`);
            $(`.modal__grid-col.col-${i}`).append(`<div class='modal__grid-item'><img src="${miniMarketGame.findGood[i].pic[0]}" alt="" data-item='${miniMarketGame.findGood[i].id}'></div>`);
            
            $(`.modal__grid-col.col-${i} .modal__grid-item`).addClass("hint--left");
            $(`.modal__grid-col.col-${i} .modal__grid-item`).attr("aria-label", `${miniMarketGame.findGood[i].title}`);
        }
    };

    $(".modal__grid-item").on("click", function() {
        const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
                    
        goToGood(good);

        $.fancybox.close();
    });
        
            
    $(".main-block__findarea-input").val("");
});


////////////////////////////Результат поиска////////////////////////////

$('[data-text="try"]').fancybox({
    "padding": 20,
    "width": 900,
    "height": 700,
    "overlayOpacity": 0.9,
    "overlayColor": '#f7f8fa',
    showCloseButton: true,
    modal: true,
    
    // чтоб модалка не закрывалась пока пустой input
    
    // beforeClose : function() {
        //     if ( $('.modal-window .mail-pole').val() == '' ) {
            //         return false;
            //     }
            // }
});
        

////////////////////////////Выбор категории////////////////////////////


//---------------показываем товары---------------//

function showGood(begin, end) {
    for (let i = ($("#goods-count").val() * begin - $("#goods-count").val()); i < end; i++) {
        $(".goods__list-grid").append(`<div class="goods__list-col col-${i}"></div>`);
        
        $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}"></div>`)
        let price;
        miniMarketGame.gameMode == 1 ? price = miniMarketGame.clickedCategory[i].price.toFixed(0) : price = miniMarketGame.clickedCategory[i].price.toFixed(2);
        $(`.goods__list-item.item-${i}`).append(`<img src="${miniMarketGame.clickedCategory[i].pic[0]}" alt="" data-item='${miniMarketGame.clickedCategory[i].id}'><div class="item_back-discount goods__list-price">${price} UAH</div>`)
        
        $(`.goods__list-item.item-${i}`).addClass("hint--left");
        $(`.goods__list-item.item-${i}`).attr("aria-label", `${miniMarketGame.clickedCategory[i].title}`);
        
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

        let count = document.documentElement.clientWidth > 980 ? 5 : 4

        $("#goods-count").append(`<option class="option-change" value="${count}">${count}</option>`);
        
        showGood(1, count);

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
                
                $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}"><img src="${sorted[i].pic[0]}" data-item="${sorted[i].id}"></div>`)
                
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

    let count = document.documentElement.clientWidth > 980 ? 5 : 4

    $("#goods-count").val(`${count}`);

    // $("#goods-count").val("5");

    $(".option-change").remove();

    $(".goods__list-pages").toggleClass("dispFlex");

    $(".goods__list-pages-num").remove();

    $("#goods-sort").children().remove();
   

});


////////////////////////////Смена количества товаров на странице////////////////////////////

$("#goods-count").on("input", function () {
    
    const $goodsHeight = $(".goods").outerHeight();

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
                
            $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}"><img src="${sorted[i].pic[0]}" data-item="${sorted[i].id}"></div>`)
                

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
    $(".favourite").toggleClass("dispFlex");
    $(".market-page").toggleClass("dispFlex");
    if (($(".favourite__choose-ico").find("i")).hasClass("fa-grip-lines")) {($(".favourite__choose-ico").find("i")).toggleClass("fa-grip-horizontal").toggleClass("fa-grip-lines");}

    $("h3").remove();

    window.scrollTo(0, 0);

    if (miniMarketGame.favouriteGood.length == 0) {
        $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
    } else {
        for (let i = 0; i < miniMarketGame.favouriteGood.length; i++) {
            $(".favourite__grid").append(`<div class="favourite__grid-col col-${i}"></div>`);
                
            $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item item-${i}"><img src="${miniMarketGame.favouriteGood[i].pic[0]}" data-item="${miniMarketGame.favouriteGood[i].id}"></div>
            <div class="favourite__grid-item-remove hint--top" aria-label="Удалить из избранного" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="far fa-trash-alt"></i></div>
            <div class="favourite__grid-item-cart hint--bottom" aria-label="Добавить в корзину" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="fas fa-shopping-basket"></i></div>`);
            
            $(`.favourite__grid-item.item-${i}`).addClass("hint--left");
            $(`.favourite__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.favouriteGood[i].title}`);
            
        };

        $(".favourite__grid-item").on("click", function() {
            $(".favourite__grid-col").remove();

            const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
            
            goToFavouriteGood(good);
        });

        $(".favourite__grid-item-remove").on("click", function () {
            miniMarketGame.favouriteGoodRemove($(this).attr("data-item"));
            $(this).parent().remove();

            if (miniMarketGame.favouriteGood.length == 0) {
                $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
            };
        });

        $(".favourite__grid-item-cart").on("click", function () {
            miniMarketGame.cartAdd($(this).attr("data-item"));
            // console.log(miniMarketGame.cart);
        });

    };

    

});


$(".favourite__choose-ico").on("click", function() {
    $(".favourite__grid-col").remove();
    $(this).find("i").toggleClass("fa-grip-horizontal").toggleClass("fa-grip-lines");

    if (($(this).find("i")).hasClass("fa-grip-horizontal")) {
        $(this).attr("aria-label", "Сетка");
        for (let i = 0; i < miniMarketGame.favouriteGood.length; i++) {
            $(".favourite__grid").append(`<div class="favourite__grid-col col-${i}"></div>`);
                
            $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item item-${i}"><img src="${miniMarketGame.favouriteGood[i].pic[0]}" data-item="${miniMarketGame.favouriteGood[i].id}"></div>
            <div class="favourite__grid-item-remove hint--top" aria-label="Удалить из избранного" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="far fa-trash-alt"></i></div>
            <div class="favourite__grid-item-cart hint--bottom" aria-label="Добавить в корзину" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="fas fa-shopping-basket"></i></div>`);
            
            $(`.favourite__grid-item.item-${i}`).addClass("hint--left");
            $(`.favourite__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.favouriteGood[i].title}`);
        };

        $(".favourite__grid-item").on("click", function() {
            $(".favourite__grid-col").remove();

            const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
            
            goToFavouriteGood(good);
        });

        $(".favourite__grid-item-remove").on("click", function () {
            miniMarketGame.favouriteGoodRemove($(this).attr("data-item"));
            $(this).parent().remove();

            if (miniMarketGame.favouriteGood.length == 0) {
                $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
            };
        });

        $(".favourite__grid-item-cart").on("click", function () {
            miniMarketGame.cartAdd($(this).attr("data-item"));
            // console.log(miniMarketGame.cart);
        });
    } else if (($(this).find("i")).hasClass("fa-grip-lines")) {
        $(this).attr("aria-label", "Список");
        for (let i = 0; i < miniMarketGame.favouriteGood.length; i++) {
            $(".favourite__grid").append(`<div class="favourite__grid-col col-${i}"></div>`);
                
            $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item item-${i}"><img src="${miniMarketGame.favouriteGood[i].pic[0]}" data-item="${miniMarketGame.favouriteGood[i].id}"></div>
            <div class="button favourite__grid-item-remove-list hint--top" aria-label="Удалить из избранного" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="far fa-trash-alt"></i></div>
            <div class="button favourite__grid-item-cart-list hint--top" aria-label="Добавить в корзину" data-item="${miniMarketGame.favouriteGood[i].id}"><i class="fas fa-shopping-basket"></i></div>`);
            
            $(`.favourite__grid-item.item-${i}`).addClass("hint--left");
            $(`.favourite__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.favouriteGood[i].title}`);

            let val = (miniMarketGame.favouriteGood[i].count == 1) ? "" : "/ " + miniMarketGame.favouriteGood[i].count + " " + miniMarketGame.favouriteGood[i].val;
            let price;
            miniMarketGame.gameMode == 1 ? price = miniMarketGame.favouriteGood[i].price.toFixed(0) : price = miniMarketGame.favouriteGood[i].price.toFixed(2);
            
            $(`.favourite__grid-col.col-${i}`).append(`<div class="favourite__grid-item-description"><div class='favourite__grid-title'>${miniMarketGame.favouriteGood[i].title}</div>
            <div class='favourite__grid-category'>Категория: ${miniMarketGame.favouriteGood[i].category}</div>
            <div class='favourite__grid-code'>Код: ${miniMarketGame.favouriteGood[i].id}</div>
            <div class='favourite__grid-price'>Цена: ${price} UAH ${val}</div>
            </div>`)
            $(`.favourite__grid-col`).css('width', "100%");
            if (document.documentElement.clientWidth > 980) {
                $(`.favourite__grid-item-description`).css('width', "75%")
                $(`.favourite__grid-item`).css('width', "25%");
            } else if ((document.documentElement.clientWidth <= 980) && (document.documentElement.clientWidth > 640)) {
                $(`.favourite__grid-item-description`).css('width', "70%")
                $(`.favourite__grid-item`).css('width', "30%");
            } else {
                $(`.favourite__grid-item-description`).css('width', "50%")
                $(`.favourite__grid-item`).css('width', "50%");
            };
            $(`.favourite__grid-item-description`).css('marginLeft', "20px");
           
        };

        $(".favourite__grid-item").on("click", function() {
            $(".favourite__grid-col").remove();

            const good = miniMarketGame.selectedGood(($(this).find("img")).attr("data-item"));
            
            goToFavouriteGood(good);
        });

        $(".favourite__grid-item-remove-list").on("click", function () {
            miniMarketGame.favouriteGoodRemove($(this).attr("data-item"));
            $(this).parent().remove();

            if (miniMarketGame.favouriteGood.length == 0) {
                $(".favourite__list").append("<h3>Здесь будут находиться избранные Вами товары. Не пора ли добавить несколько?</h3>");
            };
        });

        $(".favourite__grid-item-cart-list").on("click", function () {
            miniMarketGame.cartAdd($(this).attr("data-item"));
            // console.log(miniMarketGame.cart);
        });
    }

});

$(".favourite__back").on("click", function() {
    $(".favourite").toggleClass("dispFlex");
    $(".market-page").toggleClass("dispFlex");
    $(".favourite__grid-col").remove();
});

$(".favourite__remove").on("click", function () {
    
    if (miniMarketGame.favouriteGood.length > 0) {
        $("[data-text='clearFavourite']").fancybox({
            "padding": 20,
            "width": 600,
            "height": 180,
            "overlayOpacity": 0.9,
            "overlayColor": '#f7f8fa',
            showCloseButton: true,
            modal: true,
            
        });


        $(".modal-block_clearFavourite-yes").on("click", function() {
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
    $(".good-card__grid-change-li").remove();

    $(".good-card__grid-main-photo").append(`<img  class="good-card__grid-main-photo-pic" src="${good.pic[0]}" alt="${good.title}">`);
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[0]}" alt="${good.title}"></li>`);
    $(".good-card__grid-change-photo img").css("borderColor", "rgba(255, 0, 0, .5)");
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[1]}" alt="${good.title}"></li>`);
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[2]}" alt="${good.title}"></li>`);

    $(".good-card__grid-title span").html(`${good.title}`);
    $(".good-card__grid-category span").html(`${good.category}`);
    $(".good-card__grid-code span").html(`${good.id}`);

    let val = (good.count == 1) ? "" : "/ " + good.count + " " + good.val

    let price;
    miniMarketGame.gameMode == 1 ? price = good.price.toFixed(0) : price = good.price.toFixed(2);
    $(".good-card__grid-price span").html(`${price} UAH ${val}`);
    
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
    $(".market-page").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");

    window.scrollTo(0, 0);
    
    taskArr = miniMarketGame.createTask();
    goodsCardAdd(good);
    changePic();

};

function goToFavouriteGood(good) {
    $(".favourite").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");

    window.scrollTo(0, 0);
    
    taskArr = miniMarketGame.createTask();
    goodsCardAdd(good);
    changePic();
};


$('.good-card__about-garant-paying .good-card__about-title').each(function() {
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
    $(".basket").toggleClass("dispFlex");
    $(".market-page").toggleClass("dispFlex");
    $(".basket__onAccount-summa").html(`${miniMarketGame.onAccount.toFixed(2)} UAH`);
    $(".basket__result-summa-input").val("");
    $("#basket__enough-choose-list").val("");

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
    let totalSumm = 0;
    for (let i = 0; i < miniMarketGame.cart.length; i++) {
        $(".basket__grid").append(`<div class="basket__grid-col col-${i}"></div>`);
            
        $(`.basket__grid-col.col-${i}`).append(`<div class="basket__grid-item item-${i}"><img src="${miniMarketGame.cart[i].el.pic[0]}" data-item="${miniMarketGame.cart[i].el.id}"></div>`);
        
        $(`.basket__grid-item.item-${i}`).addClass("hint--left");
        $(`.basket__grid-item.item-${i}`).attr("aria-label", `${miniMarketGame.cart[i].el.title}`);
        
        let val = (miniMarketGame.cart[i].el.count == 1) ? "" : "/ " + miniMarketGame.cart[i].el.count + " " + miniMarketGame.cart[i].el.val;
        
        let price;
        miniMarketGame.gameMode == 1 ? price = miniMarketGame.cart[i].el.price.toFixed(0) : price = miniMarketGame.cart[i].el.price.toFixed(2);
            
        $(`.basket__grid-col.col-${i}`).append(`<div class="basket__grid-item-description"><div class="basket__grid-item-remove hint--top" aria-label="Удалить из корзины" data-item="${miniMarketGame.cart[i].el.id}"><i class="far fa-trash-alt"></i></div><div class='basket__grid-title'>${miniMarketGame.cart[i].el.title}</div>
        <div class='basket__grid-category'>Категория: ${miniMarketGame.cart[i].el.category}</div>
        <div class='basket__grid-code'>Код: ${miniMarketGame.cart[i].el.id}</div>
        <div class='basket__grid-price'>Цена: ${price} UAH ${val}</div>        
        <div class='basket__count'><div class="good-card__grid-count">
                                    <div class="good-card__grid-less hint--left" aria-label="Отнять"  onclick="this.nextElementSibling.stepDown()"><i class="fas fa-minus"></i></div>
                                    <input type="number" value="${miniMarketGame.cart[i].count}" min="1" max="99" step="1" readonly class="good-card__grid-num basket__count-num-${i}">
                                    <div class="good-card__grid-more hint--right" aria-label="Добавить" onclick="this.previousElementSibling.stepUp()"><i class="fas fa-plus"></i></div>
                                </div><div class='basket__count-x'>x</div><div class='basket__count-price'>${price} UAH</div><div class="basket__count-newString"></div><div class='basket__count-summ'>
                                <input type="number" value="" min="1" max="100000000" step="1" class="basket__count-input-${i}"> UAH</div></div>
        </div>`)
        
        $(`.basket__grid-col`).css('width', "100%");
        $(`.basket__grid-item-description`).css('width', "75%");
        $(`.basket__grid-item-description`).css('marginLeft', "20px");
        $(`.basket__grid-item`).css('width', "25%");

        if (miniMarketGame.gameMode == 1) {
            $(`.basket__grid-col.col-${i} .basket__count-summ`).append(`<div class="basket__hint basket__hint-${i} hint--top" aria-label="Ответ: ${Number(price * ($(`.basket__count-num-${i}`).val()))}"><i class="far fa-question-circle"></i></div>`);
            $(".fas.fa-plus").on("click", function() {
                $(`.basket__hint-${i}`).attr("aria-label", `Ответ: ${(Number(price * ($(`.basket__count-num-${i}`).val()))) + Number(price)}`);  
            });
            $(".fas.fa-minus").on("click", function() {
                if ($(`.basket__count-num-${i}`).val() > 1) {
                    $(`.basket__hint-${i}`).attr("aria-label", `Ответ: ${(Number(price * ($(`.basket__count-num-${i}`).val()))) - Number(price)}`);
                };            
            });
        
        };  
    };
    if (miniMarketGame.gameMode == 1) {$(".basket__result").append(`<div class="basket__hint-total hint--top" aria-label=""><i class="far fa-question-circle"></i></div>`)};

};

let differance = 0;

$(".basket__buttons-continue").on("click", function() {
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
        miniMarketGame.gameMode == 1 ? price = miniMarketGame.cart[i].el.price.toFixed(0) : price = miniMarketGame.cart[i].el.price.toFixed(2);
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

    $(".basket__hint-total").attr("aria-label", `Ответ: ${Number(totalSumm)}`);
        
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
    };

    differance = parseFloat($(".basket__onAccount-summa").html()) - totalSumm;
        
});    


$(".basket__remove").on("click", function () {
    
    if (miniMarketGame.cart.length > 0) {
        $("[data-text='clearCart']").fancybox({
            "padding": 20,
            "width": 600,
            "height": 180,
            "overlayOpacity": 0.9,
            "overlayColor": '#f7f8fa',
            showCloseButton: true,
            modal: true,
            
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
            $(".basket__block").append("<h3>Здесь будут находиться товары, которые Вы сможете приобрести. Не пора ли добавить несколько?</h3>");
        };
    });
};


$(".last-step__buttons-return").on('click', function () {
    $(".market-page").toggleClass("dispFlex");
    $(".last-step").toggleClass("dispFlex");
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
        if ($(".last-step__form-payForm-list").val() == "1") {
            miniMarketGame.onAccount = differance;
        };
        $(".last-step").toggleClass("dispFlex");

        let cash = '';
        if ($(".last-step__form-payForm-list").val() == 0) {
            cash = "наличные";
        } else if ($(".last-step__form-payForm-list").val() == 1) {
            cash = "безналичные";
        }
        
        $(".modal_container-lastStep-congrats").html(`Поздравляем!! Вы совершили покупку за ${cash} средства. На Вашем счету: ${miniMarketGame.onAccount.toFixed(2)} UAH`);

        $("[data-text='lastStep']").fancybox({
            "padding": 20,
            "width": 600,
            "height": 225,
            "overlayOpacity": 0.9,
            "overlayColor": '#f7f8fa',
            showCloseButton: true,
            modal: true,
            
        });
    };
});


$(".modal-block_lastStep-buy").on('click', function () {
    $.fancybox.close();
    $(".level").toggleClass("dispFlex");
    miniMarketGame.operations = [];
    miniMarketGame.cart = [];
    $(".level__difficulty-radio-btn-input").prop("checked", false);
    $(".level__operation-check-btn-input").prop("checked", false);

    for (let i = 2; i < 5; i++) {
        let check = $(`#level__operation-check-btn-0${i}`).parent('.level__operation-check-btn');
        if (check.hasClass("dispFlex")) {check.removeClass("dispFlex")}
    };
    
    potterCat();

    $(".sale__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();

    $(".last-step__form-firstName-input").val("");
    $(".last-step__form-lastName-input").val("");
    $(".last-step__form-payForm-list").val("");
    $(".last-step__form-postService-list").val("");
    $(".last-step__form-commit-area").val("");
    $(".basket__result-summa-input").css('backgroundColor', "#ffffff");

});


$(".modal-block_lastStep-play, .modal-lastStep-button").on('click', function () {
    $.fancybox.close();
    $(".prise").toggleClass("dispFlex");

    let colCount;
    if (document.documentElement.clientWidth > 980) {
        colCount = 6;
    } else if ((document.documentElement.clientWidth <= 980) && (document.documentElement.clientWidth > 767)) {
        colCount = 5;
    }  else if ((document.documentElement.clientWidth <= 767) && (document.documentElement.clientWidth > 640)) {
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
    $(".prise").toggleClass('dispFlex');
    $(".entranse").toggleClass('dispFlex');
    $(".entranse__password-pass").val("");
    $(".entranse__login-name").val("");
    $(".level__difficulty-radio-btn-input").prop("checked", false);
    $(".level__operation-check-btn-input").prop("checked", false);

    miniMarketGame.operations = [];
    miniMarketGame.cart = [];
    miniMarketGame.favouriteGood = [];
    miniMarketGame.onAccount = 5000;

    helloCat();

    $(".sale__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();
});

$(".prise__block-level").on('click', function () {
    $(".prise").toggleClass('dispFlex');
    $(".level").toggleClass("dispFlex");
    miniMarketGame.operations = [];
    miniMarketGame.cart = [];
    $(".level__difficulty-radio-btn-input").prop("checked", false);
    $(".level__operation-check-btn-input").prop("checked", false);

    for (let i = 2; i < 5; i++) {
        let check = $(`#level__operation-check-btn-0${i}`).parent('.level__operation-check-btn');
        if (check.hasClass("dispFlex")) {check.removeClass("dispFlex")}
    };
    
    potterCat();

    $(".sale__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();
});


$(".footer__info-pay").on("click", function () {
    $("[data-text='payAndDelivery']").fancybox({
        "padding": 20,
        "width": 600,
        "height": 750,
        "overlayOpacity": 0.9,
        "overlayColor": '#f7f8fa',
        showCloseButton: true,
        modal: true,
        
    });
});

$(".footer__info-garant").on("click", function () {
    $("[data-text='garanty']").fancybox({
        "padding": 20,
        "width": 600,
        "height": 500,
        "overlayOpacity": 0.9,
        "overlayColor": '#f7f8fa',
        showCloseButton: true,
        modal: true,
        
    });
});

$(".footer__info-contact").on("click", function () {
    $("[data-text='contact']").fancybox({
        "padding": 20,
        "width": 600,
        "height": 125,
        "overlayOpacity": 0.9,
        "overlayColor": '#f7f8fa',
        showCloseButton: true,
        modal: true,
        
    });
});
