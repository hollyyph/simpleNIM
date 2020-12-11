const { Sequelize } = require(".");

// bikin object log disini -- sepertinya akan dihapus

module.exports = (sequelize, Sequelize) => {
    const Log = sequelize.define("log", {
        userid: {
            type: Sequelize.STRING
        },
        method: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        response_time: {
            type: Sequelize.time
        },
        res: {
            type: Sequelize.INTEGER
        }
    });
    return Log;
};