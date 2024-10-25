import { Builder, Type, Wood } from "./types.mjs";

class InstrumentSpec {
  constructor(model, builder, type, topWood, backWood) {
    if (typeof model === "string") {
      this._model = model;
    } else {
      throw new Error("Model should be of type 'string'");
    }

    if (Object.values(Builder).includes(builder)) {
      this._builder = builder;
    } else {
      throw new Error(`${builder} is not a valid instrument builder`);
    }

    if (Object.values(Type).includes(type)) {
      this._type = type;
    } else {
      throw new Error(`${type} is not a valid instrument type`);
    }

    if (Object.values(Wood).includes(topWood)) {
      this._topWood = topWood;
    } else {
      throw new Error(`${topWood} is not a valid instrument wood`);
    }

    if (Object.values(Wood).includes(backWood)) {
      this._backWood = backWood;
    } else {
      throw new Error(`${backWood} is not a valid instrument wood`);
    }
  }

  get getModel() {
    return this._model;
  }

  get getBuilder() {
    return this._builder;
  }

  get getType() {
    return this._type;
  }

  get getTopWood() {
    return this._topWood;
  }

  get getBackWood() {
    return this._backWood;
  }

  matches(spec) {
    if (!(spec instanceof InstrumentSpec)) {
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

    if (this._builder !== spec.getBuilder) {
      return false;
    }

    if (this._type !== spec.getType) {
      return false;
    }

    if (this._topWood !== spec.getTopWood) {
      return false;
    }

    if (this._backWood !== spec.getBackWood) {
      return false;
    }

    return true;
  }
}

export { InstrumentSpec };
