'use strict'
const User = use("App/Models/User")
const Match = use("App/Models/Match")
const Database = use('Database')
class MatchController {
    async match({ request, response, auth }) {
        const id = await request.input('id')
        let user = await User.find(id)
        // The user clicks some button saying find matches.
        // An axios call is called to ping to our database.
        // in this controller we want to take in the user.
        // if there is a match where user1 is matched with user2 then we want to skip that create.
        let previosMatches = await Database.query().table('matches').where('user1_id', user.id)
        let matches = await Database.query().table('users').where('Sex', 'Female')

        if (previosMatches.length >= 1) { // checks to see if there is any matches in database

            previosMatches.forEach((data, i) => { // checks to see if the matches in the database already exist
                if (data.user2_id === matches[i].id) {
                    console.log(`user have already matches with ${data.user2_id}`)
                }
                // if(data.user2_id === matches.
            })
        }

        // let make = await matches.forEach((user2)=>{
        //     Match.create({
        //         user1_id:user.id,
        //         user2_id:user2.id,
        //     })
        // })
        // response.send("making them bad boys")

        // We want to first make sure if there is any previous pets to not match them again.
        // Then we want to create a row for each potiental match for the user.
        // let match = await Match.createMany()
        // Match.createMany
        // then send a response back to our front end with all the matches.
        // const {user} = request.all()

    }
}

module.exports = MatchController
