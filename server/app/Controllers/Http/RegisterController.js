'use strict'

const User = use("App/Models/User")

class RegisterController {
    Create(){

    }
    async store({request, session, response}){
        const user = User.create({
            name: request.input('name'),
            username: request.input('username'),
            email: request.input('email'),
            password: request.input('password'),
            species: request.species('speices'),
            sex: request.sex('sex'),
            city: request.city('city'),
            state:request.state('state'),
            age: request.age('age'),
            bio: request.bio('bio')

        })
        response.send("user was subbmited to database")
    }
}

module.exports = RegisterController