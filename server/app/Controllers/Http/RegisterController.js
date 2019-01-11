'use strict'

const User = use("App/Models/User")

class RegisterController {
    // Create(){

    // }
    async store({ request, session, response }) {
        const user = await User.create({
            name: request.input('name'),
            username: request.input('username'),
            email: request.input('email'),
            password: request.input('password'),
            species: request.input('species'),
            sex: request.input('sex'),
            city: request.input('city'),
            state: request.input('state'),
            age: request.input('age'),
            bio: request.input('bio')
        })
        //const newUser = await User.create({ name, username, email, password, species, sex, city, state, age, bio })
        // await user.save()
        response.send(request.input('name'))
        // const {name, username, email, password, species, sex, city, state, age, bio} = request.post()
        //const newUser = await User.create({ name, username, email, password, species, sex, city, state, age, bio })
        // let users = await User.all()

        // response.send({users:user})

    }
}

module.exports = RegisterController