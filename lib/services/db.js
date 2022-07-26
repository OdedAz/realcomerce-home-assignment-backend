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
  async addCityToFavoritesDB({id, localizedName}) {
    try {
      await knex("favorite_cities").insert({
        id: parseInt(id),
        localized_name: localizedName,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async getFavoritesFromDB() {
    try {
      return await knex("favorite_cities").select("*");
    } catch (err) {
      console.error(err);
    }
  }

  async deleteCityfromFavories(id) {
    try {
      await knex("favorite_cities").where("id", parseInt(id)).del();
    } catch (err) {
      console.error(err);
    }
  }

  async addCityToDB(city) {
    try {
      const isCityAlreadyExist = await this.getCityFromDB(
        parseInt(city?.id)
      );
      if (!isCityAlreadyExist || !isCityAlreadyExist[0]?.id) {
        try {
          await knex("cities").insert({
            weather_status: city.status,
            degrees: city.degrees,
            id: parseInt(city.cityKey),
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (err) {
      console.error(err);
    }
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
      console.error(err);
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
