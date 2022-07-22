const Validator = require('Validator')

export default class ValidationProvider {
  public rules = {}
  public validate (data): void {
    if (Validator.make(data, this.rules).fails()) { throw new Error('invalid data.') }
  }
}
