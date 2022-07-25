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
module.exports = class {
  async addCityToFavoriteList(key, localizedName) {
    try {
      await knex("favorite_cities").insert({
        key: parseInt(key),
        localized_name: localizedName,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getFavoriteFromDB(key) {
    try {
      await knex("favorite_cities").where("key", parseInt(key)).select();
    } catch (err) {
      console.log(err);
    }
  }

  async deleteCityfromFavories(key) {
    try {
      await knex("favorite_cities").where("key", parseInt(key)).del();
    } catch (err) {
      console.log(err);
    }
  }

  async addCityToDB(id, localizedName, weatherStatus, degree) {
    try {
      const isCityAlreadyExist = await this.getCityFromDB(
        parseInt(entity.cityKey)
      );
      if (!isCityAlreadyExist) {
        await knex("cities").insert({
          localizedName,
          weatherStatus,
          degree,
          id: parseInt(entity.cityKey),
        });
      }
    } catch (err) {
      console.log(err);
    }
    return id;
  }

  async getCityFromDB(key) {
    try {
      if (key) {
        let response = await knex("cities").where({ id: key }).select("*");
        return response;
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async deleteCityfromDB(key) {
    try {
      await knex("cities").where("id", parseInt(key)).del();
    } catch (error) {
      console.log(error);
    }
  }
};
