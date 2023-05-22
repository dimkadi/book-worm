const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Comment, { foreignKey: 'book_id' });
      this.hasMany(models.Favorite, { foreignKey: 'book_id' });
      // define association here
    }
  }
  Book.init({
    author: DataTypes.STRING,
    photo: DataTypes.TEXT,
    about: DataTypes.TEXT,
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
