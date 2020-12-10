module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Holy_8448",
    DB: "simplenim",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};