const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');

const db=mongoose.connection;

db.on('error',console.error.bind(console.log("error connectin to MongoDb")))

db.once('open',function(){_
console.log("connect to database:: MongoDb")

});

module.exports=db;