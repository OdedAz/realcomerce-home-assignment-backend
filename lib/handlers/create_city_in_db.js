module.exports = (db) => {
    return async (req, res) => {
      //  check if in DB
      console.log({req})
       const isCirtInDB = getCityFromDB(req.data.city.key)
        if(!isCirtInDB){
            // add city to DB
          response = await db.addCityToDB(req.data.city)
        }
          res
          .status(200)
          .json(response)
        }
    } 