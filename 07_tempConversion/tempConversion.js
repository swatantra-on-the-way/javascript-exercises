const convertToCelsius = function(fTemp) {
  result = ((fTemp - 32) * (10 / 18));
  tmp1 = Number(result.toFixed());
  if (result - tmp1 === 0){
    return result;
  }
  return Number(result.toFixed(1));

};

const convertToFahrenheit = function(cTemp) {
  result = ((18 / 10) * cTemp + 32);
  tmp1 = Number(result.toFixed());
  if (result - tmp1 === 0){
    return result;
  }
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
