let level1part1 = 0,  level1part2 = 0,  level1part3 = 0,  level1part4 = 0,  level1part5 = 0,  level1part6 = 0;
let level2part1 = 0,  level2part2 = 0,  level2part3task1 = 0, level2part3task2 = 0,  level2part3 = 0,  level2part4task1 = 0,  level2part4task2 = 0,  level2part4 = 0,  level2part5 = 0,  level2part6 = 0;
let level3part1 = 0,  level3part2 = 0,  level3part3task1 = 0, level3part3task2 = 0,  level3part3 = 0,  level3part4 = 0,  level3part5 = 0,  level3part6 = 0;




const ident = [
    {
        log: "admin",
        pass: 123,
        qwest: "Имя первого домашнего животного",
        answ: "бармалей"
    },
    {
        log: "mama",
        pass: 321,
        qwest: "Сколько улиток в аквариуме?",
        answ: "48"
    }
];


function catHint(text, sel) {
    $(sel).html(text);
    
    $(sel).animate({
        opacity: 1
    }, 600, function() {
        $(sel).delay(3000).animate({
            opacity: 0
        }, 600)
    })
};

function helloCat() {
    $('.entranse__cat').animate({
        top: "-82px"
    }, 600)
};

function buyCat(form) {
    $('.entranse__cat').animate({
        top: "0"
    }, 600, function() {
        $('.entranse').toggleClass('dispFlex');
        $(form).toggleClass('dispFlex');
        if (form == ".forgot") {
            helloBaloonCat();
        } else if (form == ".registration") {
            detectiveCat();
        };
    })
};

function helloBaloonCat() {
    $('.forgot').animate({
        top: '+50vh'
    }, 1500)
};

function buyBaloonCat(form) {
    $('.forgot').animate({
        top: '-50vh'
    }, 1500, function() {
        $('.forgot').toggleClass('dispFlex');
        $('.level').toggleClass('dispFlex');
        
    })
};

function detectiveCat() {
    $('.registration__cat1').animate({
        left: '80%',
    }, 9000, function() {
        $('.registration__cat1').css('visibility', 'hidden');
        $('.registration__cat2').css('visibility', 'visible');
        $('.registration__cat2').css('left', '80%');
        $('.registration__cat2').animate({
            left: '0',
        }, 9000, function(){
            $('.registration__cat2').css('visibility', 'hidden');
            $('.registration__cat1').css('visibility', 'visible');
            $('.registration__cat1').css('left', '0');
            detectiveCat();
        })
        
    })
};

let time = document.documentElement.clientWidth / 300 * 1000;

function potterCat(text) {
    let bool = text;
    if ( bool == true) {
        // $('.level__cat1').css("left", "calc( 100% - 160px )");
        $('.level__cat1').addClass("scale");
        $('.level__cat1').delay(1000).animate({
            left: '0',
        }, time, function () {
            $('.level__cat1').removeClass("scale");
            $('.level__cat1').addClass("scale0");
            
            $('.level__cat2').css("right", "calc( 100% - 180px )");
            $('.level__cat2').removeClass("scale0");
            $('.level__cat2').addClass("scale");
            $('.level__cat2').delay(1000).animate({
                right: "0"
            }, time, function(){
                $('.level__cat2').removeClass("scale");
                $('.level__cat2').addClass("scale0");
                $('.level__cat1').css("left", "calc( 100% - 180px )");
                $('.level__cat1').removeClass("scale0");
                potterCat(true);
            });
        });
    };
    if (bool == false) {
        return false
    };
};


function screenW () {
    // let count = document.documentElement.clientWidth > 980 ? 5 : document.documentElement.clientWidth > 640 ? 4 : document.documentElement.clientWidth > 480 ? 3 : 2
    let count = window.matchMedia("(min-width: 981px)").matches ? 5 : window.matchMedia("(min-width: 641px)").matches ? 4 : window.matchMedia("(min-width: 481px)").matches ? 3 : window.matchMedia("(min-width: 331px)").matches ? 2 : 1
    return count;
    return count;
};



$(".modal_button").on("click", function () {
    $.fancybox.close();
    $(".modal-block").css("display", "none");
    $(".fancybox-container").css("display", "none");
});


