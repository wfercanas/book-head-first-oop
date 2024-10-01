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
      const guitarSpec = guitar.getGuitarSpec;
      if (searchSpec.getBuilder !== guitarSpec.getBuilder) {
        continue;
      }
      const model = searchSpec.getModel.toLowerCase();
      if (
        model !== null &&
        model !== "" &&
        model !== guitarSpec.getModel.toLowerCase()
      ) {
        continue;
      }
      if (searchSpec.getType !== guitarSpec.getType) {
        continue;
      }
      if (searchSpec.getBackWood !== guitarSpec.getBackWood) {
        continue;
      }
      if (searchSpec.getTopWood !== guitarSpec.getTopWood) {
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
