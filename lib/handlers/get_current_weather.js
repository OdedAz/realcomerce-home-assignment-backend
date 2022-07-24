
module.exports = (db,weatherApi) => {
  return  async function (req, res) {
  
      let entity = await db.getCityFromDB(id)

      if(!entity){
          entity = await weatherApi.getCurrentWather(locationKey)
          await db.addCityToDB(entity)
      }
        res
        .status(200)
        .json(entity)
      }
  } 
