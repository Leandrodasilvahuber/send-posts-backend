import userModel from '../../database/models/user'
import { IDatabaseProvider } from '../IDatabaseProvider'

export class DatabaseProvider implements IDatabaseProvider {
  private connection: any
  private dialect: string = 'mysql'

  public dataTypes: any
  public model: any
  public Sequelize: any
  public op: any
  public mapper: any
  public uniqueEntityID: any

  constructor () {
    require('dotenv').config()
    this.configImports()
    this.makeConnection()
    this.configModels()
  }

  private configImports () {
    const {
      Sequelize,
      DataTypes,
      Model,
      Op,
      Mapper,
      UniqueEntityID
    } = require('sequelize')

    this.dataTypes = DataTypes
    this.model = Model
    this.Sequelize = Sequelize
    this.op = Op
    this.mapper = Mapper
    this.uniqueEntityID = UniqueEntityID
  }

  private configModels () {
    this.connection.define('User', userModel)
  }

  private makeConnection () {
    this.connection = new this.Sequelize(
      process.env.DB_DATABASE,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: this.dialect
      }
    )
  }

  getConnection () {
    return this.connection
  }
}
