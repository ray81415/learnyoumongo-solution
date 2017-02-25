var mongo = require('../node_modules/mongodb');
var mongoUrl = 'mongodb://localhost:27017/learnyoumongo';

var age = +process.argv[2];

mongo.connect(mongoUrl, (err, db)=>{
    let parrots = db.collection('parrots');
    parrots.count({age: {$gt: age}}, (err, count)=>{
        console.log(count);
    });
    db.close();     
});