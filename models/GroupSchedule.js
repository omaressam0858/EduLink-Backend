module.exports = (sequelize, DataTypes,Model) => {
    class GroupSchedule extends Model {}

    GroupSchedule.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      groupId: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false
      },
      day: {
        type: DataTypes.TEXT,
        required: true,
        allowNull: false,
        validate: {
            isIn: [['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']],
        }
      },
      time: {
        type: DataTypes.SMALLINT,
        required: true,
        allowNull: false,
        validate: {
            min: 0,
            max: 23
        }
      },
    }, {
      sequelize,
      modelName: 'GroupSchedule',
    });
    
    return GroupSchedule;
}