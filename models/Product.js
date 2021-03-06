const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,

        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
          },
        cost: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
          },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;