var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      firstname: 
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      lastname: 
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      username: 
      {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileurl: 
      {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: 
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      bio: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      } 
    });
  
    User.associate = function(models) {
      User.hasMany(models.List, {
        onDelete: "cascade"
      });
    };
  
    User.beforeCreate(function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
  

    return User;
  };
  