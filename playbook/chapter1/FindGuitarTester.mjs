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

      const guitar = inventory.search(whatErinLikes);

      if (guitar !== null) {
        console.log(`
          Erin, you might like this ${guitar.getBuilder} ${guitar.getModel} guitar:
          ${guitar.getBackWood} back and sides,
          ${guitar.getTopWood} top.
          You can have it for only $${guitar.getPrice}!
          `);
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
        1,
        1200,
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
