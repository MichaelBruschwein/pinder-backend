'use strict'

const User = use("App/Models/User")
class RegisterController {
    Create(){

    }
    async store({request, session, response}){
        const user = User.create({
            username: request.input('email'),
            email: request.input('email'),
            password: request.input('password')

        })
        session.flash({successMessage:"User was Added"})
    }
}

module.exports = RegisterController
