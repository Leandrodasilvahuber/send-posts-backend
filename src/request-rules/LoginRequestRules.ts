import RequestRules from './RequestRule'

export default class LoginRequestRules extends RequestRules {
  constructor () {
    super()
    this.rules = {
      password: 'required',
      email: 'required|email'
    }
  }
}
