import Currency from './3-currency';

/**
 * Represents Pricing
 * @class
 */
export default class Pricing {
  /**
   * @param {number} amount - The amount
   * @param {Currency} name - The currency (an instance of Currency class)
   */
  constructor(amount, currency) {
    /**
     * The amount
     * @type {number}
     */
    this._amount = amount;
    /**
     * The currency
     * @type {Currency}
     */
    this._currency = currency;
  }

  /**
   * Set the amount
   * @throws {TypeError} Will throw a TypeError if any parameter has the wrong type.
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  /**
   * Get the amount
   * @returns {number} The amount
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the currency
   * @throws {TypeError} Will throw a TypeError if any parameter has the wrong type.
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = currency;
  }

  /**
   * Get the currency
   * @returns {Currency} The Currency
   */
  get currency() {
    return this._currency;
  }

  /**
   * Display the full string representation of the price
   * @returns {string} The full string representation of the Price
   */
  displayFullCurrency() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Convert currency
   * @returns {number} The converted amount
   * @throws {TypeError} Will throw a TypeError if any parameter has the wrong type.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
