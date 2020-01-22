module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {{
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
        allowNull: false,
        len: [1]
      } 
    });
  
    User.associate = function(models) {
      User.hasMany(models.List, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  