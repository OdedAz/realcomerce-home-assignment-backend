
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
        const {id, localizedName, weatherStatus, degrees } = req.body.city
        console.log(city)
        console.log(city.id)
          let response = await db.getCityFromDB(id)
            console.log({response})
          if(!response){
            response = await db.addCityToDB(id, localizedName, weatherStatus, degrees)
          }
            res
            .status(200)
            .json(response)
          }
      } 