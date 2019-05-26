var socket = new WebSocket('ws://websocket.localhost:8125');

// Show a connected message when the WebSocket is opened.
socket.onopen = function(event) {
  console.log('WebSocket is connected.');
};
fetch( 'https://api.openweathermap.org/data/2.5/forecast?q=Dublin,ie&units=metrics&appid=338523c82abed3834b7adaee46a3b574')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    console.log(myJson.list[0].main.temp);

var currentDate = new Date();
	var dayNight = "day";	

	var dateElem = document.getElementById("date");
	dateElem.innerHTML = currentDate.toDateString();
    var temperature = myJson.list[0].main.temp;
    var tempCelc = Math.round(temperature - 275.15 ) + '&#8451';    document.getElementById("temperature").innerHTML = tempCelc;
    var description = myJson.list[0].weather[0].description;
    document.getElementById("description").innerHTML = description;
    var icon = myJson.list[0].weather[0].icon; + ".png";
    var iconUrl = "http://openweathermap.org/img/w/" + icon+ ".png"; 
    console.log(iconUrl);
    
    var pressure = myJson.list[0].main.pressure;   document.getElementById("pressure").innerHTML = Math.round(pressure) + 'hPa';
    var humidity = myJson.list[0].main.humidity;   document.getElementById("humidity").innerHTML = humidity + '%';
    var wind = myJson.list[0].wind.speed;
    var windspeed = Math.round(wind * 3.411809)
    document.getElementById("wind").innerHTML = windspeed + 'km/h';
    
    });

function select() {
      var x = document.getElementsByClassName("days");
    if(x.value == "5")
     document.getElementsByClassName("container").style.display = 'none';
}
function display() {
     document.getElementsById("submit").onclick;
function showHide() {
    if(document.getElementById("humidity").checked) {
        document.getElementsByClassName("humidity").style.display = "block";
    }
    if(document.getElementById("pressure").checked) {
        document.getElementsByClassName("pressure").style.display = "block";
    }
    if(document.getElementById("windspeed").checked) {
        document.getElementsByClassName("windspeed").style.display = "block";
    }
    function display() {
        document.getElementsByClassName("container").style.display = 'none';
        return "forecst.html";
        
    }
}

}
  
