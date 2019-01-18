'use strict'
const User = use("App/Models/User")
const Match = use("App/Models/Match")
const Database = use('Database')
class MatchController {
    async match({ request, response, auth }) {
        const id = await request.input('id')
        let user = await User.find(id)
        let sex
        if (user.sex === "Male") {
            sex = "Female"
        } else {
            sex = "Male"
        }

        let previosMatches = await Database.query().table('matches').where('user1_id', user.id)
        let matches = await Database.query().table('users').where('Sex', sex)
        let usersToMatches = await Database.query().table('matches').where('user1_id', user.id).where('user1_approval', null)
        // The user clicks some button saying find matches.
        // An axios call is called to ping to our database.
        // in this controller we want to take in the user.
        // if there is a match where user1 is matched with user2 then we want to skip that create.
        //we take the current users in the database compare to previous matches
        //then we want to filter if pervious matches are equal to current users omit them
        //the send the filtered uses into matches.

        if (previosMatches.length >= 1) {

            function checkValue(value) {
                let check = true
                previosMatches.forEach(element => {

                    if (element.user2_id === value.id) {
                        check = false
                    }
                });
                return check
            }
            let newMatches = matches.filter(checkValue)

            if (newMatches.length >= 1) { //NOTE: The user had previous matches but there was a new person added 

                await newMatches.forEach((user2) => {

                    Match.create({
                        user1_id: user.id,
                        user2_id: user2.id
                    })
                    response.send(usersToMatches.map((e)=>e.id))
                })
            } else { //NOTE: The user had no new matches
                response.send("There Was No New Matches Check Back Later")
            }

        } else { //NOTE: The user had no previous matches
            await matches.forEach((user2) => {
                Match.create({
                    user1_id: user.id,
                    user2_id: user2.id,
                })
                response.send(usersToMatches.map((e)=>e.id))
            })
        }

    }

}

module.exports = MatchController
//First The user will be logged in and click on finder component
//Then we send a post call to the database to create matches for the user
//The backend creates the matches
//Then after we create the matches we send back the matches if the user hasn't already said yes or no.
//If the user1 has said either yes or no to user2 then we would send the response of no new matches check back later
//Else we send back to the front end the matches

