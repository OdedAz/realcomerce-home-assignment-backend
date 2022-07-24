const router = require("express").Router();
const search = require("../handlers/get_autocomplete");
const getCurrentWather = require("../handlers/get_current_weather");
const getFavoriteCities = require("../handlers/get_favorite_cities");
const addCityToDB = require("../handlers/add_city_to_db");

module.exports = (db, weatherApi) => {
  router.get("/auto_complete", search(weatherApi));
  router.get("/current_weather", getCurrentWather(db, weatherApi));
  router.get("/favorite_cities", getFavoriteCities(db, weatherApi));
  router.post("/favorite_cities", addCityToDB(db));
  
  return router;
};
