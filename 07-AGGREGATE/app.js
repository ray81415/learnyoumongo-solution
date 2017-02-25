var mongo = require('../node_modules/mongodb');
var mongoUrl = 'mongodb://localhost:27017/learnyoumongo';

var size = process.argv[2];
mongo.connect(mongoUrl, (err, db)=>{
    let prices = db.collection('prices');
    prices.aggregate([
        {$match: {size: size}}, 
        {$group: {
            _id: 'total',        
            avg: {$avg: "$price"}
        }}])
    .toArray((err, results)=>{
        let avg = Number(results[0].avg).toFixed(2);
        console.log(avg);
    });
    db.close();     
});