//---------------отменяем клики---------------//
$(".alert").on("click", function () {
    e.stopPropagation();
    e.preventDefault();
});



/////////////////////////////about/////////////////////////////



$(".about__cat").on("click", function() {

    let timerText, intervalText, timerWave;

    // $(".about-descr").css("display", "flex");
    $(".about-descr").toggleClass("about-descr_animation");

    clearTimeout(timerText);
    clearTimeout(timerWave);
    clearInterval(intervalText);

    if ($(".about-descr").find("span")) {$(".about-descr").find("span").remove()};

    $(".wave").css("animation", "none");
    
    if (!($(".about-descr").hasClass("about-descr_animation"))) {
        $(".about-descr").fadeOut(600);
    } else {
        $(".about-descr").show(1000);

        //---------------text---------------//
        
        let wrapper = document.querySelector(".wrapper");
        let wrapperDiv = document.querySelectorAll(".wrapper div");
        let text = document.querySelectorAll(".text");
        
        let length = 0;
        $(".text").css("display", "none")
        for (let j = 0; j < text.length; j++) {
            let textCont = text[j].textContent;

            let time;

            if (j == 0) {
                length += (text[j].textContent).length;
            } else {
                length += (text[j-1].textContent).length;
            };

            time =  1000 + (length * 10);
        
            for (let i = 0; i < textCont.length; i++) {
                
                
                (function(i) {
                    timerText = setTimeout(function() {
                        
                        let texts = document.createTextNode(textCont[i])
                        let span = document.createElement('span');
                        span.appendChild(texts);
                        
                        span.classList.add("wave");
                        wrapperDiv[j].appendChild(span);
                        
                    }, time + 10 * i);
                    
                    
                }(i));
                
            };
            intervalText = setInterval(function() {
                $(".wave").addClass("noWave").removeClass("wave");
                for (let i = 0; i < $(".noWave").length-1; i++) {
                    timerWave = setTimeout(function() {
                        document.querySelectorAll(".noWave")[i].classList.add("wave");
                        document.querySelector(".wave").classList.remove("noWave");

                    }, 1000 + 10*i);
                };
            }, 10000);     
        };
    };

});



/////////////////////////////task/////////////////////////////



$(".task__cat").on("click", function() {
    $(".game-task").toggleClass("game-task_animation");

    if ($(".game-task").hasClass("game-task_animation")) {
        window.scrollTo(0, 0);
        $(".game-task").show(1000);
        $("body").css("overflowY", "hidden");
    } else {
        $(".game-task").fadeOut(600);
        $("body").css("overflowY", "visible");
    };
});

$(".backform, .nav-list__link").on("click", function() {
    if ($(".game-task").hasClass("game-task_animation")) {
        $(".game-task").css("display", "none");
        $(".game-task").toggleClass("game-task_animation");

        if ($(this).hasClass("backform")) {
            $("body").css("overflowY", "hidden");
        } else if ($(this).attr("data-text")) {
            $("body").css("overflowY", "hidden");
        } else {
            $("body").css("overflowY", "visible");
        };
    };
});





/////////////////////////////entranse/////////////////////////////

$(document).ready(helloCat()); 

$('.entranse__password-show-hide').on('click', function(event) {
    const $el = $(this);
    
    if ($el.children("i").hasClass('fa-eye')) {
       $('.entranse__password-pass').attr('type', "text");
       $el.children("i").removeClass('fa-eye').addClass("fa-eye-slash");
    } else if ($el.children("i").hasClass('fa-eye-slash')) {
        $('.entranse__password-pass').attr('type', "password");
        $el.children("i").removeClass('fa-eye-slash').addClass("fa-eye");
    }
});

$('.registration__passw-show-hide1').on('click', function(event) {
    const $el = $(this);
    
    if ($el.children("i").hasClass('fa-eye')) {
       $('.registration__password-first').attr('type', "text");
       $el.children("i").removeClass('fa-eye').addClass("fa-eye-slash");
    } else if ($el.children("i").hasClass('fa-eye-slash')) {
        $('.registration__password-first').attr('type', "password");
        $el.children("i").removeClass('fa-eye-slash').addClass("fa-eye");
    }
});

