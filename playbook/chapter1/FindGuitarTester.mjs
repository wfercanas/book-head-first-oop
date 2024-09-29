import { Guitar } from "./Guitar.mjs";
import { Inventory } from "./Intentory.mjs";

class FindGuitarTester {
  static main(args) {
    const inventory = new Inventory();
    this.initializeInventory(inventory);

    const whatErinLikes = new Guitar(
      "",
      0,
      "fender",
      "Stratocastor",
      "electric",
      "Alder",
      "Alder"
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
  }

  static initializeInventory(inventory) {
    if (inventory instanceof Inventory) {
      inventory.addGuitar(
        1,
        1200,
        "Fender",
        "Stratocastor",
        "electric",
        "Alder",
        "Alder"
      );
    }
  }
}

FindGuitarTester.main();
