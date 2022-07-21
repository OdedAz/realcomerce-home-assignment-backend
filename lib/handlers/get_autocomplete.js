
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
          const key = req.query.key
          const textToSearch = req.query.textToSearch
          let entity = await db.getCityFromDB(key)

          if(!entity){
              entity = await weatherApi.search(textToSearch)
          }
            res
            .status(200)
            .json(response)
          }
      } 