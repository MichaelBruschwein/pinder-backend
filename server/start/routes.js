'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/user', 'RegisterController.store')
Route
  .get('users/:id', 'RegisterController.show')
  .middleware('auth')

Route.post('/loginn', 'UserController.login')

Route.get('/match', 'MatchController.match').middleware('auth')
// Route.post('/handleLogin', 'RegisterController.login' )

Route.get('/user', "UserController.getUser").middleware('auth')

Route.get('/user/:id', 'UserController.getUserById')

Route.delete('/deleteUser/:id', "UserController.deleteUser")

Route.put('/updateUser/:id', "UserController.updateUser")

Route.get('/findPets', "FinderController.findPets")

Route.put('/like', 'MatchController.like')

Route.post('/imageUpload', 'UserController.imageUpload')

