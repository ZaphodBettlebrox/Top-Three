module.exports = function (sequelize, DataTypes) {
  var List = sequelize.define("List", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  List.associate = function (models) {
    // We're saying that a List should belong to an Author
    // A List can't be created without an Author due to the foreign key constraint
    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    List.hasMany(models.UserRec);
  };

  // ASSOCIATE List with user rec table? 



  return List;
};