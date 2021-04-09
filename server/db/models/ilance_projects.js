const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ilance_projects', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    escrow_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ishtml: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    description_videourl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    date_starts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    gtc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gtc_cancelled: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    visible: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    project_title: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    bids: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bidsdeclined: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bidsretracted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bidsshortlisted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    budgetgroup: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    additional_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('draft','open','closed','expired','delisted','wait_approval','approval_accepted','frozen','finished','archived'),
      allowNull: false,
      defaultValue: "draft"
    },
    close_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    transfertype: {
      type: DataTypes.ENUM('userid','email'),
      allowNull: false,
      defaultValue: "userid"
    },
    transfer_to_userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    transfer_from_userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    transfer_to_email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    transfer_status: {
      type: DataTypes.ENUM('','pending','accepted','rejected'),
      allowNull: false,
      defaultValue: ""
    },
    transfer_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    project_details: {
      type: DataTypes.ENUM('public','invite_only','realtime','unique','penny'),
      allowNull: false,
      defaultValue: "public"
    },
    project_type: {
      type: DataTypes.ENUM('reverse','forward'),
      allowNull: false,
      defaultValue: "reverse"
    },
    project_state: {
      type: DataTypes.ENUM('service','product'),
      allowNull: false,
      defaultValue: "service"
    },
    bid_details: {
      type: DataTypes.ENUM('open','sealed','blind','full'),
      allowNull: false,
      defaultValue: "open"
    },
    filter_rating: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_country: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_state: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_city: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_zip: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_underage: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_businessnumber: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_bidtype: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_budget: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filter_escrow: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    filter_gateway: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    filter_ccgateway: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    filter_offline: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    filter_publicboard: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    filtered_rating: {
      type: DataTypes.ENUM('1','2','3','4','5'),
      allowNull: false,
      defaultValue: "1"
    },
    filtered_country: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    filtered_state: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    filtered_city: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    filtered_zip: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    filter_bidlimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    filtered_bidlimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    filtered_bidtype: {
      type: DataTypes.ENUM('entire','hourly','daily','weekly','monthly','lot','weight','item'),
      allowNull: false,
      defaultValue: "entire"
    },
    filtered_bidtypecustom: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    filtered_budgetid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    filtered_auctiontype: {
      type: DataTypes.ENUM('regular','fixed','classified'),
      allowNull: false,
      defaultValue: "regular"
    },
    classified_phone: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    classified_price: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    urgent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    buynow: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    buynow_price: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    buynow_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    buynow_qty_lot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    items_in_lot: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    buynow_purchases: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reserve: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reserve_price: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    featured: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    featured_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    featured_searchresults: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    highlite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    autorelist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    autorelist_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    startprice: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    retailprice: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    uniquebidcount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    paymethod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paymethodcc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paymethodoptions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paymethodoptionsemail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keywords: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    currentprice: {
      type: DataTypes.DOUBLE(17,2),
      allowNull: false,
      defaultValue: 0.00
    },
    insertionfee: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    enhancementfee: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    fvf: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    isfvfpaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isifpaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isenhancementfeepaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ifinvoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    enhancementfeeinvoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fvfinvoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    returnaccepted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    returnwithin: {
      type: DataTypes.ENUM('0','3','7','14','30','60'),
      allowNull: false,
      defaultValue: "0"
    },
    returngivenas: {
      type: DataTypes.ENUM('none','exchange','credit','moneyback'),
      allowNull: false,
      defaultValue: "none"
    },
    returnshippaidby: {
      type: DataTypes.ENUM('none','buyer','seller'),
      allowNull: false,
      defaultValue: "none"
    },
    returnpolicy: {
      type: DataTypes.TEXT,
      allowNull: true
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
    hasimage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hasimageslideshow: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hasdigitalfile: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    haswinner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hasbuynowwinner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    winner_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    donation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    charityid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    donationpercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    donermarkedaspaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    donermarkedaspaiddate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    donationinvoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    currencyid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    countryid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    country: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    state: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    city: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    zipcode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    sku: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    upc: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    ean: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    isbn10: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    isbn13: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    partnumber: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    modelnumber: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
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
    salestaxentirecountry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    salestaxshipping: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    countdownresets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bulkid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    updateid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    storeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    itemcondition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imageurl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imageurl_attachid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    download_attachid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    itemstatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    storecid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tags: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ilance_projects',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
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
        name: "cid",
        using: "BTREE",
        fields: [
          { name: "cid" },
        ]
      },
      {
        name: "project_title",
        using: "BTREE",
        fields: [
          { name: "project_title" },
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
        name: "project_details",
        using: "BTREE",
        fields: [
          { name: "project_details" },
        ]
      },
      {
        name: "project_type",
        using: "BTREE",
        fields: [
          { name: "project_type" },
        ]
      },
      {
        name: "project_state",
        using: "BTREE",
        fields: [
          { name: "project_state" },
        ]
      },
      {
        name: "charityid",
        using: "BTREE",
        fields: [
          { name: "charityid" },
        ]
      },
      {
        name: "countryid",
        using: "BTREE",
        fields: [
          { name: "countryid" },
        ]
      },
      {
        name: "zipcode",
        using: "BTREE",
        fields: [
          { name: "zipcode" },
        ]
      },
      {
        name: "sku",
        using: "BTREE",
        fields: [
          { name: "sku" },
        ]
      },
      {
        name: "isbn10",
        using: "BTREE",
        fields: [
          { name: "isbn10" },
        ]
      },
      {
        name: "isbn13",
        using: "BTREE",
        fields: [
          { name: "isbn13" },
        ]
      },
      {
        name: "partnumber",
        using: "BTREE",
        fields: [
          { name: "partnumber" },
        ]
      },
      {
        name: "modelnumber",
        using: "BTREE",
        fields: [
          { name: "modelnumber" },
        ]
      },
      {
        name: "hasimage",
        using: "BTREE",
        fields: [
          { name: "hasimage" },
        ]
      },
      {
        name: "hasimageslideshow",
        using: "BTREE",
        fields: [
          { name: "hasimageslideshow" },
        ]
      },
      {
        name: "hasdigitalfile",
        using: "BTREE",
        fields: [
          { name: "hasdigitalfile" },
        ]
      },
    ]
  });
};
