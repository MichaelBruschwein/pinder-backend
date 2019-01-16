'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateMatchSchema extends Schema {
  up () {
    this.create('matches', (table) => {
      table.increments()
      table.integer('user1_id').unsigned()
      table.foreign('user1_id').references('users.id')
      table.integer('user2_id').unsigned()
      table.foreign('user2_id').references('users.id')
      table.boolean("user1_approval")
      table.boolean("user2_approval")
      table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }
}

module.exports = CreateMatchSchema