$('.registration__passw-show-hide2').on('click', function(event) {
    const $el = $(this);
    
    if ($el.children("i").hasClass('fa-eye')) {
       $('.registration__password-second').attr('type', "text");
       $el.children("i").removeClass('fa-eye').addClass("fa-eye-slash");
    } else if ($el.children("i").hasClass('fa-eye-slash')) {
        $('.registration__password-second').attr('type', "password");
        $el.children("i").removeClass('fa-eye-slash').addClass("fa-eye");
    }
});


$('.button_entranse').on('click', function() {
    const login = $('.entranse__login-name').val();
    const password = $('.entranse__password-pass').val();
   

    if (!login) {
        catHint('Введите логин', '.entranse__hint');        
    } else if (!ident.find(el => el.log === login)) {
        catHint('Логин не найден', '.entranse__hint');
    } else if (!password) {
        catHint('Введите пароль', '.entranse__hint');
    } else if (String(ident.find(el => el.log === login).pass) !== password) {
        catHint('Пароль не верный', '.entranse__hint');
    } else {
        $("#level__difficulty-radio-btn-01").prop("checked", true);
        
        buyCat(".level");
        potterCat(true);
    };

    
    $("#level__operation-check-btn-02").parent('.level__operation-check-btn').removeClass("dispFlex");
    $("#level__operation-check-btn-03").parent('.level__operation-check-btn').removeClass("dispFlex");
    $("#level__operation-check-btn-04").parent('.level__operation-check-btn').removeClass("dispFlex");
        
});


/////////////////////////////forgot/////////////////////////////

$(".entranse__problem-forgot").on('click', function() {
    buyCat(".forgot");
    $(".forgot__login-name").val("");
    $("body").css("overflowY", "hidden");
});



$('.button_forgot-next').on('click', function() {
    const login = $('.forgot__login-name').val();
    if (!login) {
        catHint('Введите логин', '.forgot__hint');
    } else if (!ident.find(el => el.log === login)) {
        catHint('Логин не найден', '.forgot__hint');
    } else {
        $(".forgot__question").toggleClass('dispFlex');
        $(".forgot__answer").toggleClass('dispFlex');
        $(".forgot__title").css('display', 'none');
        $(".forgot__question-text").text(`${ident.find(el => el.log === login).qwest}`);
    };

});

$('.button_forgot-enter').on('click', function() {
    const login = $('.forgot__login-name').val();
    const answer = $('.forgot__login-answer').val();
    
    if (!answer) {
        catHint('Введите ответ', '.forgot__hint');
    } else if ((String(ident.find(el => el.log === login).answ)).toLowerCase() !== answer.toLowerCase()) {
        catHint('Ответ не верный', '.forgot__hint');
    } else {
        $(".level__operation-check-btn-input:checked").prop("checked", false);
        $("#level__difficulty-radio-btn-01").prop("checked", true);
        buyBaloonCat();

        potterCat(true);

    };
    $("body").css("overflowY", "visible");
});

$(".button_forgot-next-back").on("click", function() {
    $(".forgot").toggleClass('dispFlex');
    $(".entranse").toggleClass('dispFlex');
    helloCat();
    $("body").css("overflowY", "visible");
});

$(".button_forgot-enter-back").on("click", function() {
    $(".forgot__answer").toggleClass('dispFlex');
    $(".forgot__question").toggleClass('dispFlex');
});

/////////////////////////////registration/////////////////////////////

$(".entranse__problem-reg").on('click', function() {buyCat(".registration")});

$('.button_registration').on('click', function() {
    const login = $('.registration__login-name').val();
    const passwordFirst = $('.registration__password-first').val();
    const passwordSecond = $('.registration__password-second').val();
    const question = $('.registration__qwestion').val();
    const answer = $('.registration__answer').val();

    if (!login) {
        catHint('Введите логин', '.registration__hint1');
    } else if (ident.find(el => el.log === login)) {
        catHint('Логин занят', '.registration__hint1');
    } else if (!passwordFirst) {
        catHint('Введите пароль', '.registration__hint2');
    } else if (!passwordSecond) {
        catHint('Повторите пароль', '.registration__hint3');
    } else if (passwordFirst !== passwordSecond) {
        catHint('Пароли не совпадают', '.registration__hint3');
    } else if (!question) {
        catHint('Введите секретный вопрос', '.registration__hint4');
    } else if (!answer) {
        catHint('Введите ответ', '.registration__hint5');
    } else {
        ident.push({
            log: login,
            pass: passwordFirst,
            qwest: question,
            answ: answer
        });

        $('.registration').toggleClass('dispFlex');
        $('.entranse').toggleClass('dispFlex');

        helloCat();
        $('.registration__cat1').stop();
        $('.registration__cat2').stop();

    };
});

