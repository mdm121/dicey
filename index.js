let value = 1;
let div = document.getElementsByClassName('diceBox');
let diceValue = document.createTextNode(value);





class Die {
    constructor() {
        let value = 1;
        this.value = value;
    }

    roll() {

        this.value = Math.ceil( Math.random() * 6 );
        console.log(this.value);
        
        
        console.log(diceValue);
        div.appendChild(`<span>${diceValue}</span>`);

    }
};

let d1 = new Die();
d1.roll();

