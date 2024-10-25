import { Guitar } from "./Guitar.mjs";
import { GuitarSpec } from "./GuitarSpec.mjs";
import { Mandolin } from "./Mandolin.mjs";
import { MandolinSpec } from "./MandolinSpec.mjs";

class Inventory {
  constructor() {
    this._inventory = [];
  }

  addInstrument(serialNumber, price, spec) {
    try {
      if (spec instanceof GuitarSpec) {
        this._inventory.push(new Guitar(serialNumber, price, spec));
      } else if (spec instanceof MandolinSpec) {
        this._inventory.push(new Mandolin(serialNumber, price, spec));
      } else {
        throw new Error("Not a valid instrument specification");
      }
    } catch (error) {
      console.error(error);
    }
  }

  getInstrument(serialNumber) {
    return this._inventory.find(
      (instrument) => instrument.getSerialNumber === serialNumber
    );
  }

  search(spec) {
    if (spec instanceof GuitarSpec || spec instanceof MandolinSpec) {
      return this._inventory.filter((instrument) =>
        instrument.getSpec.matches(spec)
      );
    }
    throw new Error("The spec must be of type 'GuitarSpec'");
  }
}

export { Inventory };
