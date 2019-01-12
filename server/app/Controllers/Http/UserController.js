'use strict'
const User = use('App/Models/User')

class UserController {
    // this part is needed for login remembering
    async login({ request, auth }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)

        return 'Logged in successfully'
    }
    show({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
            return 'You cannot see someone else\'s profile'
        }
        return auth.user
    }

    async getUser({ request, response }) {
        let users = await User.all()
        response.send({
            users: users
        })
    }

    async createUser({ request, response }) {
        response.send('create user text')
    }



}

module.exports = UserController
