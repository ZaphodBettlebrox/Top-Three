module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING
    });
  
    User.associate = function(models) {
      // Associating User with List
      // When an User is deleted, also delete any associated Lists.
      // has MANY is now manyToMany, not sure if this is the right one.
      User.manyToMany(models.List, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  