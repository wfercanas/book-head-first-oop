import { Guitar } from "./Guitar.mjs";

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
      if (searchSpec.getBuilder !== guitar.getGuitarSpec.getBuilder) {
        continue;
      }
      const model = searchSpec.getModel.toLowerCase();
      if (
        model !== null &&
        model !== "" &&
        model !== guitar.getGuitarSpec.getModel.toLowerCase()
      ) {
        continue;
      }
      if (searchSpec.getType !== guitar.getGuitarSpec.getType) {
        continue;
      }
      if (searchSpec.getBackWood !== guitar.getGuitarSpec.getBackWood) {
        continue;
      }
      if (searchSpec.getTopWood !== guitar.getGuitarSpec.getTopWood) {
        continue;
      }
      matchingGuitars.push(guitar);
    }
    if (matchingGuitars.length > 0) {
      return matchingGuitars;
    } else {
      return null;
    }
  }
}

export { Inventory };
