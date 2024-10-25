import { InstrumentSpec } from "./InstrumentSpec.mjs";
import { Styles } from "./types.mjs";

class MandolinSpec extends InstrumentSpec {
  constructor(model, builder, type, topWood, backWood, style) {
    super(model, builder, type, topWood, backWood);

    if (Object.values(Styles).includes(style)) {
      this._style = style;
    } else {
      throw new Error(`${style} is not a valid Mandolin style`);
    }
  }

  get getStyle() {
    return this._style;
  }

  matches(spec) {
    if (!super.matches(spec)) {
      return false;
    }

    if (!(spec instanceof MandolinSpec)) {
      return false;
    }

    if (spec.getStyle !== this._style) {
      return false;
    }

    return true;
  }
}

export { MandolinSpec };
