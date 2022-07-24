const response = [
  {
    id: 1234,
    Key: "215854",
    LocalizedName: "Tel Aviv",
    weather_status: "Sunny",
    degrees: 29,
  },
];

module.exports = async (weatherApi) => {
  return async function (req, res) {
    debugger
    const textToSearch = req.params.textToSearch;
    entity = weatherApi.search(textToSearch);
    res.status(200).json(entity);
  };
};