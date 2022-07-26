
module.exports = (db,weatherApi) => {
  return  async function (req, res) {
      const key=req.query.cityKey
      let entity = await db.getCityFromDB(key)

      if(!entity || entity?.length===0){
          entity = await weatherApi.getCurrentWather(key)
          entity[0].cityKey = key;
          await db.addCityToDB(entity[0])
      }
        res
        .status(200)
        .json(entity[0])
      }
  } 
