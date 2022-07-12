/* eslint-disable no-useless-constructor */
import { IHashProvider } from '../../providers/IhashProvider'
import { MailProvider } from '../../providers/implementations/MailProvider'
import { ISendEmailUseCase } from './ISendEmailUseCase'

export class SendEmailUseCase implements ISendEmailUseCase {
  constructor (
    private mailProvider: MailProvider,
    private hashProvider: IHashProvider
  ) {}

  async execute (data: { email: string; name: string }): Promise<void> {
    this.mailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe do Alumminium app',
        email: 'emaildohuber@gmail.com'
      },
      subject: 'Cadastro efetuado com sucesso em Alumminium',
      body: `Click no link para validar seu cadastro:${this.urlGenerate(
        data.email
      )}`
    })
  }

  private async urlGenerate (email: string) {
    const port = process.env.PORT || process.env.LOCAL_PORT
    const hash = this.hashProvider.makesha256(email)
    return `${process.env.URL_API}:${port}/users/validate/${hash}`
  }
}
