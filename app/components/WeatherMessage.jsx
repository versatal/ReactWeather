var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <p>The temp in {location} is {temp}</p>
  )
};
module.exports = WeatherMessage;
