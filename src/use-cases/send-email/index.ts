import { MailProvider } from '../../providers/implementations/MailProvider'
import SendEmailUseCase from './SendEmailUseCase'
import HashProvider from '../../providers/implementations/HashProvider'

const mailProvider = new MailProvider()

const hashProvider = new HashProvider()

const sendEmailUseCase = new SendEmailUseCase(mailProvider, hashProvider)

export default sendEmailUseCase
