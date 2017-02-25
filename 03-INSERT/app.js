var mongo = require('../node_modules/mongodb');
var mongoUrl = 'mongodb://localhost:27017/learnyoumongo';

var firstName = process.argv[2];
var lastName = process.argv[3];
var doc = {firstName: firstName, lastName: lastName};
mongo.connect(mongoUrl, (err, db)=>{
    let docs = db.collection('docs');
    docs.insert(doc, (err, data)=>{
        console.log(JSON.stringify(data));
        // JSON.stringify(data) is a BUG, because it cannot convert data to JSON !!!
        // If you want to pass the test, you will write console.log(JSON.stringify(doc)).
        db.close();
    });      
});