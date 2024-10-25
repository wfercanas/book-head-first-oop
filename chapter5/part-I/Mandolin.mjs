import { Instrument } from "./Instrument.mjs";
import { MandolinSpec } from "./MandolinSpec.mjs";

class Mandolin extends Instrument {
  constructor(serialNumber, price, instrumentSpec) {
    if (instrumentSpec instanceof MandolinSpec) {
      super(serialNumber, price, instrumentSpec);
    } else {
      throw new Error("Instrument Spec must be of type 'MandolinSpec'");
    }
  }
}

export { Mandolin };
