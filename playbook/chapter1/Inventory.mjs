import { Guitar } from "./Guitar.mjs";
import { GuitarSpec } from "./GuitarSpec.mjs";

class Inventory {
  constructor() {
    this._guitars = [];
  }

  addGuitar(newGuitar) {
    if (newGuitar instanceof Guitar) {
      this._guitars.push(newGuitar);
    } else {
      throw new Error("This guitar cannot be added to the inventory");
    }
  }

  getGuitar(serialNumber) {
    for (let guitar of this._guitars) {
      if (guitar.getSerialNumber === serialNumber) {
        return guitar;
      }
    }
    return null;
  }

  search(searchSpec) {
    const matchingGuitars = [];
    for (let guitar of this._guitars) {
      if (guitar.getSpec.matches(searchSpec)) {
        matchingGuitars.push(guitar);
      }
    }
    if (matchingGuitars.length > 0) {
      return matchingGuitars;
    } else {
      return null;
    }
  }
}

export { Inventory };
