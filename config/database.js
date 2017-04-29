var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// connection URL
var url = 'mongodb://localhost:27017/db';

// use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    insertDocuments(db, function () {
        findDocuments(db, function () {
            db.close();
        });
    });
});

//test db
var insertDocuments = function (db, callback) {
    //get docs
    var collection = db.collection('documents');
    //insert docs
    collection.insertMany([
        { a: 1 }, { b: 2 }, { c: 3 }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("inserted 3 documents into the collection");
        callback(result);
    });
}

var findDocuments = function (db, callback) {
    //Get docs
    var collection = db.collection('documents');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
}