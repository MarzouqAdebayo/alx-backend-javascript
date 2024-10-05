export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqrt() {
    return this._sqft;
  }

  set sqrt(sqft) {
    this._sqft = sqft;
  }
}
