const router = require("express").Router();
const search = require("../handlers/get_autocomplete");
const getCurrentWather = require("../handlers/get_current_weather");

module.exports = (db, weatherApi) => {
  router.get("/auto_complete", search(db, weatherApi));

  router.get("/current_weather", getCurrentWather(db, weatherApi));

  // router.get('/expenses', getAutoComplete(db,weatherApi))

  // router.get('/expenses', getAutoComplete(db,weatherApi))

  return router;
};
