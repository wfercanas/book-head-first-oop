import { DogDoor } from "./DogDoor.mjs";
import { Remote } from "./Remote.mjs";

class DogDoorSimulator {
  static main(args) {
    const door = new DogDoor();
    const remote = new Remote(door);

    console.log("Fido barks to go outside...");
    console.log("\nTodd grabs the remote control");
    remote.pressButton();

    console.log("\nFido has gone outside...");

    if (Math.random() < 0.5) {
      setTimeout(() => {
        console.log("\nFido's all done");
        console.log("\nFido starts barking...");
        console.log("\nTodd grabs the remote control");
        remote.pressButton();

        console.log("\nFido's back inside");
      }, 8000);
    } else {
      console.log("\nFido's back inside");
    }

    // remote.pressButton();
  }
}

DogDoorSimulator.main();
