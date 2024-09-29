class Airplane {
  constructor() {
    this._speed = 0;
  }

  set setSpeed(speed) {
    this._speed = speed;
    Object.preventExtensions(this);
  }

  get getSpeed() {
    return this._speed;
  }
}

// const boeing = new Airplane();
// console.log(boeing.getSpeed); // 0
// boeing.setSpeed = 200;
// console.log(boeing.getSpeed); // 200

class Jet extends Airplane {
  #multiplier = 2;

  constructor() {
    super();
  }

  set setSpeed(speed) {
    // this._speed = speed * this.#multiplier;
    super.setSpeed = speed * this.#multiplier;
  }

  accelerate() {
    this._speed = this.getSpeed * 2;
  }
}

// const airbus = new Jet();
// airbus.setSpeed = 2000;
// console.log(airbus.getSpeed); // 4000
// airbus.accelerate();
// console.log(airbus.getSpeed); // 8000

export { Airplane, Jet };
