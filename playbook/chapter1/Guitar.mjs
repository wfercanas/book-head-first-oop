import { GuitarSpec } from "./GuitarSpec.mjs";

class Guitar {
  constructor(serialNumber, price, guitarSpec) {
    this._serialNumber = serialNumber;
    this._price = price;

    if (guitarSpec instanceof GuitarSpec) {
      this._guitarSpec = guitarSpec;
    } else {
      throw new Error(`The provided Guitar Specification is not valid`);
    }
  }

  get getSerialNumber() {
    return this._serialNumber;
  }

  get getPrice() {
    return this._price;
  }

  set setPrice(newPrice) {
    this._price = newPrice;
  }

  get getSpec() {
    return this._guitarSpec;
  }
}

export { Guitar };
