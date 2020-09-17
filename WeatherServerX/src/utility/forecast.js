const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=4df6fe93229464e17dc93dcc0a398e60&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to our Weather Service!", undefined);
    } else if (body.error) {
      callback("Unable to find that location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degrees out. However, It feels like " +
          body.current.feelslike +
          " There is a " +
          body.current.humidity +
          "% Humidity."
      );
    }
  });
};

module.exports = forecast;
