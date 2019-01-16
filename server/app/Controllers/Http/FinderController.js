'use strict'

const User = use("App/Models/User")
const Hash = use("Hash")
const Database = use("Database")

class FinderController {
    async findPets({ request, response }) {
        const { sex } = request.all()
        if (sex === 'Male') {
            let pets = await Database.query()
                .table('users')
                .where('sex', "Female")
            response.send(pets)
        } else {
            let pets = await Database.query()
                .table('users')
                .where('sex', "Male")
            response.send(pets)
        }
    }
    async match({request,response,auth}){
        response.send(auth.user)
        // const {user} = request.all()

    }
}

module.exports = FinderController
