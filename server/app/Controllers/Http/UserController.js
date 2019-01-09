'use strict'
const User = use('App/Models/User')

class UserController {
    async getUser({ request, response }) {
        let users = await User.all()
        response.send({
            users: users
        })
    }
}

module.exports = UserController
