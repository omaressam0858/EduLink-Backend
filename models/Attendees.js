module.exports = (sequelize,DataTypes,Model) => {
    class Attendees extends Model {}

    Attendees.init({
      
      dayArrived: {
        type: DataTypes.DATEONLY
      },
      timeArrived: {
        type: DataTypes.TIME
      },
      groupId: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Attendees',
    });
    
    // Attendees.belongsTo(Student, { foreignKey: 'StudentId' });
    
    return Attendees;    
};
