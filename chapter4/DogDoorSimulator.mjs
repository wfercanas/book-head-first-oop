import { Bark } from "./Bark.mjs";
import { BarkRecognizer } from "./BarkRecognizer.mjs";
import { DogDoor } from "./DogDoor.mjs";
import { Remote } from "./Remote.mjs";

class DogDoorSimulator {
  static main(args) {
    const door = new DogDoor();
    door.addAllowedBark(new Bark("rowlf"));
    door.addAllowedBark(new Bark("rooowlf"));
    door.addAllowedBark(new Bark("rawlf"));
    door.addAllowedBark(new Bark("woof"));

    const remote = new Remote(door);
    const recognizer = new BarkRecognizer(door);

    console.log("Bruce starts barking...");
    recognizer.recognize(new Bark("rowlf"));

    // console.log("\nTodd grabs the remote control");
    // remote.pressButton();

    console.log("\nBruce has gone outside...");

    if (Math.random() < 0.5) {
      setTimeout(() => {
        console.log("\nBruce's all done");
        console.log("... but he's stuck outside!");

        console.log("A small dog starts barking.");
        const smallDogBark = new Bark("yip");
        recognizer.recognize(smallDogBark);

        console.log("\nBruce starts barking...");
        recognizer.recognize(new Bark("rooowlf"));

        // console.log("\nTodd grabs the remote control");
        // remote.pressButton();

        console.log("\nBruce's back inside");
      }, 8000);
    } else {
      console.log("\nBruce's back inside");
    }

    // remote.pressButton();
  }
}

DogDoorSimulator.main();
