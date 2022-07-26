module.exports = (db, weatherApi) => {
  return async (req, res) => {
    //  check if in DB
    console.log(req?.query?.id);
    if (req?.query?.id)
      await db.deleteCityfromDB(parseInt(req?.query?.id));
    res.status(200).json();
  };
};
