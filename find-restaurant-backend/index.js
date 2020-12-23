const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 3500;

const { GetPlaceByNameList } = require("./service/mainService");
const { SetResponseData } = require("./utill/utill");

app.get(
  "/api/find-restaurants/:params",
  async function Findrestaurants(request, response) {
    var param = request.params.params;

    console.log("Findrestaurants By : " + param);
    try {
      let results = await GetPlaceByNameList(param);
      let responseData = SetResponseData("00000", "SUCCESS", results);
      response.send(responseData);
      response.end();
    } catch (e) {
      console.log("Findrestaurants Error : " + e);
      response.send(responseData);
      response.end();
    }
  }
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
