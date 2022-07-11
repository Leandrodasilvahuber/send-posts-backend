export interface IDatabaseProvider {
  dataTypes: any
  model: any
  Sequelize: any
  op: any
  mapper: any;
  uniqueEntityID: any

  getConnection(): any
}
