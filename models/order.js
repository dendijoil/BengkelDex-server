"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.OrderDetail);
    }
  }
  Order.init(
    {
      UserId: DataTypes.INTEGER,
      WorkshopId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      paymentStatus: DataTypes.BOOLEAN,
      totalPrice: DataTypes.INTEGER,
      paymentType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};