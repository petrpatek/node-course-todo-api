//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connetct to mongodb server')
    }
    console.log(' Connected to Mongno server');
db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
    console.log(JSON.stringify(docs,undefined, 2));

})
db.collection('Users').find({name: 'Petr'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
})
 //db.close();
})