class Guitar {
  constructor(serialNumber, price, builder, model, type, backWood, topWood) {
    this._serialNumber = serialNumber;
    this._price = price;
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._backWood = backWood;
    this._topWood = topWood;
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

export { Guitar };
