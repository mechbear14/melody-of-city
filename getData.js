const https = require("https");

const PREFIX = "https://opendata.bristol.gov.uk/api/records/1.0/search/?";

module.exports.getRecords = function(dataset, indicator, rows) {
  let url = `${PREFIX}dataset=${dataset}&q=indicator=\"${indicator}"&rows=${rows}`;
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      const { statusCode } = res;
      if (statusCode !== 200) reject(new Error(statusCode));

      let data = "";
      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        resolve(JSON.parse(data));
      });
    });
  });
};

module.exports.initWards = function(data) {
  return new Promise((resolve, reject) => {
    let wards = [];
    try {
      for (let i = 0; i < data.records.length; i++) {
        try {
          let current = data.records[i].fields;
          if (current.ward_name !== ".Bristol Average") {
            let centre = {
              x: current.geo_point_2d[0],
              y: current.geo_point_2d[1]
            };
            wards.push({ name: current.ward_name, centre: centre });
          }
        } catch {
          continue;
        }
      }
      resolve({ wards: wards, raw: data });
    } catch {
      reject(new Error());
    }
  });
};

module.exports.parseRecords = function(data) {
  let result = [];
  return new Promise((resolve, reject) => {
    data.records.forEach(el => {
      result[el.fields.ward_name] = el.fields.statistic;
    });
    resolve(result);
  });
};
