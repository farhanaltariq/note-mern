const db = require("../config/database");
class Note {
    static getAll = (req, res) => {
        try {
            req.params.collection = "notes";
            db.getCollection(req, res);
        } catch (err) {
            res.send(err);
        }
    };
    static create = (req, res) => {
        try {
            req.params.collection = "notes";
            db.insertDocument(req, res);
        } catch (err) {
            res.send(err);
        }
    };
    static delete = (req, res) => {
        try {
            req.params.collection = "notes";
            db.deleteDocument(req, res);
        } catch (err) {
            res.send(err);
        }
    };
}
module.exports = Note;
