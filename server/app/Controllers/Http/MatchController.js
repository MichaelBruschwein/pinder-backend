'use strict'
const User = use("App/Models/User")
const Match = use("App/Models/Match")
const Database = use('Database')

class MatchController {
    async match({ request, response, auth }) {
        const id = parseInt(request.input('id'))
        //allUsers everyone except logged in user
        let allUsers = await Database.query().table('users').whereNot('id', id)
        //pendingMatches means the another user has created the row in the table and we need to fill it
        let user1LoggedInPendingMatches = await Database.query().table('matches').where('user1_id', id).where('user1_approval', null)
        //incompleteUser1 is where the user has already made a row but never liked or disliked
        let user2LoggedInPendingMatches = await Database.query().table('matches').where('user2_id', id).where('user2_approval', null)
        //matchesForUser is the quantity of all the users, except us
        let matchesForUser = await Database.query().table('matches').where('user1_id', id).orWhere('user2_id', id)

        let userToBeDisplayed;
        if (user1LoggedInPendingMatches.length > 0) {
            userToBeDisplayed = await User.find(user1LoggedInPendingMatches[0].user2_id)
        } else if (user2LoggedInPendingMatches.length > 0) {
            userToBeDisplayed = await User.find(user2LoggedInPendingMatches[0].user1_id)
        }

        if (user2LoggedInPendingMatches.length > 0) {
            response.send({ match: user2LoggedInPendingMatches[0], userToBeDisplayed, isUserOne: false })
            return
        } else if (user1LoggedInPendingMatches.length > 0) {
            response.send({ match: user1LoggedInPendingMatches[0], userToBeDisplayed, isUserOne: true })
            return
        } else if (allUsers.length === matchesForUser.length) {//all the rows in matches have already been made so there are no new matches available
            response.send({message:"empty"})
        } else {
            await this.findUserTwo(id, allUsers, response)
        }
    }

    async findUserTwo(id, allUsers, response) {
        let randomNumber = Math.floor(Math.random() * allUsers.length)
        let userToBeDisplayed = allUsers[randomNumber] 
        let matchExists1 = await Database.query().table('matches').where('user1_id', id).where('user2_id', userToBeDisplayed.id)
        let matchExists2 = await Database.query().table('matches').where('user1_id', userToBeDisplayed.id).where('user2_id', id)
        if (matchExists1.length || matchExists2.length) {
            await this.findUserTwo(id, allUsers, response) 
        } else {
            let match = await Match.create({
                user1_id: id,
                user2_id: userToBeDisplayed.id
            })
            response.send({ match, userToBeDisplayed, isUserOne: true })
        }
    }

    async like({ request, response }) {
        const like = request.input('like')
        const user1 = request.input('user1')
        const user2 = request.input('user2')
        const isUser2 = request.input('isUser2')
        let findUserToUpdate = null
        let matchToUpdate = null
        if (isUser2) {
            findUserToUpdate = await Database.query()
                .table('matches')
                .where('user1_id', user1)
                .where('user2_id', user2)
            matchToUpdate = await Match.find(findUserToUpdate[0].id)
            matchToUpdate.user1_approval = like
        } else {
            findUserToUpdate = await Database.query()
                .table('matches')
                .where('user1_id', user2)
                .where('user2_id', user1)
            matchToUpdate = await Match.find(findUserToUpdate[0].id)
            matchToUpdate.user2_approval = like
        }
        await matchToUpdate.save()
        let usersMatched = await Database.query()
        .table('matches')
        .where('user1_id', user1)
        .orWhere('user1_id',user2)
        .where('user2_id', user2)
        .orWhere('user2_id',user1)
        .where('user1_approval',1)
        .where('user2_approval',1)

        console.log(usersMatched)
        if(usersMatched.length){
            response.send("users matched")
        }else{
        response.send("user was liked")
        }
    }
}
module.exports = MatchController


