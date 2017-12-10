const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');

    db.collection('Users').findOne({username: 'Mike'}).then((count) => {
        console.log(count);
    }, (err) => {
        console.log("Unable to fetch data");
    });

    db.close();
});