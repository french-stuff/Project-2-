module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    userCode: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Posts: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0]
      }
    }
  });
  return users;
};
