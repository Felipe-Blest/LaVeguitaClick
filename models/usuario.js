const Sequelize = require('sequelize-oracle')
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('usuario', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [2, 50]
        },
        p_apellido: {
            type: DataTypes.STRING,
            len: [2, 50]
        },
        s_apellido: {
            type: DataTypes.STRING,
            len: [2, 50]
        }

    }, {
        undescored: true,
        paranoid: true
    })
}