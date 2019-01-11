'use strict'

const User = use("App/Models/User")

class RegisterController {
    
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
        
        response.send(request.input('name'))

    }
}

module.exports = RegisterController