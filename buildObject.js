const getData = require("./getData");
const eventEmitter = require("events");
const fs = require("fs").promises;

const DATASET = "quality-of-life-2018-19-ward";
const INDICATORS = [
  "% who have a Bristol library card",
  "% above average mental wellbeing"
];
const ROWS = 35;

let counter = 0;

const event = new eventEmitter();
module.exports.wards = [];
module.exports.build = function() {
  getData
    .getRecords(DATASET, INDICATORS[0], ROWS)
    .then(getData.initWards)
    .then(data => {
      wards = data.wards;
      event.emit("init");
      return new Promise((resolve, reject) => {
        resolve(data.raw);
      });
    })
    .then(getData.parseRecords)
    .then(data => {
      appendProperty("card", data);
    })
    .catch(e => {
      console.log(e);
    });
};

event.on("init", function() {
  getData
    .getRecords(DATASET, INDICATORS[1], ROWS)
    .then(getData.parseRecords)
    .then(data => {
      appendProperty("wellBeing", data);
    })
    .catch(e => {
      console.log(e);
    });
});

event.on("addProp", function() {
  counter++;
  if (counter === INDICATORS.length) event.emit("done");
});

event.on("done", function() {
  fs.writeFile(
    "./views/circles.js",
    `const circles = ${JSON.stringify(wards)};`
  );
});

function appendProperty(property, data) {
  let average = data[".Bristol Average"];
  wards.forEach(ward => {
    ward[property] = data[ward.name];
    ward[`${property}AboveAvg`] = data[ward.name] > average;
  });
  event.emit("addProp");
}