$(".button_registration-back").on("click", function() {
    $(".registration").toggleClass('dispFlex');
    $(".entranse").toggleClass('dispFlex');
    $('.registration__cat1').stop();
    $('.registration__cat2').stop();
    helloCat();
});


/////////////////////////////level/////////////////////////////

$('.level__difficulty-radio-btn-input').on('input', function() {
    $(".level__operation-check-btn").removeClass('dispFlex');
    $(".level__operation-check-btn-input:checked").prop("checked", false);

    $('.level__difficulty-radio-btn-input').each(function(i, el) {
        if ($(el).prop('checked')) {
            if ($(el).attr('data-count') == 1) {
                $('#level__operation-check-btn-01').parent('.level__operation-check-btn').addClass('dispFlex');
            } else if ($(el).attr('data-count') == 2) {
                $('#level__operation-check-btn-01').parent('.level__operation-check-btn').addClass('dispFlex');
                $('#level__operation-check-btn-02').parent('.level__operation-check-btn').addClass('dispFlex');
            } else if ($(el).attr('data-count') == 3) {
                $('#level__operation-check-btn-01').parent('.level__operation-check-btn').addClass('dispFlex');
                $('#level__operation-check-btn-02').parent('.level__operation-check-btn').addClass('dispFlex');
                $('#level__operation-check-btn-03').parent('.level__operation-check-btn').addClass('dispFlex');
                $('#level__operation-check-btn-04').parent('.level__operation-check-btn').addClass('dispFlex');
            };
        

            $(".level__difficulty-descript").removeClass('dispFlex');
            $(`.level__difficulty-descript[data-count="${$(el).attr("data-count")}"]`).addClass('dispFlex');
        };
    });

});



let symbol = [];
let level;
let taskArr;

