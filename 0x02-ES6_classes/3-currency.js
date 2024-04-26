export default class Currency {
  constructor(code, string) {
    this.code = code;
    this.string = string;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    this._code = val;
  }

  get string() {
    return this._string;
  }

  set string(val) {
    this._string = val;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
