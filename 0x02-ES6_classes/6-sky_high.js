import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    this.sqft = sqft
    this._floors = floors
  }
}