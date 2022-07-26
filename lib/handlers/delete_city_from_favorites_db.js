module.exports = (db, weatherApi) => {
  return async (req, res) => {
    try {
      //  check if in DB
      console.log(req?.query?.id);
      if (req?.query?.id)
        await db.deleteCityfromFavories(parseInt(req?.query?.id));
      res.status(200).json();
    } catch (error) {
      console.error(error);
    }
  };
};
