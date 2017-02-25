var mongo = require('../node_modules/mongodb');
var mongoUrl = 'mongodb://localhost:27017/learnyoumongo';

var age = parseInt(process.argv[2]);
mongo.connect(mongoUrl, (err, db)=>{
    let parrots = db.collection('parrots');
    parrots.find({age: {$gt: age}}).toArray((err, docs)=>{
        console.log(docs);
    });    
    db.close();    
});