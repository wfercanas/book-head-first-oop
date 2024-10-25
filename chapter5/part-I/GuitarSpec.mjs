import { InstrumentSpec } from "./InstrumentSpec.mjs";

class GuitarSpec extends InstrumentSpec {
  constructor(model, builder, type, topWood, backWood, numStrings) {
    super(model, builder, type, topWood, backWood);

    if (typeof numStrings === "number") {
      this._numStrings = numStrings;
    } else {
      throw new Error("numStrings must be of type 'number'");
    }
  }

  get getNumStrings() {
    return this._numStrings;
  }

  matches(spec) {
    if (!super.matches(spec)) {
      return false;
    }

    if (!(spec instanceof GuitarSpec)) {
      return false;
    }

    if (spec.getNumStrings !== this._numStrings) {
      return false;
    }

    return true;
  }
}

export { GuitarSpec };
