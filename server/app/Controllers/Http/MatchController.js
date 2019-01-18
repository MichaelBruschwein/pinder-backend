'use strict'
const User = use("App/Models/User")
const Match = use("App/Models/Match")
const Database = use('Database')
class MatchController {
    async match({ request, response, auth }) {
        const id = await request.input('id')
        let user = await User.find(id)
        let sex
        if(user.sex === "Male"){
            sex = "Female"
        }else{
            sex = "Male"
        }

        let previosMatches = await Database.query().table('matches').where('user1_id', user.id)
        let matches = await Database.query().table('users').where('Sex', sex)

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

            if (newMatches.length >= 1) {

                await newMatches.forEach((user2) => {

                    Match.create({
                        user1_id: user.id,
                        user2_id: user2.id
                    })
                })
            } else {
                response.send("no new matches")
            }

        } else {
            await matches.forEach((user2) => {
                Match.create({
                    user1_id: user.id,
                    user2_id: user2.id,
                })
            })
        }

    }

}

module.exports = MatchController
