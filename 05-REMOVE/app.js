var mongo = require('../node_modules/mongodb');
var mongoUrl = 'mongodb://localhost:27017/learnyoumongo';

var removeCollection = process.argv[3];
var _id = process.argv[4];

mongo.connect(mongoUrl, (err, db)=>{
    let collection = db.collection(removeCollection);
    collection.remove({_id: _id});
    db.close();     
});