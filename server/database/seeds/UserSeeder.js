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
    const dinoArray = [
      { name: 'Mike Bruschwein', username: 'Mike_Bruschwein_16', email: 'm.bruschwein16@gmail.com', password: 'iHeartDawgs', species: 'Bernese Mountain Dog', sex: 'Male', loaction: 'Billings, MT', age: '5', bio: 'Loves long walks on the beach and beef jerkey' },
      { name: 'Robert Crum', username: 'gargansa', email: 'gargansa@hotmail.com', password: 'imReallyACatLover', species: 'corgi', sex: 'male', loaction: 'Avon, MT', age: '7', bio: 'Did you know corgis butts look like a loaf of bread?' },
      { name: 'Angela Montanye', username: 'AngieAnge', email: 'amontanye@aol.com', password: 'password', species: 'Shar pei', sex: 'female', loaction: 'Helena, MT', age: '4', bio: 'Loves waking up early to watch Disney cartoons' },
      { name: 'Cory Cotterell', username: 'CorrDawg', email: 'corrdawg13@askjeeves.com', password: 'iLoveTheMovieTheater', species: 'French Bulldog', sex: 'male', loaction: 'Bozeman, MT', age: '0', bio: 'Loves staying up late hanging out with the females' }
    ]
  }
}

module.exports = UserSeeder
