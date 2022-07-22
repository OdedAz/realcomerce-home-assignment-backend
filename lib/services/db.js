const { response } = require("express");

const knex = require("knex")({
  client: "mssql",
  connection: {
    host: "127.0.0.1",
    port: 1433,
    user: "sa",
    password: "Oded123#",
    database: "realcomerceDB",
  },
});
// async function addCityToDB({weatherStatus, degrees, key}) {
//   return await knex("cities").insert({
//     weather_status: weatherStatus,
//     degrees: degrees,
//     key,
//   });
// }
// const res = await addCityToDB({
//   weather_status: "Sunny",
//   degrees: 29,
//   key: "215854",
// })
// knex("cities").insert({
//   weather_status: "Sunny",
//   degrees: 29,
//   key: "215854",
// });
console.log("knex");
console.log(knex);

module.exports = class {
  async addCityToFavoriteList(key, localizedName) {
    try {
      knex("favorite_cities").insert({ key: parseInt(key), localized_name: localizedName });
    } catch (err) {
      console.log(err);
    }
  }

  async getFavoriteFromDB(key) {
    try {
      knex("favorite_cities").where("key", parseInt(key)).select();
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCityfromFavories(key) {
    try {
      knex("favorite_cities").where("key", parseInt(key)).del();
    } catch (err) {
      console.log(err);
    }
  }

  async addCityToDB(weatherStatus, degrees, key) {
    try {
      knex("cities").insert({
        weather_status: weatherStatus,
        degrees: degrees,
        key: parseInt(key),
      });
    } catch (err) {
      console.log(err);
    }
  }
  async getCityFromDB(key) {
    try {
      if(key) {
        let response = await knex('cities').where('id', key)
      } else {
        return
      }
    } catch (err) {
      console.log(err);
      return err
    }
    return response
  }
  async deleteCityfromDB(key) {
    knex("cities").where("key", parseInt(key)).del();
  }
};
