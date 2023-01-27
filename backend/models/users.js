//To keep track of all User

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", { 
  
      // Unique UserID for all user
      userUNID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      university: DataTypes.STRING,
      creditCompleted: DataTypes.STRING,
      currentCGPA: DataTypes.STRING,
    });
  
    
  
    return Users;
  };