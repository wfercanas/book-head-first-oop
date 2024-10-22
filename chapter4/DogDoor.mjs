import { Bark } from "./Bark.mjs";

class DogDoor {
  constructor() {
    this._open = false;
    this._allowedBarks = [];
    this._timerId = null;
  }

  open() {
    console.log("The dog door opens.");
    this._open = true;
    if (this._timerId) {
      clearTimeout(this._timerId);
    }

    const timerId = setTimeout(() => {
      this.close();
    }, 5000);

    this._timerId = timerId;
  }

  close() {
    console.log("The dog door closes.");
    this._open = false;
  }

  isOpen() {
    return this._open;
  }

  addAllowedBark(bark) {
    if (bark instanceof Bark) {
      this._allowedBarks.push(bark);
    } else {
      throw new Error("This is not a proper bark");
    }
  }

  get getAllowedBarks() {
    return this._allowedBarks;
  }
}

export { DogDoor };
