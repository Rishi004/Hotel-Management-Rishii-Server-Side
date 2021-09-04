module.exports = (sequelize, DataTypes) => {
    const dailyrecords = sequelize.define("dailyrecords", {
        department: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
        },
        income: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        expenses: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        profit: {
            type: DataTypes.DOUBLE,
        },
        loss: {
            type: DataTypes.DOUBLE,
        },
    });

    return dailyrecords;
};
