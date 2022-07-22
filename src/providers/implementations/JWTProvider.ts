export default class JWTProvider {
  private jwt

  constructor () {
    this.jwt = require('jsonwebtoken')
  }

  public verifyJWT (request, response, next): void {
    const token = request.headers['x-access-token']

    if (!token) throw new Error('No token provided.')

    this.jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error('Failed to authenticate token.')

      request.userId = decoded.id

      next()
    })
  }

  public makeToken (id: number): string {
    return this.jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: 600 // expires in 10 min
    })
  }
}
