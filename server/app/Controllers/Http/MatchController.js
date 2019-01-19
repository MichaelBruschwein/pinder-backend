'use strict'
const User = use("App/Models/User")
const Match = use("App/Models/Match")
const Database = use('Database')


class MatchController {



    async match({ request, response, auth }) {
        const id = parseInt(request.input('id'))
        let allUsers = await User.all()
        let qtyUsers = allUsers.rows.length-1
        let matchesForUser = await Database.query().table('matches').where('user1_id', id).orWhere('user2_id',id)
        // response.send({qtyUsers,matchesForUser:matchesForUser.length})
        if (qtyUsers===matchesForUser.length){
            response.send("No new matches available at this point")
        }else{
            await this.findUserTwo(id,allUsers,response)
        }
    }

    async findUserTwo(id,allUsers,response) {
        let randomNumber = id
        if (allUsers.rows.length > 1) {
            while (randomNumber === id) {
                randomNumber = Math.floor(Math.random() * allUsers.rows.length)
            }
        } else {
            response.send("man thats ruff no matches :( ")
        }
        let user2 = allUsers.rows[randomNumber]
        //Checks to see if a table exist for the user to user2 relationship
        //returns empty array if it doesnt exist
        let matchExists1 = await Database.query().table('matches').where('user1_id', id).where('user2_id', user2.id)
        let matchExists2 = await Database.query().table('matches').where('user1_id', user2.id).where('user2_id', id)

        //Condition One: Either neither will exists or only one will exist.
        //If none exist, we will create one.
        //If it does exist we use one.
        //turn this into a function
        if (matchExists1.length || matchExists2.length) {
            //conditional to make sure we havent checked all the matches already
            await this.findUserTwo(id,allUsers,response) //recursive call until a new match
        } else {
            let match = await Match.create({
                user1_id: id,
                user2_id: user2.id
            })
            response.send({ match, user2 })
        }
    }



    async like({ request, response }) {
        const user1 = request.input('user1')
        const user2 = request.input('user2')
        let findUserToUpdate = await Database.query()
            .table('matches')
            .where('user1_id', user1)
            .where('user2_id', user2)
        console.log(findUserToUpdate)
        var matchToUpdate = await Match.find(findUserToUpdate[0].id)
        matchToUpdate.user1_approval = true
        await matchToUpdate.save()
        response.send('User was liked')
    }

}

module.exports = MatchController

//First The user will be logged in and click on finder component
//Then we send a post call to the database to create matches for the user
//The backend creates the matches
//Then after we create the matches we send back the matches if the user hasn't already said yes or no.
//If the user1 has said either yes or no to user2 then we would send the response of no new matches check back later
//Else we send back to the front end the matches

