import { Builder, Type, Wood } from "./Guitar.types.mjs";

class GuitarSpec {
  constructor(builder, model, type, backWood, topWood) {
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
}

export { GuitarSpec };
