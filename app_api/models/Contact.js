module.exports = function (sequelize, DataTypes) {

    const Contact = sequelize.define("Contact", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            len: [1]
        },

        message: {
            type: DataTypes.TEXT,
            len: [1]
        }
    });

    return Contact;

}; // END EXPORT