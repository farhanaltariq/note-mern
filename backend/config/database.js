const { MongoDBNamespace } = require("mongodb");

const url = "127.0.0.1:27017";
const dbName = "note";
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb://${url}/${dbName}`;
const client = new MongoClient(uri, { useNewUrlParser: true });

class Database {
    static getCollection = (req, res) => {
        client.connect((err) => {
            client
                .db(dbName)
                .collection(req.params.collection)
                .find()
                .toArray((err, result) => {
                    if (err) {
                        res.send(err);
                    } else {
                        return res.send(result);
                    }
                });
        });
    };
    static insertDocument = (req, res) => {
        client.connect((err) => {
            client
                .db(dbName)
                .collection(req.params.collection)
                .insertOne(req.body, (err, result) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(result);
                    }
                });
        });
    };
    static deleteDocument = (req, res) => {
        client.connect((err) => {
            client
                .db(dbName)
                .collection(req.params.collection)
                .deleteOne(req.body, (err, result) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(result);
                    }
                });
        });
    };
}
module.exports = Database;
