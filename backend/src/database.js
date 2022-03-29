const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular-auth', {

})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err));  