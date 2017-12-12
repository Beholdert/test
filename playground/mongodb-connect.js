const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5a1fa116ac1e7717204858c9")
    }).then((result) => {
        console.log(result);
    });

   
    db.close();
}); 