'use strict'
const User = use('App/Models/User')
const Drive = use('Drive')
class UserController {
    // this part is needed for login remembering
    async login({ request, auth, response }) {
        const email = request.input("email")
        const password = request.input("password");
        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy('email', email)
                // await auth.attempt(email, password)
                // let user = await auth.getUser()
                let accessToken = await auth.generate(user)
                return response.json({ "message": "success", "access_token": accessToken })
            }

        }
        catch (e) {

            return response.json({ message: "Please try again we weren't able to login" })
        }
    }
    show({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
            return 'You cannot see someone else\'s profile'
        }
        return auth.user
    }
    async getUserById({ params: { id }, response }) {
        let user = await User.find(id)
        response.send(user)
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
        userToUpdate.url = url


        await userToUpdate.save()
        let users = await User.all()
        response.send({
            users: userToUpdate
        })

    }
    async imageUpload({ request, response }) {
        request.multipart.file('profile_pic', {}, async (file) => {
            await Drive.disk('s3').put(file.clientName, file.stream)
            const url = Drive.disk('s3').getUrl(file.clientName)
            response.send({ url })
        })
        await request.multipart.process()
    }
}

module.exports = UserController 
