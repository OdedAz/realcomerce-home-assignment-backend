const { apikey } = require("../services/weatherAppCredentials");
const axios = require("axios");

module.exports = class weatherApi {
  async search(textToSearch) {
    console.log("here we need to get the data from the accuweather site");
    const url =
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

    const responseFromApi = async (url, textToSearch) => {
      try {
        // const response = await axios.get(url, {
        //   params: { apikey, q: textToSearch },
        // });
        // const data = response?.data;
        const data = [
          {
            AdministrativeArea: { ID: "TA", LocalizedName: "Tel Aviv" },
            Country: { ID: "IL", LocalizedName: "Israel" },
            Key: "215855",
            LocalizedName: "Ashkelon",
            Rank: 31,
            Type: "City",
            Version: 1,
          },
          {
            AdministrativeArea: { ID: "TA", LocalizedName: "Tel Aviv" },
            Country: { ID: "IL", LocalizedName: "Israel" },
            Key: "215854",
            LocalizedName: "Frankfurt",
            Rank: 31,
            Type: "City",
            Version: 1,
          },
          {
            AdministrativeArea: { ID: "TA", LocalizedName: "Tel Aviv" },
            Country: { ID: "IL", LocalizedName: "Israel" },
            Key: "215856",
            LocalizedName: "Tel Aviv",
            Rank: 31,
            Type: "City",
            Version: 1,
          },
        ];
        
        const mappedData = data.map((city) => {
          return { key: city.Key, name: city.LocalizedName };
        });
        return textToSearch? mappedData:[];
      } catch (error) {
        console.log(error);
      }
    };

    const citiesListFromSearch = await responseFromApi(url, textToSearch);

    return citiesListFromSearch;
  }
  async getCurrentWather(locationKey) {
    console.log("here we need to get the data from the accuweather site");
    const url =
      "http://dataservice.accuweather.com/currentconditions/v1/" + locationKey;

    const responseFromApi = async (url) => {
      try {
        const response = await axios.get(url, {
          params: { apikey },
        });
        const data = response?.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    // const data = await responseFromApi(url, textToSearch);
    const data = [
      {
        LocalObservationDateTime: "2022-07-19T10:38:00+03:00",
        EpochTime: 1658216280,
        WeatherText: "Sunny",
        WeatherIcon: 1,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {
            Value: 29.0,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 84.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        MobileLink:
          "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      },
    ];
    const response = data.map((city) => {
      const key = city.key;
      const name = city.WeatherText;
      const degrees = city.Temperature.Metric.Value;

      return { key, name, degrees };
    });
    return response;
  }
};

