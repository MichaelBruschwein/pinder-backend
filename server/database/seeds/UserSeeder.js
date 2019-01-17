'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  async run() {
    const userArray = [
      { name: 'Mike Bruschwein', username: 'Mike_Bruschwein_16', email: 'm.bruschwein16@gmail.com', password: 'password', species: 'Bernese Mountain Dog', sex: 'Male', city: 'Billings', state: 'MT', age: '5', bio: 'Loves long walks on the beach and beef jerkey' },
      { name: 'Robert Crum', username: 'gargansa', email: 'gargansa@hotmail.com', password: 'password', species: 'corgi', sex: 'Male', city: 'Avon', state: 'MT', age: '7', bio: 'Did you know corgis butts look like a loaf of bread?' },
      { name: 'Angela Montanye', username: 'AngieAnge', email: 'amontanye@aol.com', password: 'password', species: 'Shar pei', sex: 'Female', city: 'Helena', state: 'MT', age: '4', bio: 'Loves waking up early to watch Disney cartoons' },
      { name: 'Cory Cotterell', username: 'CorrDawg', email: 'corrdawg13@askjeeves.com', password: 'password', species: 'French Bulldog', sex: 'Male', city: 'Bozeman', state: 'MT', age: '0', bio: 'Loves staying up late hanging out with the females' },
      { name: 'Doggo MaGee', username: 'doggo', email: 'dog@diggitydog.com', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' },
      { name: 'Chinchita', username: 'Chichi', email: 'chinchita@churro.com', password: 'password', species: 'Chihuahua', sex: 'Female', city: 'Bozeman', state: 'MT', age: '3', bio: 'Yo quiero Taco Bell' },
      { name: 'aaa', username: 'aaa', email: 'aaa', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' },
      { name: 'bbb', username: 'bbb', email: 'bbb', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' },
      { name: 'ccc', username: 'ccc', email: 'ccc', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' },
      { name: 'ddd', username: 'ddd', email: 'ddd', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' },
      { name: 'eee', username: 'eee', email: 'eee', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' },
      { name: 'fff', username: 'fff', email: 'fff', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' },
      { name: 'ggg', username: 'ggg', email: 'ggg', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' },
      { name: 'hhh', username: 'hhh', email: 'hhh', password: 'password', species: 'Golden Retriever', sex: 'Female', city: 'Bozeman', state: 'MT', age: '5', bio: 'Shut up and throw the frisbee already' }
    ]
    for (var i = 0; i < userArray.length; i++) {
      await Factory.model('App/Models/User').create({ name: userArray[i].name, username: userArray[i].username, email: userArray[i].email, password: userArray[i].password, species: userArray[i].species, sex: userArray[i].sex, city: userArray[i].city, state: userArray[i].state, age: userArray[i].age, bio: userArray[i].bio })
    }
  }
}

module.exports = UserSeeder
