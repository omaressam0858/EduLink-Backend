module.exports = (sequelize,DataTypes,Model) => {
    class Group extends Model {}

    Group.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    grade: {
        type: DataTypes.TEXT,
        required: true,
        allowNull: false
    },

    paymentPrice: {
        type: DataTypes.SMALLINT,
        required:true,
        allowNull: false
    },
    }, {
    sequelize,
    modelName: 'Group',
    });
    return Group;
};
