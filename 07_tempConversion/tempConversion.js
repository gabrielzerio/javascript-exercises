const convertToCelsius = function(tempF) {
let convert = Math.round(((tempF-32)*(5/9))*10)/10;
return convert;
};

const convertToFahrenheit = function(tempC) {
let convert = Math.round(((tempC*(9/5)) + 32)*10)/10;
return convert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
