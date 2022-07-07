 var apiKey = ('c84e38feffd764aec8726b3fb42e3ed6');
 var weatherApi = ('api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}&units=imperial');
 var button = document.querySelector('.btn');
 var city = document.querySelector('.city');
 var inputValue = document.querySelector('.inputValue');
 var temp = document.querySelector('.temp');
 var humidity = document.querySelector('.humidity');
 var wind = document.querySelector('wind');
 var uvIndex = document.querySelector('uvIndex');
 const time = document.getElementById('time');

  function getCity(){
      const newCity = document.getElementById('cityInput');
      const cityName = document.getElementById('cityName');
      cityName.innerHTML = newName.value
       console.log(newCity);
  }

button.addEventListener('click', function() {
fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=45bf08bcabf42c4645ac65d3c9686f82')
 .then(response => response.json())
 .then (data => console.log(data)) 

 .catch(err => alert('Enter a city!'))
 })