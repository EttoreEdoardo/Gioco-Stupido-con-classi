export default class Rabbit extends Animal {

    constructor(name, earLenght) {
        super.speed = 0;
        super.name = name;
        this.earLenght = earLenght;
    }

    hide() {
      alert(`${this.name} hides!`);
    }

    stop() {
      super.stop(); // richiama il metodo stop() dal padre
      this.hide(); // and then hide
    }
  }
  
  let rabbit = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("White Rabbit", 5),
  ];
  
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
rabbit.sort(Rabbit.compare);
rabbit[0].run(); // Black Rabbit runs with speed 5.
alert(Rabbit.planet); // Earth

  
  