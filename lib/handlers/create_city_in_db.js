module.exports = (db) => {
    return async (req, res) => {
      //  check if in DB
       const isCityInDB = getCityFromDB(req.data.city.key)
        if(!isCityInDB){
            // add city to DB
          response = await db.addCityToDB(req.data.city)
        }
          res
          .status(200)
          .json(response)
        }
    } 