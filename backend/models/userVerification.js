module.exports = (sequelize, DataTypes) => {
  const UserVerification = sequelize.define("UserVerification", {
    verificationToken: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    expiryDate: {
      type: DataTypes.DATE,
    },
  });

  UserVerification.associate = (models) => {
    UserVerification.belongsTo(models.Users, {
      foreignKey: {
        name: "UserUNID", 
      },
    });
  };

  return UserVerification;
};
