function SetResponseData(returnCode,returnDesc,data) {
  
  let obj = {
    returnCode,
    returnDesc,
    data
  };

  return obj;
}

module.exports = { SetResponseData  };