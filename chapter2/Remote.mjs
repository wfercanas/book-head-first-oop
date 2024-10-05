import { DogDoor } from "./DogDoor.mjs";

class Remote {
  constructor(door) {
    if (door instanceof DogDoor) {
      this._door = door;
    } else {
      throw new Error("This is not a valid door to control");
    }
  }

  pressButton() {
    console.log("Pressing the remote control button...");
    if (this._door.isOpen()) {
      this._door.close();
    } else {
      this._door.open();

      const timeoutId = setTimeout(() => {
        this._door.close();
      }, 5000);

      return timeoutId;
    }
  }
}

export { Remote };
