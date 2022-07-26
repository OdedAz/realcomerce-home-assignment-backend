    module.exports = (db,weatherApi) => {
      return async (req, res) => {
          const response = await db.getFavoritesFromDB()
            res
            .status(200)
            .json(response)
          }
      } 