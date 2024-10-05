/**
 * Represents a Currency
 * @property {string} code - The code of the Currency
 * @property {string} name - The name of the Currency
 */
export default class Currency {
  /**
   * @param {string} code - The code of the Currency
   * @param {string} name - The name of the Currency
   */
  constructor(code, name) {
    /**
     * The code of the Currency
     * @type {string}
     */
    this._code = code;
    /**
     * The name of the Currency
     * @type {string}
     */
    this._name = name;
  }

  /**
   * Set the code of the currency
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Get the code of the currency
   * @returns {string} The code of the Currency
   */
  get code() {
    return this._code;
  }

  /**
   * Set the name
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Get the name of the currency
   * @returns {string} The code of the Currency
   */
  get name() {
    return this._name;
  }

  /**
   * Display the full string representation of the currency
   * @returns {string} The full string representation of the Currency
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
