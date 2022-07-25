const router = require("express").Router();
const search = require("../handlers/get_autocomplete");
const getCurrentWather = require("../handlers/get_current_weather");
const getFavoriteCities = require("../handlers/get_favorite_cities");
// const addCityToDB = require("../handlers/add_city_to_dbDELETE");
const create_city_in_db = require("../handlers/create_city_in_db");
const deleteCityfromDB = require("../handlers/delete_city_from_db");

module.exports = (db, weatherApi) => {
  router.get("/auto_complete", search(db,weatherApi));
  router.get("/current_weather", getCurrentWather(db, weatherApi));
  router.get("/favorite_cities", getFavoriteCities(db, weatherApi));
  router.post("/favorite_cities", create_city_in_db(db));
  router.delete("/favorite_cities", deleteCityfromDB(db));
  
  return router;
};
