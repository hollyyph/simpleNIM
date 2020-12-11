const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const SimpleNIM = sequelize.define("simplenim", {
        nim: {
            type: Sequelize.STRING
        },
        nama: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return SimpleNIM;
};