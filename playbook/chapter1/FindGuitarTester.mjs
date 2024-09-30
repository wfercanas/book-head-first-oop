import { Guitar } from "./Guitar.mjs";
import { Builder, Type, Wood } from "./Guitar.types.mjs";

import { Inventory } from "./Inventory.mjs";

class FindGuitarTester {
  static main(args) {
    const inventory = new Inventory();
    try {
      this.initializeInventory(inventory);
      const whatErinLikes = new Guitar(
        "",
        0,
        Builder.FENDER,
        "Stratocastor",
        Type.ELECTRIC,
        Wood.ALDER,
        Wood.ALDER
      );

      const guitars = inventory.search(whatErinLikes);

      if (guitars.length > 0) {
        console.log("Erin, you might like these guitars:");
        for (let guitar of guitars) {
          console.log(`
            We have a ${guitar.getBuilder} ${guitar.getModel} guitar:
            ${guitar.getBackWood} back and sides,
            ${guitar.getTopWood} top.
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
      inventory.addGuitar(
        "V95693",
        1499.95,
        Builder.FENDER,
        "Stratocastor",
        Type.ELECTRIC,
        Wood.ALDER,
        Wood.ALDER
      );
      inventory.addGuitar(
        "V9512",
        1549.95,
        Builder.FENDER,
        "Stratocastor",
        Type.ELECTRIC,
        Wood.ALDER,
        Wood.ALDER
      );
    }
  }
}

FindGuitarTester.main();
