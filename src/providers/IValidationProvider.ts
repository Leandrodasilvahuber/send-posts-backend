export default interface IValidationProvider{
     setRules (rules: object): void
     validate (data: object): boolean
}
