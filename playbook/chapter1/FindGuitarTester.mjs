import { Builder, Type, Wood } from "./Guitar.types.mjs";
import { GuitarSpec } from "./GuitarSpec.mjs";
import { Guitar } from "./Guitar.mjs";

import { Inventory } from "./Inventory.mjs";

class FindGuitarTester {
  static main(args) {
    const inventory = new Inventory();
    try {
      this.initializeInventory(inventory);
      const whatErinLikes = new GuitarSpec(
        Builder.FENDER,
        "Stratocastor",
        Type.ELECTRIC,
        Wood.ALDER,
        Wood.ALDER
      );

      const guitars = inventory.search(whatErinLikes);

      if (Array.isArray(guitars) && guitars.length > 0) {
        console.log("Erin, you might like these guitars:");
        for (let guitar of guitars) {
          console.log(`
            We have a ${guitar.getGuitarSpec.getBuilder} ${guitar.getGuitarSpec.getModel} guitar:
            ${guitar.getGuitarSpec.getBackWood} back and sides,
            ${guitar.getGuitarSpec.getTopWood} top.
            You can have it for only $${guitar.getPrice}!
            `);
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
        const specification = new GuitarSpec(
          Builder.FENDER,
          "Stratocastor",
          Type.ELECTRIC,
          Wood.ALDER,
          Wood.ALDER
        );

        const guitar1 = new Guitar("V95693", 1499.95, specification);
        const guitar2 = new Guitar("V9512", 1549.95, specification);

        inventory.addGuitar(guitar1);
        inventory.addGuitar(guitar2);
      } catch (error) {
        console.error(error);
      }
    }
  }
}

FindGuitarTester.main();
