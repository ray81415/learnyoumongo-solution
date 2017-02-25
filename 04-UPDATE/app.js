var mongo = require('../node_modules/mongodb');
var mongoUrl = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(mongoUrl, (err, db)=>{
    let users = db.collection('users');
    users.update({name: 'Tina', age: 30, username: 'tinatime'}, {$set: {age: 40}});
    db.close();     
});