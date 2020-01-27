module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    p_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Product.associate = function (models) {
    // to reference the list foreign key
    Product.hasMany(models.UserRec, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Product;
};