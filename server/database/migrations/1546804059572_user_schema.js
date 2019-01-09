'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table.string('name', 80).notNullable()
      table.string('species', 60).notNullable()
      table.string('sex', 20).notNullable()
      table.string('location', 80).notNullable()
      table.integer('age').notNullable()
      table.string('bio', 500)
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
