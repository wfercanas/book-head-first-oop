import { Airplane, Jet } from "./Airplane.mjs";

class FlyTest {
  static main(args) {
    const jet1 = new Jet();
    jet1._speed = 212;
    console.log(jet1._speed);

    const jet2 = new Jet();
    jet2.setSpeed = 212;
    console.log(jet2.getSpeed);
  }
}

FlyTest.main();
