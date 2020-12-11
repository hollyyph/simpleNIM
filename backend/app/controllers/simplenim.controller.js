const db = require("../models");
const SimpleNIM = db.simplenims;
const Op = db.Sequelize.Op;

// Create and Save a new SimpleNIM
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nama) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a data nim
    const simplenim = {
        nim: req.body.nim,
        nama: req.body.nama,
        status: req.body.status ? req.body.status : false
    };

    // Save simplenim in the database
    SimpleNIM.create(simplenim)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the SimpleNIM Data."
            });
        });
};

// Retrieve all SimpleNIMs from the database.
exports.findAll = (req, res) => {
    const nim = req.query.nim;
    var condition = nim ? {
        nim: {
            [Op.iLike]: `%${nim}%`
        }
    } : null;

    SimpleNIM.findAll({ where: condition })
        .then(data => {
            res.send({
                message: "Found All Data",
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving SimpleNIMs."
            });
        });
};

// Find a single SimpleNIM with an nim -- ubah jadi nim ajala
exports.findOne = (req, res) => {
    const nim = req.params.nim;

    SimpleNIM.findOne({
            where: {
                nim: nim,
            },
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving SimpleNIM with nim=" + nim
            });
        });
};

// Update a SimpleNIM by the nim in the request -- ubah nim pake nim i guess
exports.update = (req, res) => {
    const nim = req.params.nim;
    const nama = req.params.nama;

    SimpleNIM.update(req.body, {
            where: { nim: nim }
        })
        .then(num => {
            if (num == 1) {
                // kasi apa yg diupdate ga si :/
                nama: nama
                res.send({
                    message: "Simplenim data was updated successfully."
                });
            }
            else {
                res.send({
                    message: `Cannot update Simplenim data with nim=${nim}. Maybe Simplenim data was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating SimpleNIM with nim=" + nim
            });
        });
};

// Delete a SimpleNIM with the specified nim in the request --fix ubah pake nim
exports.delete = (req, res) => {
    const nim = req.params.nim;

    SimpleNIM.destroy({
            where: { nim: nim }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "SimpleNIM was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete SimpleNIM with nim=${nim}. Maybe SimpleNIM was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete SimpleNIM with nim=" + nim
            });
        });
};

// Delete all simplenims from the database.
// exports.deleteAll = (req, res) => {
//     SimpleNIM.destroy({
//             where: {},
//             truncate: false
//         })
//         .then(nums => {
//             res.send({ message: `${nums} Simplenim data all were deleted successfully!` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while removing all simplenim."
//             });
//         });
// };

// Find all Aktif NIM
exports.findAllAktif = (req, res) => {
    SimpleNIM.findAll({ where: { status: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving simplenims data."
            });
        });
};