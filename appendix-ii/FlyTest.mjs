import { Airplane, Jet } from "./Airplane.mjs";

class FlyTest {
  static main(args) {
    const biplane = new Airplane();
    biplane.setSpeed = 212;
    console.log(biplane.getSpeed); // 212

    const boeing = new Jet();
    boeing.setSpeed = 422;
    console.log(boeing.getSpeed); // 844

    let x = 0;
    while (x < 4) {
      boeing.accelerate();
      console.log(boeing.getSpeed);

      if (boeing.getSpeed > 5000) {
        biplane.setSpeed = biplane.getSpeed * 2;
      } else {
        boeing.accelerate();
      }
      x++;
    }
    console.log(biplane.getSpeed);
  }
}

FlyTest.main();
