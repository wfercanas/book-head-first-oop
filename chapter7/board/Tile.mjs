import { Unit } from "../unit/Unit.mjs";

class Tile {
  constructor() {
    this._units = [];
  }

  addUnit(unit) {
    if (!(unit instanceof Unit)) {
      throw new Error("You can only add Unit typed units");
    }

    this._units.push(unit);
  }

  removeUnit(target) {
    if (!(target instanceof Unit)) {
      throw new Error("You can only remove Unit typed units");
    }

    const unitIndex = this._units.findIndex((unit) => unit === target);
    if (unitIndex) {
      this._units.splice(unitIndex, 1);
    }
  }

  removeUnits() {
    this._units = [];
  }

  getUnits() {
    return this._units;
  }
}

export { Tile };
