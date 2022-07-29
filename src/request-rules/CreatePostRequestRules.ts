import RequestRules from './RequestRule'

export default class CreatePostRequestRules extends RequestRules {
  constructor () {
    super()
    this.rules = {
      title: 'required',
      message: 'required'
    }
  }
}
