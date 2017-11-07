module.exports = function(sequelize, DataType){
  const User = sequelize.define('User', {
    username:{type: DataType.STRING, allowNull: false, unique: true}
  }, {
    tableName: 'users'
  });
  User.associate = function(models){
    User.hasMany(models.Item, {foerignKey:"created_by", as: 'Items'});
    };

  return User;
};