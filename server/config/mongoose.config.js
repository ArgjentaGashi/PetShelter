const mongoose = require('mongoose');
//VERY IMPORTANT FOR SOME WINDOWS USERS
const mongoURI = 'mongodb://127.0.0.1:27017/pets';
// const mongoEndpoint = 'mongodb://localhost/';
const dbName = 'pets';

mongoose
  .connect(mongoURI + dbName)
  .then(() => console.log(`Connected to the ${dbName} db`))
  .catch((err) => console.log('ERROR IN CONNECTION TO DB', err));