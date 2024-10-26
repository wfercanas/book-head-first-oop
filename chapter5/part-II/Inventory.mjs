import { Instrument } from "./Instrument.mjs";
import { InstrumentSpec } from "./InstrumentSpec.mjs";

class Inventory {
  constructor() {
    this._inventory = [];
  }

  addInstrument(serialNumber, price, spec) {
    try {
      if (!(spec instanceof InstrumentSpec)) {
        throw new Error("Not a valid instrument specification");
      }

      if (!spec.getProperty("instrumentType")) {
        throw new Error(
          "You must provide an instrument type when adding a new instrument to inventory"
        );
      }

      this._inventory.push(new Instrument(serialNumber, price, spec));
    } catch (error) {
      console.error(error);
    }
  }

  getInstrument(serialNumber) {
    return this._inventory.find(
      (instrument) => instrument.getSerialNumber === serialNumber
    );
  }

  search(otherSpec) {
    return this._inventory.filter((instrument) =>
      instrument.getSpec.matches(otherSpec)
    );
  }
}

export { Inventory };
