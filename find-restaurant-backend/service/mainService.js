const { GetPlaceRestaurantService ,GetPlaceByPlaceID } = require("../api-endpoint/api-service");

async function GetPlaceByNameList(place_name) {
  let result = [];
  try {
    let rs = await GetPlaceRestaurantService(place_name);
   
    if (rs.results.length > 0) {
      let results =rs.results;
      await SetDataRestaurant(results);
    }

  } catch (err) {
    throw err;
  } finally {
    return result;
  }

  async function SetDataRestaurant(results) {
    for (let i = 0; i < results.length; i++) {
      const name = results[i].name;
      const address = results[i].formatted_address;
      const place_id = results[i].place_id;

      let rsUrl = await GetPlaceByPlaceID(place_id)
      const url = rsUrl.result.url;

      var data = SetData(name, address, url);
      result.push(data);
    }
  }
}

function SetData(name, address, url) {
  return {
    name,
    address,
    url
  };
}

module.exports = {
  GetPlaceByNameList,
};


