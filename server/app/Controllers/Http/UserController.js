'use strict'
const User = use('App/Models/User')

class UserController {
    // this part is needed for login remembering
    async login({ request, auth, response }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
        await auth.getUser(auth.user)

        const user = await User.find(email)

        await auth.generate(user)
        response.send(user)
        // try {
        //     await auth.getUser()
        //   } catch (error) {
        //     response.send('Missing or invalid api token')
        //   }

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

    async deleteUser({ request, response, params: { id } }) {
        var deleteUserById = await User.find(id)
        await deleteUserById.delete()
        let users = await User.all()
        response.json({
            Message: "Who let the dawg's out!",
            users: users
        })
    }

    async updateUser({ request, response, params: { id } }) {
        var userToUpdate = await User.find(id)
        const { name, username, email, password, species, sex, city, state, age, bio } = request.post()
        userToUpdate.name = name
        userToUpdate.username = username
        userToUpdate.email = email
        userToUpdate.password = password
        userToUpdate.species = species
        userToUpdate.sex = sex
        userToUpdate.city = city
        userToUpdate.state = state
        userToUpdate.age = age
        userToUpdate.bio = bio

        await userToUpdate.save()
        let users = await User.all()
        response.send({
            users: users
        })

    }

}

module.exports = UserController
