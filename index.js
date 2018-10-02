let value;
let dice = [];
let diceBox;
let diceValue;
let i = 0;
let d = 0;
let container = document.createElement('div');
document.body.appendChild(container);
container.id = 'container';
let button = document.getElementById('btn');
let rollButton = document.getElementById('rollBtn');
let sumButton = document.getElementById('sumButton');
let sum;

button.addEventListener('click', () => {
    dice.push(new Die());
    console.log(dice[i]);
    i++;

});

rollButton.addEventListener('click', () => {
    for( d = 0; d < dice.length; d++ ) {
        dice[d].roll();
    };
});

sumButton.addEventListener('click', () => {
    sum = 0;
    for( let s = 0; s < dice.length; s++ ) {
        sum += dice[s].value;
        
    }
    alert(`Sum is: ${sum}`);
    console.log(`Sum is: ${sum}`);
});

class Die {
    constructor() {
        value = 1;
        this.value = value;
        this.diceBox = document.createElement('div');
        container.appendChild(this.diceBox);
        this.diceBox.className = `diceBox${i}`;
        this.diceBox.id = 'diceBox';
        this.roll();
        this.array = dice;
        this.diceBox.addEventListener('click', () => {
            this.roll();
        });
        this.diceBox.addEventListener('dblclick', () => {
            container.removeChild(this.diceBox);
            let removeArrItem = dice.indexOf(this.diceBox);
            dice.splice(removeArrItem, 1);
            console.log(dice);
        });
        
    };

    roll() {
        this.value = Math.ceil( Math.random() * 6 );
        this.diceBox.innerText = this.value;
    };
};