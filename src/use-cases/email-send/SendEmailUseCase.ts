/* eslint-disable no-useless-constructor */
import IHashProvider from '../../providers/IhashProvider'
import { IMailProvider } from '../../providers/IMailProvider'

export default class SendEmailUseCase {
  constructor (
    private mailProvider: IMailProvider,
    private hashProvider: IHashProvider
  ) {}

  async execute (data: { email: string; name: string }): Promise<void> {
    this.mailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Leandro Huber',
        email: 'emaildohuber@gmail.com'
      },
      subject: 'Cadastro efetuado com sucesso',
      body: `Click no link para validar seu cadastro:${await this.urlGenerate(
        data.email
      )}`
    })
  }

  private async urlGenerate (email: string) {
    const port = process.env.PORT
    const hash = this.hashProvider.makesha256(email)
    return `${process.env.URL_API}:${port}/users/validate/${hash}`
  }
}