$(".button_level").on("click", function() {
    window.scrollTo(0, 0);
    
    if (!$(".level__operation-check-btn-input:checked").length) {
        if (window.matchMedia("(min-width: 331px)").matches) {
            catHint('Выберите операцию для примеров ( +, -, *, / )', '.level__hint');
        } else {
            $(".level__operation .level__title").css("color", "rgb(255, 0, 0)")
        };
    } else {
        symbol = [];
        $("#level__operation-check-btn-01").val("+");
        $("#level__operation-check-btn-02").val("-");
        $("#level__operation-check-btn-03").val("*");
        $("#level__operation-check-btn-04").val("/");
        $(".level__operation .level__title").css("color", "rgb(0, 0, 0)")
        
        $(".level__operation-check-btn-input:checked").each(function(i, el) {
            symbol.push($(el).val());
        });

        level = $(".level__difficulty-radio-btn-input:checked").attr('data-count');
        
        $('.level__cat1').stop(true, true);
        $('.level__cat2').stop(true, true);

        potterCat(false);

        $('.level').toggleClass('dispFlex');
        $('.market-page').toggleClass('dispFlex');
        $('body').css('overflow-y', "visible");

        $(".market-page__title-img").css("height", "");
        // $(".backform").css("top","20px");

        $(".main-block__findarea-input").val("");      

        $(".level__difficulty-radio-btn-input").prop("checked", "false");

        

        ////////////////////////////Акции////////////////////////////  
          
        miniMarketGame.operations = symbol;
        miniMarketGame.gameMode = level;

        miniMarketGame.start();
        const gameMainSale = miniMarketGame.saleGoods;
        

        for (let i = 0; i < 8; i++) {

            $(".sale__grid").append(`<div class="sale__grid-col col-${i}">`);

            $(`.sale__grid-col.col-${i}`).append('<div class="sale__grid-item-container"><div class="sale__grid-item"></div></div>');

            $(`.sale__grid-col.col-${i} .sale__grid-item`).append(`<div class="sale__grid-item_back" data-item="${gameMainSale[i].good.id}">
            <img src="${gameMainSale[i].good.pic[0]}" alt="">
            <div class="item_back-discount">- ${gameMainSale[i].discount} %</div>
            <div class="item_back-good">${gameMainSale[i].good.title}</div></div><div class="sale__grid-item_face">
            <img src="${gameMainSale[i].good.categpic}" alt="">
            <div class="item_back-discount">- ${gameMainSale[i].discount} %</div>
            <div class="item_face-category">${gameMainSale[i].good.category}</div></div>`);

            ($(`.sale__grid-col.col-${i}`).find("img")).css("objectFit", "fill");
            ($(`.sale__grid-col.col-${i}`).find("img")).css("width", "100%");
            ($(`.sale__grid-col.col-${i}`).find("img")).css("height", "100%");
          
        };

        
        $(".sale__grid-col").on("click", function() {
            if (miniMarketGame.gameMode == 1) {
                $(".game-task__task-quest.task_level1:nth-child(3)").find(".game-task__task-quest-text").css("textDecoration", "line-through");
                level1part3 = 1;
            };

            if (miniMarketGame.gameMode == 2) {
                level2part4task1 = 1;
            };

            const good = miniMarketGame.selectedGood(($(this).find(".sale__grid-item_back")).attr("data-item"));
                                       
            goToGood(good);
        });

        ////////////////////////////Товары////////////////////////////
        
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

        }

        ////////////////////////////Товары слайдер////////////////////////////

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
        // $("#goods-count").val("5");
                        
        //---------------подсказки---------------//


        $(".description_level-1").removeClass("dispFlex");
        $(".description_level-2").removeClass("dispFlex");
        $(".main-block__descr").css("visibility", "hidden");
        $(".game-task__task-quest").removeClass("dispFlex");
        
        if (miniMarketGame.gameMode == "1") {
            $(".description_level-1").addClass("dispFlex");
            $(".main-block__descr").css("visibility", "visible");
            $(".game-task__task-quest.task_level1").addClass("dispFlex");

        } else if (miniMarketGame.gameMode == "2") {
            $(".description_level-2").addClass("dispFlex");
            $(".main-block__descr").css("visibility", "visible");
            $(".game-task__task-quest.task_level2").addClass("dispFlex");


        } else if (miniMarketGame.gameMode == "3") {
            $(".game-task__task-quest.task_level3").addClass("dispFlex");

        };
    };

    
    $(".task__cat").toggleClass("dispFlex");
    $(".about__cat").toggleClass("dispFlex");

    $(".music").removeClass("fa-volume-mute").addClass("fa-volume-up");
});     
        


$(".button_level-back").on("click", function() {
    $(".level").toggleClass('dispFlex');
    $(".entranse").toggleClass('dispFlex');
    $(".entranse__password-pass").val("");
    $(".entranse__login-name").val("");

    symbol = [];
    miniMarketGame.cart = [];
    miniMarketGame.favouriteGood = [];
    miniMarketGame.onAccount = 5000;

    $(".level__operation-check-btn-input:checked").prop("checked", false);      
    $(".level__difficulty-radio-btn-input:checked").prop("checked", false);

    $('.level__cat1').stop(true, true);
    $('.level__cat2').stop(true, true);

    potterCat(false)
    
    helloCat();
});


 ////////////////////////////Озвучка////////////////////////////

let synth = window.speechSynthesis,
    message = new SpeechSynthesisUtterance();
 
 ($(".music")).on("click", function () {
    synth.cancel();
    
    if ($('.change-game__voice-select').val() == 1) {
        const audio = ($(this).parent()).next('.audio')[0];
     
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        };
        $(this).toggleClass("fa-volume-up").toggleClass("fa-volume-mute");
                
        return 
    } else if (($('.change-game__voice-select').val() == 2)) {

        $(this).toggleClass("fa-volume-up").toggleClass("fa-volume-mute");

        message.lang = 'ru-RU';
        message.rate = 1.6;
        message.text = `${$(this).parent().siblings(".description_level-1").find(".market-page__descript").text()}`;

        if ($(this).hasClass("fa-volume-mute")) {
            synth.speak(message);
        } else if ($(this).hasClass("fa-volume-up")) {
            synth.cancel();
        }
    }
});



$(".description_level-2").on("click", function () {

    $(this).parent().siblings(".description_level-1").toggleClass("dispFlex");
  
});