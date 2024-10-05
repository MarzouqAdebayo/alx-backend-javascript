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
   */
  set amount(amount) {
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
   */
  set currency(currency) {
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
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
