const response = [
  {
    id: 1234,
    Key: "215854",
    LocalizedName: "Tel Aviv",
    weather_status: "Sunny",
    degrees: 29,
  },
];

module.exports = (db,weatherApi) => {
  try {
    return async function (req, res) {
      const textToSearch = req.query.textToSearch;
      entity = await weatherApi.search(textToSearch);
      if(!entity.length) entity = []
      // need to add the list of cities to db so when i show it to the user 
      // on city weather card i will also see the name.
      res.status(200).json(entity);
    };
  } catch (error) {
    console.error(error);
  }
};
