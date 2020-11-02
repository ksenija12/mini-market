/////////////////////////////market-page/////////////////////////////

//---------------назад к уровню---------------//

$(".backform").on("click", function() {
    symbol = [];
    $(".market-page").toggleClass('dispFlex');
    $(".level").toggleClass('dispFlex');
    $("#level__difficulty-radio-btn-01").prop("checked", true);
    $(".level__operation-check-btn-input").prop("checked", false);
    
    potterCat();

    $(".sale__grid-col").remove();
    $(".goods__grid").remove();
    $(".slick-dots").remove();

});

//---------------выход---------------//

$('[data-text="#anchor7"]').on("click", function() {
    $(".market-page").toggleClass('dispFlex');
    $(".entranse").toggleClass('dispFlex');

    $("input").prop("checked", false);
    $("#level__difficulty-radio-btn-01").prop("checked", true);
    
    $(".entranse__login-name").val("");
    $(".entranse__password-pass").val("");
    helloCat();
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
        
        const height = $header.outerHeight();
        $header.css('top', -height);
        $header.animate({top:0}, 300);

        $(".backtostart").css("visibility","visible");
        $(".backform").css("top","5px");
        $(".nav-list__link_sec").css("paddingTop","2px");

    } else if (scrollTop < 30) {
        $header.removeClass('header_sticky');
        $(".backtostart").css("visibility","hidden");
        $(".market-page__cat").css("display", "block");
        $(".market-page__title-img").css("height", "");
        $(".backform").css("top","20px");
        $(".nav-list__link_sec").css("paddingTop","7px");
        
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

    const $body = $('body');

    // $('.nav').removeClass('nav_active');
    // $body.css("overflow", "");
});


//---------------меню 2---------------//


$(".nav-list__link_title").on('mouseover', function(){
    $(".nav-list__link_list").addClass( "visible" );
});

$(".nav-list__link_main").on('mouseout', function(){
    $(".nav-list__link_list").toggleClass( "visible" );
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
            $(`.modal__grid-col.col-${i}`).append(`<div class='modal__grid-item' data-item='${miniMarketGame.findGood[i].id}'></div>`);
            
            $(`.modal__grid-col.col-${i} .modal__grid-item`).css("backgroundImage", `url('${miniMarketGame.findGood[i].pic[0]}')`);
            $(`.modal__grid-col.col-${i} .modal__grid-item`).addClass("hint--left");
            $(`.modal__grid-col.col-${i} .modal__grid-item`).attr("aria-label", `${miniMarketGame.findGood[i].title}`);
        }
    };

    $(".modal__grid-item").on("click", function() {
        const good = miniMarketGame.selectedGood($(this).attr("data-item"));
                    
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
    
    // чтоб модалка не закрывалась пока пустой input
    
    // beforeClose : function() {
        //     if ( $('.modal-window .mail-pole').val() == '' ) {
            //         return false;
            //     }
            // }
});
        

////////////////////////////Раскрывающиеся списки footer////////////////////////////

$(".footer__title_info").on("click", function () {
    $(".footer__info").toggleClass("dispFlex");
    $(".footer__title_info").toggleClass("footer__title_active");
});

$(".footer__title_buyer").on("click", function () {
    $(".footer__buyer").toggleClass("dispFlex");
    $(".footer__title_buyer").toggleClass("footer__title_active");
});


////////////////////////////Выбор категории////////////////////////////

//---------------показываем товары---------------//

