const Note = require("../models/Note");

class NoteController {
    static getAll = (req, res) => {
        try {
            Note.getAll(req, res);
        } catch (err) {
            res.send(err);
        }
    };
    static create = (req, res) => {
        try {
            Note.create(req, res);
        } catch (err) {
            res.send(err);
        }
    };
    static delete = (req, res) => {
        try {
            Note.delete(req, res);
        } catch (err) {
            res.send(err);
        }
    };
}

module.exports = NoteController;
