module.exports = (db) => {
  return async (req, res) => {
    //  check if in DB
    try {
      const isCityInDB = await db.getCityFromDB(req?.body?.city?.id);
      let response = {};
      if (!isCityInDB[0]?.id) {
        // add city to DB
        response = await db.addCityToDB(req?.body?.city);
      }
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
    }
  };
};
