const mongodb = require("../mongodb.connection");
const conn = mongodb.connection;
const ObjectId = mongodb.ObjectId;

module.exports = {
  getAll: getAll,
  post: post,
  put: put,
  deleteInfo: deleteInfo,
  readById: readById
};

///////GET////////
function getAll() {
  return conn
    .db()
    .collection("customerInfo")
    .find()
    .toArray()
    .then(users => {
      for (let i = 0; i < users.length; i++) {
        let user = users[i];
        user._id = user._id.toString(); // convert ObjectId back to string
      }
      return users;
    });
}

function readById(id) {
  return conn
    .db()
    .collection("customerInfo")
    .findOne({ _id: new ObjectId(id) })
    .then(user => {
      user._id = user._id.toString(); // convert ObjectId back to string
      return user;
    });
}

////POST/////
function post(user) {
  return conn
    .db()
    .collection("customerInfo")
    .insertOne(user)
    .then(result => result.insertedId.toString());
}

////PUT/////
function put(doc) {
  // convert string id used outside of MongoDB into ObjectId needed by MongoDB
  // const _id = new ObjectId(doc._id);
  // delete doc._id;
  doc._id = ObjectId(doc._id);

  return conn
    .db()
    .collection("customerInfo")
    .updateOne({ _id: doc._id }, { $set: doc })
    .then(result => Promise.resolve()); // "return" nothing
}

/////DELETE/////
function deleteInfo(id) {
  return conn
    .db()
    .collection("customerInfo")
    .deleteOne({ _id: new ObjectId(id) })
    .then(result => Promise.resolve()); // "return" nothing
}
