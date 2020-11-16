////////////////////////////Игра////////////////////////////

let miniMarketGame = {
    miniMarket: MOCK,
    onAccount: 5000,
    discount: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    goodsInSale: 8,
    rndDiscount: [],
    saleGoods: [],
    notSale: [],
    findGood: [],
    category: [],
    clickedCategory: [],
    favouriteGood: [],
    cart: [],
    operations: [],
    gameMode: "",
    start: function () {
        this.rndDiscount = this.randomDiscount();
        this.saleGoods = this.mainSale();
    },
    randomDiscount: function () {
        for (let i = 0; i < this.goodsInSale; i++) {
            this.rndDiscount.push(this.discount[getRandom(1, this.discount.length)-1]);
        };
        return this.rndDiscount;
    },
    mainSale: function() {
        let miniMarketPart = [];
        let notSale = this.miniMarket;
        for (let i = 0; i < this.goodsInSale; i++) {
            let randomGood = notSale[getRandom(1, notSale.length)-1];
            this.saleGoods[i] = {
                    good: randomGood,
                    discount: this.rndDiscount[i]
                };

            let findItem = $.inArray(randomGood, notSale);
            notSale.splice(findItem, 1);

            miniMarketPart.push(randomGood)
        };

        this.notSale = notSale;

        this.miniMarket = miniMarketPart.concat(this.notSale);

        return this.saleGoods
    },
    find: function() {
        that = this;
        
        $(this.miniMarket).each(function (i, el) {
            if (String(el[$("#main-block__findarea-select").val()]).toLowerCase().indexOf($(".main-block__findarea-input").val().toLowerCase()) >= 0) {
                that.findGood.push(el);
            };
        });

        return this.findGood;
        
    },
    numCategory: function () {
        const firstCategory = [{cat: this.miniMarket[0].category, pic: this.miniMarket[0].categpic}];
        const that = this;
        
        $(this.miniMarket).each(function (i, el) {
            let findItem = firstCategory.find(function (elem) {
                return elem.cat == el.category
            })
            
            if (!findItem) {firstCategory.push({cat: el.category, pic: el.categpic})}
        })
        
        this.category = firstCategory;

        return this.category
    },
    selectedGood: function(code) {
        return this.miniMarket.find(function (el) {
            return el.id == code
        });
    },
    favouriteGoodAdd: function (code) {
        const elem = this.miniMarket.find(function (el) {
            return el.id == String(code);
        });

        this.favouriteGood.push(elem);

        return this.favouriteGood;
    },
    favouriteGoodRemove: function (code) {
        let index = this.favouriteGood.indexOf(this.favouriteGood.find(function (el) {
            return el.id == String(code);
        }));

        if (index > -1) this.favouriteGood.splice(index, 1);

        return this.favouriteGood
    },
    cartAdd: function (code) {
        const elem = this.miniMarket.find(function (el) {
            return el.id == String(code);
        });

        const elemInCart = this.cart.find(function (elem) {
            return elem.el.id == String(code);
        });

        if (elemInCart) {
            elemInCart.count = elemInCart.count + Number($(".good-card__grid-num").val())
        } else {
            this.cart.push({
                el: elem,
                count: Number($(".good-card__grid-num").val())
                });
        };

        // this.cart.push({
        //         el: elem,
        //         count: Number($(".good-card__grid-num").val())
        //         });

        return this.cart;
    },
    cartRemove: function (code) {
        let index = this.cart.indexOf(this.cart.find(function (elem) {
            return elem.el.id == String(code);
        }));

        if (index > -1) this.cart.splice(index, 1);

        return this.cart
    },
    createTask: function () {
        let max;
        let rnd = getRandom(1, this.operations.length)
        let symbol = this.operations[rnd-1];

        let a, b, c, first, second, answer;

        if (this.gameMode == 1) {
            max = 10;
            first = getRandom(1, max);
            second = getRandom(1, max);
            answer = first + second;
        } else if (this.gameMode == 2) {
            max = 100;
            if (symbol == "+") {
                first = getRandom(1, max);
                second = getRandom(1, max);
                answer = first + second;
            } else if (symbol == "-") {
                a = getRandom(1, max);
                b = getRandom(1, max);
                if (a > b) {
                    first = a;
                    second = b;
                } else if (a < b) {
                    first = b;
                    second = a;
                };
                answer = first - second;
            };
        } else if (this.gameMode == 3) {
            if (symbol == "+") {
                max = 100;
                first = getRandom(1, max);
                second = getRandom(1, max);
                answer = first + second;
            } else if (symbol == "-") {
                max = 100;
                a = getRandom(1, max);
                b = getRandom(1, max);
                if (a > b) {
                    first = a;
                    second = b;
                } else if (a < b) {
                    first = b;
                    second = a;
                };
                answer = first - second;
            } else if (symbol == "*") {
                max = 10;
                first = getRandom(1, max);
                second = getRandom(1, max);
                answer = first * second;
            } else if (symbol == "/") {
                max = 10;
                a = getRandom(1, max);
                b = getRandom(1, max);
                c = a * b;
                first = c;
                second = a;
                answer = b;
            };
        };
    
        return [first, symbol, second, answer];
    }
};


////////////////////////////Случайный выбор////////////////////////////

function getRandom(min, max) {
    return Math.floor(min + Math.random() * ((max - min) + 1));
};