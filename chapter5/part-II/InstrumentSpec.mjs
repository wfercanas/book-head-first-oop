class InstrumentSpec {
  constructor(spec) {
    if (spec instanceof Map) {
      this._properties = spec;
    } else {
      throw new Error("The specification should be a map of properties");
    }
  }

  getProperty(propertyName) {
    return this._properties.get(propertyName);
  }

  get getProperties() {
    return this._properties;
  }

  matches(otherSpec) {
    if (!(otherSpec instanceof InstrumentSpec)) {
      return false;
    }

    const properties = otherSpec.getProperties;

    for (let [otherPropertyName, otherPropertyValue] of properties) {
      const specValue = this.getProperty(otherPropertyName);

      if (!specValue) {
        continue;
      }

      if (otherPropertyValue !== specValue) {
        return false;
      }
    }

    return true;
  }
}

export { InstrumentSpec };
