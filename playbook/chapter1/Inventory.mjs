import { Guitar } from "./Guitar.mjs";
import { Builder, Type, Wood } from "./Guitar.types.mjs";

class Inventory {
  constructor() {
    this._guitars = [];
  }

  addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
    if (!Object.values(Builder).includes(builder)) {
      throw new Error(`${builder} is not a valid guitar builder`);
    }

    if (!Object.values(Type).includes(type)) {
      throw new Error(`${type} is not a valid guitar type`);
    }

    if (!Object.values(Wood).includes(backWood)) {
      throw new Error(`${backWood} is not a valid guitar wood`);
    }

    if (!Object.values(Wood).includes(topWood)) {
      throw new Error(`${topWood} is not a valid guitar wood`);
    }

    try {
      const guitar = new Guitar(
        serialNumber,
        price,
        builder,
        model,
        type,
        backWood,
        topWood
      );
      this._guitars.push(guitar);
    } catch (error) {
      console.error(error);
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

  search(searchGuitar) {
    const matchingGuitars = [];
    for (let guitar of this._guitars) {
      if (searchGuitar.getBuilder !== guitar.getBuilder) {
        continue;
      }
      const model = searchGuitar.getModel.toLowerCase();
      if (
        model !== null &&
        model !== "" &&
        model !== guitar.getModel.toLowerCase()
      ) {
        continue;
      }
      if (searchGuitar.getType !== guitar.getType) {
        continue;
      }
      if (searchGuitar.getBackWood !== guitar.getBackWood) {
        continue;
      }
      if (searchGuitar.getTopWood !== guitar.getTopWood) {
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
