const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const weatherController = require("./controllers/weatherController");
const DB = require("./services/db");
const WeatherApi = require("./services/weatherApi");
// require("express-async-errors");

const port = process.env.port || process.env.PORT || 3000;

const app = express();

const config = {
  db: {
    client: "mssql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "sa",
      password: "Oded123#",
      database: "realcomerceDB",
    },
  },
};

const weatherApi = new WeatherApi();
const db = new DB(config.db);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(weatherController(db, weatherApi));
// app.options("*", cors());

app.listen(port, () => {
  console.log(port);
  console.log("server is up !!!" + port);
});
