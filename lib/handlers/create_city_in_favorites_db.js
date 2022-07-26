module.exports = (db) => {
  return async (req, res) => {
    //  check if in DB in favorite cities table
    try {
      console.log(req);
      const isCityInFavoritesDB = await db.getFavoriteFromDB(
        req?.body?.city?.id
      ); // need to make function to db
      let response = {};
      if (!isCityInFavoritesDB || !isCityInFavoritesDB[0]?.id) {
        // add city to DB
        response = await db.addCityToFavoritesDB({
          id: parseInt(req?.body?.city?.id),
          localizedName: req?.body?.city?.localizedName,
        });
      }
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
    }
  };
};
