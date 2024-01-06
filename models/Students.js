module.exports = (sequelize,DataTypes,Model) => {
    class Student extends Model {}

    Student.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        required: true,
        allowNull: false
      },
      personalPhoneNumber: {
        type: DataTypes.STRING(12),
        required: true,
        allowNull: false
      },
      parentPhoneNumber: {
        type: DataTypes.STRING(12),
        required: true,
        allowNull: false

      },groupId: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Student',
    });
    
//    Student.belongsTo(Group, { foreignKey: 'groupId' });
    
    return Student;
};
