'use strict'

const User = use("App/Models/User")
const Hash = use("Hash")
const Database = use("Database")
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
            bio: request.input('bio'),
            url: request.input('url')
        })

        //response.send(request.input('username'))
        response.send({
            user: user
        })

    }
    
    async login({ request, auth, response, session }) {
        const { email, password, remember } = request.all()
        const user = await Database.query()
            .table('users')
            .where('email', email)
        if (user) {
            const passwordVerified = await Hash.verify(password, user[0].password)
            if (passwordVerified) {
                return response.send(user)

            } else {
                return response.send("password did not match")
            }
        } else {
            response.send("we couldn't find user")
        }

    }
    // show ({ auth, params }) {
    //     if (auth.user.id !== Number(params.id)) {
    //       return 'You cannot see someone else\'s profile'
    //     }
    //     return auth.user
    //   }
}

module.exports = RegisterController