'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIndonesianNumber(value) {
          if ( String(value).startsWith('+62') === false) {
            throw new Error('Only Indonesian number (+62) allowed.')
          }
        },
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isValidGenderChar(value) {
          if (value) {
            if (value !== "m" && value !== "f") {
              throw new Error('Gender only accept m / f char.')
            }
          }
        }
      }
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};