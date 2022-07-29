import RequestRules from './RequestRule'

export default class DeletePostRequestRules extends RequestRules {
  constructor () {
    super()
    this.rules = {
      id: 'required'
    }
  }
}
