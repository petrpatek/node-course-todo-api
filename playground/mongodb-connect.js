//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connetct to mongodb server')
    }
    console.log(' Connected to Mongno server');

db.collection('Todos').insertOne({
text: "Something to do",
    completed: false,
},(err, result) => {
        if (err) {
            return console.log('unable to insert')
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
})
db.collection('Users').insertOne({
    name: "Petr",
    age: 21 ,
    location: 'Praha'
}, (err, result) => {
        if (err) {
            console.log('Unable to write a log')
        }
        else {
            console.log('adding note succesfully')
        };
})
db.close();
})