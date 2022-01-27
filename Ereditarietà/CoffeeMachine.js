export default class CaffeeMachine {

    _waterAmount = 0; // La quantità di acqua contenuta
    #waterAmount = 0;
    #waterLimit = 200;

    constructor(power) {
        this._power = power;
        alert( `Created a coffee-machine, power: ${power}` )
    }

    get power() {
        return this._power;
    }

    set waterAmount(value){
        if (value < 0) value = 0;
        this.#waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    #fixWaterAmount(value) {
        if (value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWatermAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }

}

// Creiamo la macchina del caffè
let coffeeMachine = new CaffeeMachine(100);
alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
// Aggiungiamo acqua
coffeeMachine.waterAmount = 200;

let machine = new coffeeMachine();
machine.waterAmount = 100;
