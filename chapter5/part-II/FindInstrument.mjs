import { InstrumentType, Builder, Styles, Type, Wood } from "./types.mjs";

import { Inventory } from "./Inventory.mjs";
import { InstrumentSpec } from "./InstrumentSpec.mjs";

class FindInstrumentTester {
  static main(args) {
    const inventory = new Inventory();
    try {
      this.initializeInventory(inventory);
      const clientSpec = new InstrumentSpec(
        new Map([
          ["builder", Builder.GIBSON],
          ["backWood", Wood.MAPLE],
        ])

        // new Map([
        //   ["builder", Builder.FENDER],
        //   ["model", "Stratocastor"],
        //   ["type", Type.ELECTRIC],
        //   ["topWood", Wood.ALDER],
        //   ["backWood", Wood.ALDER],
        // ])
      );

      const results = inventory.search(clientSpec);

      if (Array.isArray(results) && results.length > 0) {
        console.log("You might like these instruments:\n");

        for (let instrument of results) {
          const spec = instrument.getSpec;
          const instrumentType = spec.getProperty("instrumentType");
          console.log(
            `We have a ${instrumentType} with the following properties:`
          );

          for (let [propName, propValue] of spec.getProperties) {
            if (propName === "instrumentType") {
              continue;
            }
            console.log(`${propName}: ${propValue}`);
          }

          console.log(`You can have it for only $${instrument.getPrice}!
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
        // GUITARS
        inventory.addInstrument(
          "11277",
          3999.95,
          new InstrumentSpec(
            new Map([
              ["instrumentType", InstrumentType.GUITAR],
              ["builder", Builder.COLLINGS],
              ["model", "CJ"],
              ["numStrings", 6],
              ["type", Type.ACOUSTIC],
              ["topWood", Wood.INDIAN_ROSEWOOD],
              ["backWood", Wood.SPRUCE],
            ])
          )
        );

        inventory.addInstrument(
          "122784",
          5495.95,
          new InstrumentSpec(
            new Map([
              ["instrumentType", InstrumentType.GUITAR],
              ["builder", Builder.MARTIN],
              ["model", "D-18"],
              ["numStrings", 6],
              ["type", Type.ACOUSTIC],
              ["topWood", Wood.MAHOGANY],
              ["backWood", Wood.ADIRONDACK],
            ])
          )
        );

        inventory.addInstrument(
          "V95693",
          1499.95,
          new InstrumentSpec(
            new Map([
              ["instrumentType", InstrumentType.GUITAR],
              ["builder", Builder.FENDER],
              ["model", "Stratocastor"],
              ["type", Type.ELECTRIC],
              ["topWood", Wood.ALDER],
              ["backWood", Wood.ALDER],
              ["numStrings", 6],
            ])
          )
        );

        inventory.addInstrument(
          "V9512",
          1549.95,
          new InstrumentSpec(
            new Map([
              ["instrumentType", InstrumentType.GUITAR],
              ["builder", Builder.FENDER],
              ["model", "Stratocastor"],
              ["type", Type.ELECTRIC],
              ["topWood", Wood.ALDER],
              ["backWood", Wood.ALDER],
              ["numStrings", 6],
            ])
          )
        );

        inventory.addInstrument(
          "82765501",
          1890.95,
          new InstrumentSpec(
            new Map([
              ["instrumentType", InstrumentType.GUITAR],
              ["builder", Builder.GIBSON],
              ["model", "SG'61 Reissue"],
              ["numStrings", 6],
              ["type", Type.ELECTRIC],
              ["topWood", Wood.MAHOGANY],
              ["backWood", Wood.MAHOGANY],
            ])
          )
        );

        inventory.addInstrument(
          "70108276",
          2295.95,
          new InstrumentSpec(
            new Map([
              ["instrumentType", InstrumentType.GUITAR],
              ["builder", Builder.GIBSON],
              ["model", "Les Paul"],
              ["numStrings", 6],
              ["type", Type.ELECTRIC],
              ["topWood", Wood.MAPLE],
              ["backWood", Wood.MAPLE],
            ])
          )
        );

        // MANDOLINS
        inventory.addInstrument(
          "90199920",
          5495.99,
          new InstrumentSpec(
            new Map([
              ["instrumentType", InstrumentType.MANDOLIN],
              ["builder", Builder.GIBSON],
              ["model", "F5-G"],
              ["type", Type.ACOUSTIC],
              ["topWood", Wood.MAPLE],
              ["backWood", Wood.MAPLE],
              ["styles", Styles.F],
            ])
          )
        );

        // BANJOS
        inventory.addInstrument(
          "8900231",
          2945.95,
          new InstrumentSpec(
            new Map([
              ["instrumentType", InstrumentType.BANJO],
              ["builder", Builder.GIBSON],
              ["model", "RB-3"],
              ["numStrings", 5],
              ["type", Type.ACOUSTIC],
              ["backWood", Wood.MAPLE],
              ["styles", Styles.F],
            ])
          )
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
}

FindInstrumentTester.main();
