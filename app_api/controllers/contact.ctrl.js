const db = require("../models");

module.exports = {
    
    createContact: (req, res) => {
        db
            .Contact
            .create(req.body)
            .then(dbEmp => {
                res.json(dbEmp);
            })
            .catch(err => {
                console.error(err);
            });
    }, // END CREATE

    findAllContacts: (req, res) => {
        db
            .Contact
            .findAll({})
            .then(dbEmp => {
                res.json(dbEmp);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END FIND ALL

    findOneContact: (req, res) => {
        db
            .Contact
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbEmp => {
                res.json(dbEmp);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END FIND ONE

    deleteContact: (req, res) => {
        db
            .Contact
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbEmp => {
                res.json("Success!");
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    } // END DELETE
    
}; // END EXPORT
