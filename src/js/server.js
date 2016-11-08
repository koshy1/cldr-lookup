var express = require('express')
var cldr = require("cldr");

var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/cldr/display_type/:displayType/delimiter/:delimiterName', function(req, res) {
  var delimiterType = req.params.delimiterName;
  var displayType = req.params.displayType;

  var localesWithDelimiter = cldr.localeIds.filter(function(localeId){
    var delimiters = cldr.extractDelimiters(localeId);
    return (delimiters[delimiterType] != null);
  });

  var returnJSON = {};
  var defaultData = {}
  localesWithDelimiter.forEach(function(localeId){
    var delimiters = cldr.extractDelimiters(localeId);
    defaultData[localeId] = delimiters[delimiterType];
  });
  returnJSON["defaultData"] = defaultData;

  var dedupedData = {}
  var localesAndDelimiterValues = localesWithDelimiter.map(function(localeId){
    var delimiters = cldr.extractDelimiters(localeId);
    return {"localeId": localeId, "delimiterValue": delimiters[delimiterType]};
  });
  localesAndDelimiterValues.forEach(function(localeAndDelimiterValue){
    var delimiterValue = localeAndDelimiterValue["delimiterValue"];
    var localeId = localeAndDelimiterValue["localeId"];
    if (dedupedData[delimiterValue] == null) {
      dedupedData[delimiterValue] = [];
    }
    else {
      dedupedData[delimiterValue].push(localeId);
    }
  });
  returnJSON["dedupedData"] = dedupedData
  res.json(returnJSON);
});

app.listen(8081);
