import ValidationProvider from '../providers/implementations/ValidationProvider'

export default class LoginRequestRules extends ValidationProvider {
  public rules = {
    password: 'required',
    email: 'required|email'
  }
}
