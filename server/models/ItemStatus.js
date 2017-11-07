module.exports = function(sequelize, DataType){
  const ItemStatus = sequelize.define('ItemStatus', {
    status: {type: DataType.STRING, allowNull: false}
  }, {
    tableName: 'status'
  });
  ItemStatus.associate = function(models){
    ItemStatus.belongsTo(models.Item, {foerignKey:"is_sold", as: 'Status'});
    };

  return ItemStatus;
};