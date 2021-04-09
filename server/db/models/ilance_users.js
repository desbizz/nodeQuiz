const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ilance_users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ipaddress: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    iprestrict: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    salt: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    secretquestion: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    secretanswer: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    address2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    zip_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    subcategories: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('active','suspended','cancelled','unverified','banned','moderated'),
      allowNull: false,
      defaultValue: "active"
    },
    serviceawards: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    productawards: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    servicesold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    productsold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    feedback: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    bidstoday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bidsthismonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    auctiondelists: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bidretracts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lastseen: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    rid: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    account_number: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    available_balance: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    total_balance: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    income_reported: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    income_spent: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    startpage: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "main"
    },
    styleid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    project_distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    currency_calculation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    languageid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currencyid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    notifyservices: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notifyproducts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notifyservicescats: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notifyproductscats: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastemailservicecats: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    lastemailproductcats: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    displayprofile: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    emailnotify: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    displayfinancials: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vatnumber: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    regnumber: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    dnbnumber: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    companyname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    usecompanyname: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    timeonsite: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    daysonsite: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isadmin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    permissions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    searchoptions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rateperhour: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    profilevideourl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profileintro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('','male','female'),
      allowNull: false,
      defaultValue: ""
    },
    freelancing: {
      type: DataTypes.ENUM('','individual','business'),
      allowNull: false,
      defaultValue: ""
    },
    autopayment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    posthtml: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    username_history: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password_lastchanged: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    store: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    store_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ilance_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "username",
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "email",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "first_name",
        using: "BTREE",
        fields: [
          { name: "first_name" },
        ]
      },
      {
        name: "last_name",
        using: "BTREE",
        fields: [
          { name: "last_name" },
        ]
      },
      {
        name: "zip_code",
        using: "BTREE",
        fields: [
          { name: "zip_code" },
        ]
      },
      {
        name: "country",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
      {
        name: "rating",
        using: "BTREE",
        fields: [
          { name: "rating" },
        ]
      },
      {
        name: "city",
        using: "BTREE",
        fields: [
          { name: "city" },
        ]
      },
      {
        name: "state",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "serviceawards",
        using: "BTREE",
        fields: [
          { name: "serviceawards" },
        ]
      },
      {
        name: "score",
        using: "BTREE",
        fields: [
          { name: "score" },
        ]
      },
      {
        name: "gender",
        using: "BTREE",
        fields: [
          { name: "gender" },
        ]
      },
      {
        name: "freelancing",
        using: "BTREE",
        fields: [
          { name: "freelancing" },
        ]
      },
    ]
  });
};
