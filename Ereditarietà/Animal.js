export default class Animal {

    static planet = "Earth";

    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }

    run(speed = 0) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
  
  let animal = new Animal("My animal");
  