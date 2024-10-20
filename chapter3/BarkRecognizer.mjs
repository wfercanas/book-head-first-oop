import { DogDoor } from "./DogDoor.mjs";

class BarkRecognizer {
  constructor(door) {
    if (door instanceof DogDoor) {
      this._door = door;
    } else {
      throw new Error("This is not a valid door to attach a recognizer");
    }
  }

  recognize(bark) {
    console.log(`  Barkrecognizer heard a ${bark}`);
    this._door.open();
  }
}

export { BarkRecognizer };
