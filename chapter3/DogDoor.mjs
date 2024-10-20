class DogDoor {
  constructor() {
    this._open = false;
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
}

export { DogDoor };
