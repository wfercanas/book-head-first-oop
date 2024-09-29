import { Guitar } from "./Guitar.mjs";

class Inventory {
  constructor() {
    this._guitars = [];
  }

  addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
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
    for (let guitar of this._guitars) {
      const builder = searchGuitar.getBuilder;
      if (builder !== null && builder !== "" && builder !== guitar.getBuilder) {
        continue;
      }
      const model = searchGuitar.getModel;
      if (model !== null && model !== "" && model !== guitar.getModel) {
        continue;
      }
      const type = searchGuitar.getType;
      if (type !== null && type !== "" && type !== guitar.getType) {
        continue;
      }
      const backWood = searchGuitar.getBackWood;
      if (
        backWood !== null &&
        backWood !== "" &&
        backWood !== guitar.getBackWood
      ) {
        continue;
      }
      const topWood = searchGuitar.getTopWood;
      if (topWood !== null && topWood !== "" && topWood !== guitar.getTopWood) {
        continue;
      }
      return guitar;
    }
    return null;
  }
}

export { Inventory };
