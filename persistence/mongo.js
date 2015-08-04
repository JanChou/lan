var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = 'mongodb://localhost:27017/myproject';
function MongoPersistence () {

}

MongoPersistence.prototype.insert = function(payload) {
  console.log(payload);

  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");
    var insertDocuments = function(db, callback) {
      var collection = db.collection('documents');
      collection.insert(payload, function(err, result) {
        console.log("Inserted 1 documents into the document collection:", payload);
        callback(result);
      });
    };
    insertDocuments(db, function() {
      db.close();
    });
  });
};


module.exports = MongoPersistence;
