require("dotenv").config();
const axios = require("axios");
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.API_ENDPOINT;

async function GetPlaceRestaurantService(place_name) {
  try {
 
    var url = `${BASE_URL}/maps/api/place/textsearch/json?query=restaurants${place_name}&key=${API_KEY}`;
    var res = encodeURI(url);
    return await axios.get(res).then((response) => {
      return response.data;
    });
  } catch (err) {
    console.log(`response status error : ${err}`);
  }
}


async function GetPlaceByPlaceID(place_id) {
    try {
 
        var url = `${BASE_URL}/maps/api/place/details/json?place_id=${place_id}&fields=url&key=${API_KEY}`;
        var res = encodeURI(url);
        return await axios.get(res).then((response) => {
          return response.data;
        });
      } catch (err) {
        console.log(`response status error : ${err}`);
      }
  }

module.exports = {
  GetPlaceRestaurantService,
  GetPlaceByPlaceID
};
