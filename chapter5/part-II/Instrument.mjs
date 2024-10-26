import { InstrumentSpec } from "./InstrumentSpec.mjs";

class Instrument {
  constructor(serialNumber, price, spec) {
    if (typeof serialNumber === "string") {
      this._serialNumber = serialNumber;
    } else {
      throw new Error("Serial Number must be of type 'string'");
    }

    if (typeof price === "number") {
      this._price = price;
    } else {
      throw new Error("Price must be of type 'number'");
    }

    if (spec instanceof InstrumentSpec) {
      this._instrumentSpec = spec;
    } else {
      throw new Error("Spec is not of type 'InstrumentSpec'");
    }
  }

  get getSerialNumber() {
    return this._serialNumber;
  }

  get getPrice() {
    return this._price;
  }

  set setPrice(newPrice) {
    if (typeof newPrice === "number") {
      this._price = newPrice;
    } else {
      throw new Error("New Price must be of type 'number");
    }
  }

  get getSpec() {
    return this._instrumentSpec;
  }
}

export { Instrument };
