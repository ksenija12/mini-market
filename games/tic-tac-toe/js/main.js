document.addEventListener('DOMContentLoaded', event => {
    'use strict';

    const game = {
        players: [],
        mode: '',
        currTurn: false, // false = 'x', true = 'o'
        area: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        endGame: false,
        
        setOptions: function() {
            this.mode = document.querySelector('.game-mode__input:checked').value;
            this.players[0] = document.querySelector('#player1').value;
            this.players[1] = document.querySelector('#player2').value;
        },

        switchMode: function(mode) {
            const wrap = document.querySelector('.players-name');
            const player2 = document.querySelector('#player2');
            
            if (mode == 'singleplayer') {
                wrap.classList.add('players-name_single');
                player2.value = 'Игорь Игоревич';
            } else {
                wrap.classList.remove('players-name_single');
                player2.value = '';
            }
        },

        setStep: function(n) {
            const appWrap = document.querySelector('.app-wrap');
            appWrap.dataset.step = n;
        },

        startGame: function() {
            
            if (this.validation()) {
                this.setStep(2);
                this.setTurnHintText(true);
                this.setOptions();
            };
        },

        validation: function() {
            const player1 = document.querySelector('#player1');
            const player2 = document.querySelector('#player2');

            if (!player1.value && !player2.value) alert('Игроки, введите свои имена!');
            else if (!player1.value) alert('Игрок 1, введите свое имя!');
            else if (!player2.value) alert('Игрок 2, введите свое имя!');
            else if (player1.value.length < 3) alert('Игрок 1, имя должно быть не менее 3х символов!');
            else if (player2.value.length < 3) alert('Игрок 2, имя должно быть не менее 3х символов!');
            else if (player1.value == player2.value) alert('Имена игроков не должны совпадать!');
            else return true;
        },

        setTurnHintText: function(force) {
            const title = document.querySelector('#currentTurn');
            const userName = document.querySelector('#currTurnNickname');
            const turn = +this.currTurn;

            if (force) {
                title.classList.remove('current-turn-hint_turn_tac');
                title.classList.add('current-turn-hint_turn_tic');
            } else {
                title.classList.toggle('current-turn-hint_turn_tac');
                title.classList.toggle('current-turn-hint_turn_tic');
            }

            userName.innerText = this.players[turn];
        },

        getPosition: function(cell) {
            const parent = cell.parentNode;
            const children = parent.children;

            const cellIndex = [...children].indexOf(cell);
            const rowIndex = [...parent.parentNode.children].indexOf(parent);
            
            return [rowIndex, cellIndex];
        },

        fillCell: function (item) {
            const pos = this.getPosition(item);
            const tic = '<i class="game-board__item fas fa-times"></i>';
            const tac = '<i class="game-board__item far fa-circle"></i>';
            
            item.insertAdjacentHTML('beforeend', this.currTurn ? tac : tic );
            this.area[pos[0]][pos[1]] = this.currTurn ? 'o' : 'x' ;
        },
        
        makeTurn: function(cell) {
            
            const pos = this.getPosition(cell);
            const checkSymbol = this.area[pos[0]][pos[1]];
            const board = document.querySelectorAll('.game-board__cell');

            board.forEach(function(cell){
                cell.style.pointerEvents = "auto";
            })
            
            if (checkSymbol || this.endGame) return;
            
            this.fillCell(cell);
            
            const check = this.checkCombination();
            
            if (check || (this.getVacantCells().length == 0)) {
                this.endGame = true;
                this.setStep(3);
                this.showWinner();
                clearTimeout(timer)
            }
            
            this.currTurn = !this.currTurn;
            if (this.getVacantCells().length > 0) {this.setTurnHintText()};
            
            if (this.mode == 'singleplayer' && this.currTurn) {
                let interval = this.getRandom(6);
                
                board.forEach(function(cell){
                    cell.style.pointerEvents = "none";
                })
                let timer = setTimeout(game.tick, interval*500);
                
            };
        },

        getRandom: function(max) {
            return Math.floor(Math.random() * (max + 1));
        },

        getVacantCells: function() {
            const board = document.querySelector('.game-board');
            const coords = [];

            this.area.forEach((row, i) => {
                row.forEach((cell, j) => {
                    if (!cell) coords.push([i, j]);
                });
            });
            
            return coords.map(coord => board.children[coord[0]].children[coord[1]]);
        },

        makeAITurn: function() {
            const cells = this.getVacantCells();
            const cell = cells[ this.getRandom(cells.length - 1) ];

            if (cells.length > 0) {this.makeTurn(cell)};
        },

        tick: function(){
            game.makeAITurn();
        },

        checkCombination: function() {
            const rules = [
                [ [0, 0], [0, 1], [0, 2] ],
                [ [1, 0], [1, 1], [1, 2] ],
                [ [2, 0], [2, 1], [2, 2] ],

                [ [0, 0], [1, 0], [2, 0] ],
                [ [0, 1], [1, 1], [2, 1] ],
                [ [0, 2], [1, 2], [2, 2] ],

                [ [0, 0], [1, 1], [2, 2] ],
                [ [0, 2], [1, 1], [2, 0] ]
            ];

            const symbol = this.currTurn ? 'o' : 'x';

            let result;

            rules.forEach(rule => {
                const cond = rule.every( pos => this.area[pos[0]][pos[1]] == symbol );
                if (cond) result = symbol;
            });

            return result;
        },

        showWinner: function() {
            const winnerWrap = document.querySelector('#winnerNickname');
            const check = this.checkCombination();

            check ? winnerWrap.innerText = this.players[+this.currTurn] : winnerWrap.innerText = 'ДРУЖБА';
        },

        init: function() {
            const gameModeWrap = document.querySelector('.game-mode');
            gameModeWrap.addEventListener('input', event => this.switchMode(event.target.value));

            const startGame = document.querySelector('.start-game');
            startGame.addEventListener('click', event => this.startGame());

            const gameBoard = document.querySelector('.game-board');
            gameBoard.addEventListener('click', event => {
                const target = event.target.closest('.game-board__cell');
                if (target) this.makeTurn(target);
            });

            const againBtn = document.querySelector('.restart-game');
            againBtn.addEventListener('click', event => {
                this.reset();
                this.setStep(1);
            });
        },

        reset: function() {
            this.players = [];
            this.mode = '';
            this.currTurn = false;
            this.area = this.area.map(row => row.map(c => null));
            this.endGame = false;
            this.clearArea();
            
        },

        clearArea: function() {
            const cells = document.querySelectorAll('.game-board__cell');
            cells.forEach(el => el.innerHTML = '');

            const players = document.querySelectorAll('.players-name__input');
            players.forEach(el => el.value = '');

            const modes = document.querySelectorAll('.game-mode__input');
            modes.forEach((el, i) => {
                el.checked = i ? false : true;

                if (!i) this.switchMode(el.value);
            });
        }
    };
    
    // console.log(game);
    game.init();

    document.querySelector(".start-game").addEventListener("click", function(event) {
        game.startGame();
    });

});

