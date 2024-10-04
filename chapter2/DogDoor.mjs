class DogDoor {
  constructor() {
    this._open = false;
  }

  open() {
    console.log("The dog door opens.");
    this._open = true;
  }

  close() {
    console.log("The dog door closes.");
    this._open = false;
  }

  isOpen() {
    return this._open;
  }
}

export { DogDoor };
