import IValidationProvider from '../IValidationProvider'

const Validator = require('Validator')

export default class ValidationProvider implements IValidationProvider {
  private rules = {}

  public setRules (rules: object): void {
    this.rules = rules
  }

  public validate (data: object): boolean {
    return Validator.make(data, this.rules).fails()
  }
}
