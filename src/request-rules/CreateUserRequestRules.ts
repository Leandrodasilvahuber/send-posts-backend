import RequestRules from './RequestRule'

export default class CreateUserRequestRules extends RequestRules {
  constructor () {
    super()
    this.rules = {
      name: 'required',
      password: 'required',
      email: 'required|email'
    }
  }
}
