const MongoLib = require('../lib/mongo')
const bcrypt = require('bcrypt')

class UsersService {
  constructor () {
    this.collection = 'users'
    this.mongoDB = new MongoLib()
  }

  async getUser ({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email })
    return user
  }

  async createUser ({ user }) {
    const { password } = user
    const hashedPassword = await bcrypt.hash(password, 10)

    const createUserId = await this.mongoDB.create(this.collection, {
      ...user,
      password: hashedPassword
    })

    return createUserId
  }

  async getOrCreateUser ({ user }) {
    let queriedUser = await this.getUser({ email: user.email })

    if (queriedUser) return queriedUser

    await this.createUser({ user })
    queriedUser = await this.getUser({ email: user.email })
    return queriedUser
  }
}

module.exports = UsersService
