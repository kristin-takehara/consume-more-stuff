module.exports = function(sequelize, DataType){
  const Item = sequelize.define('Item', {
    name: { type: DataType.STRING, allowNull: false },
    description: { type: DataType.STRING, allowNull: false},
    manufacturer: { type: DataType.STRING, allowNull: true},
    modelname: {type: DataType.STRING, allowNull: true},
    condition_id: { type: DataType.INTEGER, allowNull: false},
    price: {type: DataType.Number, allowNull: true},
    category_id: {type: DataType.INTEGER, allowNull: false},
    created_by: { type: DataType.INTEGER, allowNull: false},
    is_sold: {type: DataType.INTEGER, allowNull: false}

  }, {
    tableName: 'items'
  });
  Item.associate = function(models){
    Item.belongsTo(models.Status,  {foreignKey:"is_sold", as: 'Status'});
    Item.belongsTo(models.User, {foreignKey:"created_by", as: 'User'});
    Item.belongsTo(models.Condition, {foreignKey:"condition_id", as: 'Condition'});
    Item.belongsTo(models.Category, {foreignKey:"category_id", as: 'Category'});
    };

  return Item;
};