import { Tile } from "./Tile.mjs";
import { Unit } from "../unit/Unit.mjs";

class Board {
  constructor(width, height) {
    if (typeof width === "number" && width >= 0) {
      this._width = width;
    } else {
      throw new Error("width should be a positive integer");
    }

    if (typeof height === "number" && height >= 0) {
      this._height = height;
    } else {
      throw new Error("height should be a positive integer");
    }

    this._tiles = [];
    initialize();
  }

  initialize() {
    for (let i = 0; i < this._width; i++) {
      for (let j = 0; j < this._height; j++) {
        this._tiles[i][j] = new Tile();
      }
    }
  }

  getTile(x, y) {
    const tile = this._tiles[x - 1][y - 1];
    if (!tile) {
      throw new Error("Tile not found");
    }

    return tile;
  }

  addUnit(unit, x, y) {
    try {
      if (!(unit instanceof Unit)) {
        throw new Error("You must provide Unit types to add a unit");
      }

      const tile = this.getTile(x, y);
      tile.addUnit(unit);
    } catch (error) {
      console.error(error);
    }
  }

  removeUnit(unit, x, y) {
    try {
      if (!(unit instanceof Unit)) {
        throw new Error("You must provide Unit types to add a unit");
      }

      const tile = this.getTile(x, y);
      tile.removeUnit(unit);
    } catch (error) {
      console.error(error);
    }
  }

  removeUnits(x, y) {
    try {
      const tile = this.getTile(x, y);
      tile.removeUnits();
    } catch (error) {
      console.error(error);
    }
  }

  getUnits(x, y) {
    try {
      const tile = this.getTile(x, y);
      return tile.getUnits();
    } catch (error) {
      console.error(error);
    }
  }
}

export { Board };
