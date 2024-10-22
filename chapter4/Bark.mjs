class Bark {
  constructor(sound) {
    if (typeof sound === "string") {
      this._sound = sound;
    } else {
      throw new Error("This is not a valid bark sound");
    }
  }

  get getSound() {
    return this._sound;
  }

  equals(bark) {
    if (bark instanceof Bark) {
      return bark.getSound.toLowerCase() === this._sound.toLowerCase();
    } else {
      return false;
    }
  }
}

export { Bark };
