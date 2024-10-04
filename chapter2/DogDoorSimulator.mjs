import { DogDoor } from "./DogDoor.mjs";
import { Remote } from "./Remote.mjs";

class DogDoorSimulator {
  static main(args) {
    const door = new DogDoor();
    const remote = new Remote(door);

    console.log("Fido barks to go outside...");
    remote.pressButton();

    console.log("\nFido has gone outside...");
    remote.pressButton();

    console.log("\nFido's all gone");
    remote.pressButton();

    console.log("\nFido's back inside");
    remote.pressButton();
  }
}

DogDoorSimulator.main();
