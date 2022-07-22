
    const response = [
        {
          "id": 1234,
          "Key": "215854",
          "LocalizedName": "Tel Aviv",
          "weather_status": "Sunny",
          "degrees": 29
        }
      ]

    module.exports = (db,weatherApi) => {
      return async (req, res) => {
        const textToSearch = req.query.textToSearch
        let response = ""
          // let response = await db.getCityFromDB(textToSearch)

          // if(!entity){
            response = await weatherApi.search(textToSearch)
          // }
            res
            .status(200)
            .json(response)
          }
      } 