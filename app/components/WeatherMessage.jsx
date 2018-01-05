var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h3 className="text-center">The temp in {location} is {temp}</h3>
  )
};
module.exports = WeatherMessage;
