export default interface ISendEmailUseCase {
  execute(data: { email: string; name: string }): Promise<void>
}
