
module.exports = (db,weatherApi) => {
  return  async function (req, res) {
  
      const id = req.params.Oded
      const textToSearch = "tel aviv"
      const locationKey = "215854"
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
