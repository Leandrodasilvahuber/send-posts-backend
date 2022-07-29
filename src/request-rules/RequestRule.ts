import ValidationProvider from '../providers/implementations/ValidationProvider'
import IValidationProvider from '../providers/IValidationProvider'

export default class RequestRules {
  validationProvider: IValidationProvider

  public rules: {}

  constructor () {
    this.validationProvider = new ValidationProvider()
  }

  async execute (data: object): Promise<boolean> {
    this.validationProvider.setRules(this.rules)
    return this.validationProvider.validate(data)
  }
}
