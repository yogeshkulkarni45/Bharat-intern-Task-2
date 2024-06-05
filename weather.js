const apiKey = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      document.querySelector('.weather-info').style.display = 'block';
    })
    .catch(error => {
      alert('City not found. Please enter a valid city name.');
      document.querySelector('.weather-info').style.display = 'none';
    });
}
