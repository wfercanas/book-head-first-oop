import { Builder, Styles, Type, Wood } from "./types.mjs";
import { GuitarSpec } from "./GuitarSpec.mjs";
import { Guitar } from "./Guitar.mjs";

import { Inventory } from "./Inventory.mjs";
import { MandolinSpec } from "./MandolinSpec.mjs";

class FindGuitarTester {
  static main(args) {
    const inventory = new Inventory();
    try {
      this.initializeInventory(inventory);
      const whatErinLikes = new GuitarSpec(
        "Stratocastor",
        Builder.FENDER,
        Type.ELECTRIC,
        Wood.ALDER,
        Wood.ALDER,
        6
      );

      const instruments = inventory.search(whatErinLikes);

      if (Array.isArray(instruments) && instruments.length > 0) {
        console.log("Erin, you might like these instruments:");
        for (let instrument of instruments) {
          const instrumentSpec = instrument.getSpec;
          console.log(`
            We have a ${instrumentSpec.getBuilder} ${instrumentSpec.getModel} ${
            instrumentSpec instanceof GuitarSpec ? "guitar" : "mandolin"
          }:
            ${instrumentSpec.getBackWood} back and sides,
            ${instrumentSpec.getTopWood} top.
            You can have it for only $${instrument.getPrice}!
            ---`);
        }
      } else {
        console.log("Sorry, Erin, we have nothing for you.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  static initializeInventory(inventory) {
    if (inventory instanceof Inventory) {
      try {
        const guitarSpec = new GuitarSpec(
          "Stratocastor",
          Builder.FENDER,
          Type.ELECTRIC,
          Wood.ALDER,
          Wood.ALDER,
          6
        );

        const mandolinSpec = new MandolinSpec(
          "Stratocastor",
          Builder.FENDER,
          Type.ELECTRIC,
          Wood.ALDER,
          Wood.ALDER,
          Styles.A
        );

        // const guitar1 = new Guitar("V95693", 1499.95, guitarSpec);
        // const guitar2 = new Guitar("V9512", 1549.95, guitarSpec);

        inventory.addInstrument("V95693", 1499.95, guitarSpec);
        inventory.addInstrument("V9512", 1549.95, guitarSpec);
        inventory.addInstrument("V9512", 154.95, mandolinSpec);
      } catch (error) {
        console.error(error);
      }
    }
  }
}

FindGuitarTester.main();