function showGood(begin, end) {
    for (let i = ($("#goods-count").val() * begin - $("#goods-count").val()); i < end; i++) {
        $(".goods__list-grid").append(`<div class="goods__list-col col-${i}"></div>`);
        
        $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}" data-item='${miniMarketGame.clickedCategory[i].id}'></div>`)
        
        $(`.goods__list-item.item-${i}`).css("backgroundImage", `url('${miniMarketGame.clickedCategory[i].pic[0]}')`);
        $(`.goods__list-item.item-${i}`).addClass("hint--left");
        $(`.goods__list-item.item-${i}`).attr("aria-label", `${miniMarketGame.clickedCategory[i].title}`);
        
        $(`.goods__list-item.item-${i}`).append(`<div class="item_back-discaunt goods__list-price">${miniMarketGame.clickedCategory[i].price.toFixed(2)} UAH</div>`);
    };

    $(".goods__list-item").on("click", function() {
        const good = miniMarketGame.selectedGood($(this).attr("data-item"));

                
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
        
        showGood(1, 5);

        //---------------Номера страниц---------------//        
        let goodsCountList;
        
        goodsCountList = miniMarketGame.clickedCategory.length % 5 == 0 ? miniMarketGame.clickedCategory.length / 5 - 1 : Math.floor(miniMarketGame.clickedCategory.length / 5)
        
        for (let i = 0; i < goodsCountList; i++) {
            $("#goods-count").append(`<option class="option-change" value="${5*i+10}">${5*i+10}</option>`)
            
            $(".goods__list-pages-numbers").append(`<div data-count="${i+2}" data-text="goods__list-pages" class="goods__list-pages-num">${i+2}</div>`)
        };

        $(".goods__list-pages").toggleClass("dispFlex");

        //---------------Выводим товары соответствующие странице---------------//
        $("[data-text='goods__list-pages']").on('click', function () {
            numPage = $(this).attr("data-count");
            
            $(".goods__list-col").remove();

            maxItem = 5 * numPage < miniMarketGame.clickedCategory.length ? 5 * numPage : miniMarketGame.clickedCategory.length;

            showGood(numPage, maxItem);
        });

        //---------------Выбор сортировки---------------//
        $("#goods-sort").append('<option value="" hidden>без сортировки</option><option value="1">от дешевых к дорогим</option><option value="2">от дорогих к дешевым</option><option value="3">от А до Я</option><option value="4">от Я до А</option>');

        //---------------Выводим товары соответствующие странице отсортированные---------------//
        $("#goods-sort").change( function () {
            
            numPage = $("[data-text='goods__list-pages']").attr("data-count");
            
            $(".goods__list-col").remove();

            let sorted;
            if ($("#goods-sort").val() == 1) {
                sorted =  miniMarketGame.clickedCategory.sort(function (a, b) { return a.price*a.count - b.price*b.count});
            } else if ($("#goods-sort").val() == 2) {
                sorted =  miniMarketGame.clickedCategory.sort(function (a, b) { return b.price*b.count - a.price*a.count});
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
            
            maxItem = 5 * numPage < sorted.length ? 5 * numPage : sorted.length;

            for (let i = (5 * numPage - 5); i < maxItem; i++) {
                $(".goods__list-grid").append(`<div class="goods__list-col col-${i}"></div>`);
                
                $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}" data-item="${sorted[i].id}"></div>`)
                
                $(`.goods__list-item.item-${i}`).css("backgroundImage", `url('${sorted[i].pic[0]}')`);
                $(`.goods__list-item.item-${i}`).addClass("hint--left");
                $(`.goods__list-item.item-${i}`).attr("aria-label", `${sorted[i].title}`);
                
                $(`.goods__list-item.item-${i}`).append(`<div class="item_back-discaunt goods__list-price">${sorted[i].price.toFixed(2)} UAH</div>`);
            };
        
                    
            $(".goods__list-item").on("click", function() {
                const good = miniMarketGame.selectedGood($(this).attr("data-item"));
            
                            
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

    $("#goods-count").val("5");

    $(".option-change").remove();

    $(".goods__list-pages").toggleClass("dispFlex");

    $(".goods__list-pages-num").remove();

    $("#goods-sort").children().remove();
   

});


////////////////////////////Смена количества товаров на странице////////////////////////////

$("#goods-count").on("input", function () {
    $(".goods__list-pages-num").remove();
    $(".goods__list-grid").remove();

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
        
        $(".goods__list-col").remove();

        maxItem = $("#goods-count").val() * numPage < miniMarketGame.clickedCategory.length ? $("#goods-count").val() * numPage : miniMarketGame.clickedCategory.length;

        showGood(numPage, maxItem)
    });

    //---------------Выводим товары соответствующие странице отсортированные---------------//
    $("#goods-sort").change( function () {
        let sorted;
        if ($("#goods-sort").val() == 1) {
            sorted =  miniMarketGame.clickedCategory.sort(function (a, b) { return a.price*a.count - b.price*b.count});
        } else if ($("#goods-sort").val() == 2) {
            sorted =  miniMarketGame.clickedCategory.sort(function (a, b) { return b.price*b.count - a.price*a.count});
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
        
        $(".goods__list-col").remove();
                
        maxItem = $("#goods-count").val() * numPage < sorted.length ? $("#goods-count").val() * numPage : sorted.length;

        // showSortedGood(numPage, maxItem);
        for (let i = (5 * numPage - 5); i < maxItem; i++) {
            $(".goods__list-grid").append(`<div class="goods__list-col col-${i}"></div>`);
                
            $(`.goods__list-col.col-${i}`).append(`<div class="goods__list-item item-${i}" data-item='${sorted[i].id}></div>`)
                
            $(`.goods__list-item.item-${i}`).css("backgroundImage", `url('${sorted[i].pic[0]}')`);
            $(`.goods__list-item.item-${i}`).addClass("hint--left");
            $(`.goods__list-item.item-${i}`).attr("aria-label", `${sorted[i].title}`);
                
            $(`.goods__list-item.item-${i}`).append(`<div class="item_back-discaunt goods__list-price">${sorted[i].price.toFixed(2)} UAH</div>`);
        };
        
        $(".goods__list-item").on("click", function() {
            const good = miniMarketGame.selectedGood($(this).attr("data-item"));
        
                        
            goToGood(good);
        });
    
    })
    
});



////////////////////////////Карта товара////////////////////////////

//---------------меняем картинку и текст---------------//

function changePic() {
    $(".good-card__grid-change-photo img").on("click", function () { 
        const elem = $(this);

        const pic = $(".good-card__grid-main-photo-pic");
        pic.attr("src", `${elem.attr("src")}`);
        pic.css("backgroundColor", "rgba(0,0,0,.1)");

        const container = $(".good-card__grid-main-photo");
        container.css("backgroundColor", `url(${pic.attr("src")})`);
    
    });
};

//---------------добавляем картинки---------------//

function goddsCardAdd(good) {
    $(".good-card__grid-main-photo").append(`<img  class="good-card__grid-main-photo-pic" src="${good.pic[0]}" alt="${good.title}">`);
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[0]}" alt="${good.title}"></li>`);
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[1]}" alt="${good.title}"></li>`);
    $(".good-card__grid-change-photo").append(`<li class="good-card__grid-change-li"><img  class="good-card__grid-change-photo-pic" src="${good.pic[2]}" alt="${good.title}"></li>`);

    $(".good-card__grid-title span").html(`${good.title}`);
    $(".good-card__grid-category span").html(`${good.category}`);

    let val = (good.count == 1) ? "" : "/ " + good.count + " " + good.val
    $(".good-card__grid-price span").html(`${good.price} UAH ${val}`);
    
    $(".good-card__about-descr .good-card__about-text").html(`${good.descr}`)
};

//---------------переход к товару---------------//
function goToGood(good) {
    $(".market-page").toggleClass("dispFlex");
    $(".good-card").toggleClass("dispFlex");

    window.scrollTo(0, 0);
    
    goddsCardAdd(good);
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

    })
})