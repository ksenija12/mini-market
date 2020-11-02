////////////////////////////Игра////////////////////////////

let miniMarketGame = {
    miniMarket: MOCK,
    discaunt: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    goodsInSale: 8,
    rndDiscaunt: [],
    saleGoods: [],
    notSale: [],
    findGood: [],
    category: [],
    clickedCategory: [],
    start: function () {
        this.rndDiscaunt = this.randomDiscaunt();
        this.saleGoods = this.mainSale();
    },
    randomDiscaunt: function () {
        for (let i = 0; i < this.goodsInSale; i++) {
            this.rndDiscaunt.push(this.discaunt[getRandom(this.discaunt.length)]);
        };
        return this.rndDiscaunt;
    },
    mainSale: function() {
        let miniMarketPart = [];
        let notSale = this.miniMarket;
        for (let i = 0; i < this.goodsInSale; i++) {
            let randomGood = notSale[getRandom(notSale.length)];
            this.saleGoods[i] = {
                    good: randomGood,
                    discaunt: this.rndDiscaunt[i]
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
    }
};


////////////////////////////Случайный выбор////////////////////////////

function getRandom(max) {
    return Math.floor(Math.random() * ((max - 1) + 1));
};