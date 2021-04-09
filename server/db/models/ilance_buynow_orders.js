const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ilance_buynow_orders', {
    orderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    invoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    attachid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    amount: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    salestax: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    salestaxstate: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    salestaxrate: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0"
    },
    salestaxshipping: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    escrowfee: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    escrowfeebuyer: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    fvf: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    fvfbuyer: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    isescrowfeepaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isescrowfeebuyerpaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isfvfpaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isfvfbuyerpaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    escrowfeeinvoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    escrowfeebuyerinvoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fvfinvoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fvfbuyerinvoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ship_required: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    ship_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    orderdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    canceldate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    arrivedate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    paiddate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    releasedate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    winnermarkedaspaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    winnermarkedaspaiddate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    winnermarkedaspaidmethod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    buyerpaymethod: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    buyershipcost: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    buyershipperid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sellermarkedasshipped: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sellermarkedasshippeddate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    shiptracknumber: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    buyerfeedback: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sellerfeedback: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('paid','cancelled','pending_delivery','delivered','fraud','offline','offline_delivered'),
      allowNull: false,
      defaultValue: "paid"
    }
  }, {
    sequelize,
    tableName: 'ilance_buynow_orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderid" },
        ]
      },
      {
        name: "parentid",
        using: "BTREE",
        fields: [
          { name: "parentid" },
        ]
      },
      {
        name: "project_id",
        using: "BTREE",
        fields: [
          { name: "project_id" },
        ]
      },
      {
        name: "buyer_id",
        using: "BTREE",
        fields: [
          { name: "buyer_id" },
        ]
      },
      {
        name: "owner_id",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "attachid",
        using: "BTREE",
        fields: [
          { name: "attachid" },
        ]
      },
      {
        name: "invoiceid",
        using: "BTREE",
        fields: [
          { name: "invoiceid" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
