import { IHashProvider } from '../IhashProvider'

export class HashProvider implements IHashProvider {
  private shajs = require('sha.js')

  makesha256 (parammeter: any): string {
    return this.shajs('sha256').update(parammeter).digest('hex')
  }
}
