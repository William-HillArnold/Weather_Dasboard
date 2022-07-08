var apiKey = ('c84e38feffd764aec8726b3fb42e3ed6');
var weatherApi = ('api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}&units=imperial');
var button = document.querySelector('.btn');
var city = document.querySelector('.city');
var inputValue = document.querySelector('.inputValue');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var uvIndex = document.querySelector('uvIndex');
const time = document.getElementById('time');
var tempMax = document.querySelector('.tempMax');
var tempMin = document.querySelector('.tempMin');
var description = document.querySelector('.description')
//   function getCity(){
//       const newCity = document.getElementById('cityInput');
//       const cityName = document.getElementById('cityName');
//       cityName.innerHTML = newName.value
//        console.log(newCity);
//   }

button.addEventListener('click', function() {
fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=45bf08bcabf42c4645ac65d3c9686f82&units=imperial')
 .then(response => response.json())
 .then (data => {
     console.log(data);
    var cityValue = 'City: ' + data['name'];
    var tempValue = 'Temperature: ' + data['main']['temp'] + '°F';
    var humidityValue = 'Humidity: ' + data['main']['humidity'];
    var maxTempValue = 'Max: ' + data['main']['temp_max']+ '°F';
    var minTempValue = 'Min: ' + data['main']['temp_min']+ '°F';
    var windValue = 'Wind Speed (mph): ' + data['wind']['speed'];
    //var descriptionValue = data['weather']['main'];
     
    
     city.innerHTML = cityValue;
     temp.innerHTML = tempValue;
     humidity.innerHTML = humidityValue;
     tempMax.innerHTML = maxTempValue;
     tempMin.innerHTML = minTempValue;
     wind.innerHTML = windValue;
     //description.innerHTML = descriptionValue
    // fetch()
    
 }) 

 
 })       