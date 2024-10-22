import { Bark } from "./Bark.mjs";
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
    if (bark instanceof Bark) {
      console.log(`  Barkrecognizer heard a ${bark.getSound}`);
      for (let allowedBark of this._door.getAllowedBarks) {
        if (
          allowedBark.getSound.toLowerCase() === bark.getSound.toLowerCase()
        ) {
          this._door.open();
          return;
        }
      }
      console.error("This dog is not allowed");
    } else {
      console.error("Error: couldn't receive a bark instance");
    }
  }
}

export { BarkRecognizer };
