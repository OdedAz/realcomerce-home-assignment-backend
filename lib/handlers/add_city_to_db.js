
    // const response = [
    //     {
    //       "id": 1234,
    //       "Key": "215854",
    //       "LocalizedName": "Tel Aviv",
    //       "weather_status": "Sunny",
    //       "degrees": 29
    //     }
    //   ]

    module.exports = (db) => {
      return async (req, res) => {
        const textToSearch = req.query.city
          let response = await db.getCityFromDB(req.query.city.key)

          if(!entity){
            response = await db.addCityToDB(req.query.city)
          }
            res
            .status(200)
            .json(response)
          }
      } 