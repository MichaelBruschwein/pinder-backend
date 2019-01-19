'use strict'
const User = use("App/Models/User")
const Match = use("App/Models/Match")
const Database = use('Database')
class MatchController {
    async match({ request, response, auth }) {
        //pseudo Code it up master coders
        //We are trying to get a single match from the database
        //we get our user
        //we attempt to get the random second user (or first)
        //one that we dont have a like dislike on

        //example we are user 4
        //looking for a random user 6 (trolling pants) found er

        //check the matches table for [4 and 6] and also for [6 and 4] (created by the other user) 
        //this would be the relationship

        const id = parseInt(request.input('id'))/// login as 4 this is
        // let user = await User.find(id)
        // let sex 
        // if (user.sex === "Male") {
        //     sex = "Female"
        // } else {
        //     sex = "Male"
        // }

        // let previosMatches = await Database.query().table('matches').where('user1_id', id)

        //Finds the random potential match
        let allUsers = await User.all()
        let randomNumber = id
        if (allUsers.rows.length > 1) {
            while (randomNumber === id) {
                randomNumber = Math.floor(Math.random() * allUsers.rows.length)
            }
        }else{
            response.send("man thats ruff no matches :( ")
        }
        let user2 = allUsers.rows[randomNumber]
       // response.send(user2)

        //Checks to see if a table exist for the user to user2 relationship
        //returns empty array if it doesnt exist
        let matchExists1 = await Database.query().table('matches').where('user1_id', id).where('user2_id', user2.id)
        let matchExists2 = await Database.query().table('matches').where('user1_id', user2.id).where('user2_id', id)
        //response.send({matchExists1, matchExists2})
        //Condition One: Either neither will exists or only one will exist.
        //If none exist, we will create one.
        //If it does exist we use one.
        if (matchExists1.length || matchExists2.length) {
            response.send(matchExists1)
        } else {
            let match = await Match.create({
                user1_id: id,
                user2_id: user2.id
            })
            response.send({match,user2})
        }

        // let matches = await Database.query().table('users').where('Sex', sex)
        // let usersToMatches = await Database.query().table('matches').where('user1_id', user.id).where('user1_approval', null)
        // The user clicks some button saying find matches.
        // An axios call is called to ping to our database.
        // in this controller we want to take in the user.
        // if there is a match where user1 is matched with user2 then we want to skip that create.
        //we take the current users in the database compare to previous matches
        //then we want to filter if pervious matches are equal to current users omit them
        //the send the filtered uses into matches.

        // if (previosMatches.length >= 1) {

        //     function checkValue(value) {
        //         let check = true
        //         previosMatches.forEach(element => {

        //             if (element.user2_id === value.id) {
        //                 check = false
        //             }
        //         });
        //         return check
        //     }
        //     let newMatches = matches.filter(checkValue)

        //     if (newMatches.length >= 1) { //NOTE: The user had previous matches but there was a new person added 

        //         await newMatches.forEach((user2) => {

        //             Match.create({
        //                 user1_id: user.id,
        //                 user2_id: user2.id
        //             })
        //             response.send(usersToMatches.map((e) => e.user2_id))
        //         })
        //         // response.send(usersToMatches.map((e) => e.id))
        //     } else { //NOTE: The user had no new matches
        //         // response.send(usersToMatches.map((e) => e.user2_id))
        //     }

        // } else { //NOTE: The user had no previous matches
        //     await matches.forEach((user2) => {
        //         Match.create({
        //             user1_id: user.id,
        //             user2_id: user2.id,
        //         })
        //         response.send(usersToMatches.map((e) => e.user2_id))
        //     })
        // }
        //     }

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

