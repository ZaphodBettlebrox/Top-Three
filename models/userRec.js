
  module.exports = function(sequelize, DataTypes) {
    var UserRec = sequelize.define("UserRec", {
      rec_img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    UserRec.associate = function(models) {
      // to reference the list foreign key
      UserRec.belongsTo(models.List, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    UserRec.associate = function(models) {
        // to reference the list foreign key
        UserRec.belongsTo(models.Product, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return UserRec;
  };
  