var DataTypes = require("sequelize").DataTypes;
var _ilance_buynow_orders = require("./ilance_buynow_orders");
var _ilance_projects = require("./ilance_projects");
var _ilance_subscription_user = require("./ilance_subscription_user");
var _ilance_users = require("./ilance_users");

function initModels(sequelize) {
  var ilance_buynow_orders = _ilance_buynow_orders(sequelize, DataTypes);
  var ilance_projects = _ilance_projects(sequelize, DataTypes);
  var ilance_subscription_user = _ilance_subscription_user(sequelize, DataTypes);
  var ilance_users = _ilance_users(sequelize, DataTypes);
  
    ilance_projects.belongsTo(ilance_users , {
      foreignKey: 'user_id'
    })
    ilance_users.hasMany(ilance_projects, {
      foreignKey: 'user_id'
    })
  
 
  
  return {
    ilance_buynow_orders,
    ilance_projects,
    ilance_subscription_user,
    ilance_users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
