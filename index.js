 
  function getWeather() {
    const apiKey = '7ebca2935bde4770959182939231810';
    const region = document.getElementById('city-input').value;
    document.getElementById('city-name').innerHTML = region; 
  
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${region}&aqi=yes`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('weather-icon').src = data.current.condition.icon;
        document.getElementById('temperature').innerHTML = data.current.temp_c + '°C';
        document.getElementById('weather-description').innerHTML = data.current.condition.text;
  
        console.log(data); 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
