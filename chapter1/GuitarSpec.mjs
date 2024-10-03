import { Builder, Type, Wood } from "./Guitar.types.mjs";

class GuitarSpec {
  constructor(builder, model, type, backWood, topWood, numStrings) {
    if (Object.values(Builder).includes(builder)) {
      this._builder = builder;
    } else {
      throw new Error(`${builder} is not a valid guitar builder`);
    }

    this._model = model;

    if (Object.values(Type).includes(type)) {
      this._type = type;
    } else {
      throw new Error(`${type} is not a valid guitar type`);
    }

    const woods = Object.values(Wood);
    if (woods.includes(backWood)) {
      this._backWood = backWood;
    } else {
      throw new Error(`${backWood} is not a valid guitar wood`);
    }

    if (woods.includes(topWood)) {
      this._topWood = topWood;
    } else {
      throw new Error(`${topWood} is not a valid guitar wood`);
    }

    if (
      typeof numStrings === "number" &&
      numStrings > 0 &&
      !Number.isNaN(numStrings)
    ) {
      this._numStrings = numStrings;
    } else {
      throw new Error(`${numStrings} is not a valid amount of strings`);
    }
  }

  get getBuilder() {
    return this._builder;
  }

  get getModel() {
    return this._model;
  }

  get getType() {
    return this._type;
  }

  get getBackWood() {
    return this._backWood;
  }

  get getTopWood() {
    return this._topWood;
  }

  get getNumStrings() {
    return this._numStrings;
  }

  matches(spec) {
    if (this._builder !== spec.getBuilder) {
      return false;
    }
    const model = this._model.toLowerCase();
    if (
      model !== null &&
      model !== "" &&
      model !== spec.getModel.toLowerCase()
    ) {
      return false;
    }
    if (this._type !== spec.getType) {
      return false;
    }
    if (this._backWood !== spec.getBackWood) {
      return false;
    }
    if (this._topWood !== spec.getTopWood) {
      return false;
    }
    if (this._numStrings !== spec.getNumStrings) {
      return false;
    }

    return true;
  }
}

export { GuitarSpec };
