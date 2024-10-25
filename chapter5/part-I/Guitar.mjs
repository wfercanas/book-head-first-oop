import { GuitarSpec } from "./GuitarSpec.mjs";
import { Instrument } from "./Instrument.mjs";

class Guitar extends Instrument {
  constructor(serialNumber, price, instrumentSpec) {
    if (instrumentSpec instanceof GuitarSpec) {
      super(serialNumber, price, instrumentSpec);
    } else {
      throw new Error("Instrument Spec must be of type 'GuitarSpec'");
    }
  }
}

export { Guitar };
