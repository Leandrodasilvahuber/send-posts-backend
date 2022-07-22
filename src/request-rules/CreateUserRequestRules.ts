import ValidationProvider from '../providers/implementations/ValidationProvider'

export default class CreateUserRequestRules extends ValidationProvider {
  public rules = {
    name: 'required',
    password: 'required',
    email: 'required|email'
  }
}
