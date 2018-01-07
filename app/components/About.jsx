var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Here at ReactWeather you can enter any city on the globe abd get it current temperature.</p>
      <p>We use <a href='https://openweathermap.org/'>OpeWeatherMap</a> to power this.</p>
    </div>
  )
};

module.exports = About;
