const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID("5a1fa116ac1e7717204858c9")
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').insert({
    //     name: 'John', 
    //     age: 20, 
    //     hobby: 'coding'
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'John'
    }, {
        $set: {
            name: 'Alex'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

   
    db.close();
}); 