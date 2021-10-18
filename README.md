# Full-Stack MERN Challenge Proyect Resume

This proyect consist in a site mede with MERN stack with the next properties:

 * Must have a sign up/sign in for users
 * Signed parents must be able to see:
    * Their data.
    * Data of their childrens.
    * Modify the their profile data.
    * Modify the their childrens profile data.
 * Signed children must be able to see:
    * Their data.
 * One API endpoint to retrieve children list with a limit of 10.

### How was solved

#### Front-End

When a visitor enters the site, if it is not logged, will be redirected to the sign in page, there will be able to choose two options, sign in as a parent or sign in as a child. If it is not registered, then at the parent sign in form will see an option to create a parent account.
After registration, the user will be moved to the home page as an authorized user, there will be displayed information about his profile and a table with his childrens, also at the top will be a navigation bar with a few options: return to home, edit profile, register child, sign out.
The edit profile page provides to the user a form to change his information and authorization credentials.
The register child page provides a form to register a new child under his guardianship.
Back to the home, if the childrens table is filled, there will be two tools, one for edit the childrens data and other to delete it.

If a user sign in as a child, at the homepage will be displayed only his data and some parent information.

#### Back-End

The server will provide different routes and checkpoints to correctly provide information to the client, the first thing that the server does when a user makes a call to some route is to check if there is any json web token, if there is, then stores it's data to later use. If a route is protected and requires authorization/or not, a set of middlewares will check if the user data from the JWT (if it exist) has the correct permission, if it does, the route will make the related logic, if not the user will be redirected (if it's an api call, it returns 403 instead redirection).
There is two controllers to manage the users data around the app, one for parents and other for childrens, if some error occurs, a json object with error data will be returned. 

#### How to run

##### Run the app with `npm start`

IMPORTANT: You can run the app your own with a few considerations, the app is written to use a mongodb url to connect a database called `fullstack-mern-challenge-db`, by default uses a local database but you can modify the url and some aspects of the connection at the `src/backend/database/database.ts` and `src/backend/assets/DATABASE.ts` files.

if changes are mede, run the `npm run build` command to build the backend changes.

#### Tests

Test for any use case (by this app) are written at \__test__ folder, if you want to run them there is a few considerations, some test requires existent data in the data to work properly, all tests are default skiped, you can unskip them one by one starting from parents tests and fill some variables to run later tests.
