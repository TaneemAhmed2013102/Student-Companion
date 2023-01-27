//To keep track of all User

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    // Unique UserID for all user
    userUNID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    nid: DataTypes.INTEGER,
    password: DataTypes.STRING, 
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    university: DataTypes.STRING,

    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Users.associate = (models) => {
    //One to Many association with User verification model
    //(A user can have multiple user verification)
    Users.hasMany(models.UserVerification, {
      foreignKey: {
        name: "UserUNID",
      },
    });
  };

  return Users;
};
