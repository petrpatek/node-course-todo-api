const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connetct to mongodb server')
    }
    console.log(' Connected to Mongno server');

db.collection('Todos').deleteMany({text:"Something to do"}).then((result) =>{
    console.log(result);
})
})