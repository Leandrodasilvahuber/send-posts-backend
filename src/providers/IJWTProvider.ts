export default interface IJWTProvider {
    verifyJWT (request: any, response: any, next: any): void
    makeToken (id: number): string
}
