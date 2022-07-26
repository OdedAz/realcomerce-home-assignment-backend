module.exports = (db, weatherApi) => {
  try {
    return async function (req, res) {
      const textToSearch = req.query.textToSearch;
      entity = await weatherApi.search(textToSearch);
      if (!entity.length) entity = [];
      res.status(200).json(entity);
    };
  } catch (error) {
    console.error(error);
  }
};
