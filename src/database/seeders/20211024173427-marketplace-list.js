'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MarketplaceList', 
    [
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@Dueane",
        edition_num: 180509,
        expire_date: 0,
        price: 77777700
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@jrrollie@gmail.com",
        edition_num: 358319,
        expire_date: 6,
        price: 2700000
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@RiaCashi",
        edition_num: 981465,
        expire_date: 3,
        price: 7777777
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@J523",
        edition_num: 400042,
        expire_date: 4,
        price: 500
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@Dishon062",
        edition_num: 93324,
        expire_date: 3,
        price: 15000
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@Fashalacrypt",
        edition_num: 565729,
        expire_date: 3,
        price: 1500
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@Ikenasty",
        edition_num: 185968,
        expire_date: 1,
        price: 15000
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@OhWellRell",
        edition_num: 41434,
        expire_date: 1,
        price: 750
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@Fashalacrypt",
        edition_num: 565729,
        expire_date: 3,
        price: 1500
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@Ikenasty",
        edition_num: 185968,
        expire_date: 1,
        price: 15000
      },
      {
        nftId: "0x12345",
        imgUrl: "http://localhost/wadfael.png",
        seller_email: "@OhWellRell",
        edition_num: 41434,
        expire_date: 1,
        price: 750
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
