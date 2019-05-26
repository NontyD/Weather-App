var socket = new WebSocket('ws://websocket.localhost:8125');

// Show a connected message when the WebSocket is opened.
socket.onopen = function(event) {
  console.log('WebSocket is connected.');
};
fetch( 'https://api.openweathermap.org/data/2.5/forecast?q=Dublin,ie&appid=338523c82abed3834b7adaee46a3b574&units=metrics')
  .then(function(response) {
    return response.json();
  })
  .then(function(forecast) {
    console.log(JSON.stringify(forecast));
    console.log(forecast.list[0].main.temp);

var currentDate = new Date();
	var dayNight = "day";
    
var dateElem = document.getElementById("date");
	dateElem.innerHTML = currentDate.toDateString();
    var iconCode = forecast.list[0].weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    document.getElementById("icon1").innerHTML = iconUrl;
    var iconCode2 = forecast.list[8].weather[0].icon;
    var iconUrl2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png";
    var iconCode3 = forecast.list[16].weather[0].icon;
    var iconUrl3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png";
    var iconCode4 = forecast.list[24].weather[0].icon;
    var iconUrl4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png";
    var iconCode5 = forecast.list[32].weather[0].icon;
    var iconUrl5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png";
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(forecast.list[0].dt * 1000);
    var day = days[d.getDay()];
    document.getElementById("day1").innerHTML = day;
    var temperature = forecast.list[0].main.temp;
    var tempCelc = Math.round(temperature - 275.15 ) + '&#8451';    document.getElementById("temperature1").innerHTML = tempCelc;
    var description = forecast.list[0].weather[0].description;

    var pressure = forecast.list[0].main.pressure;   document.getElementById("pressure1").innerHTML = Math.round(pressure) + 'hPa';
    var humidity = forecast.list[0].main.humidity;   document.getElementById("humidity1").innerHTML = humidity + '%';
    var wind = forecast.list[0].wind.speed;
    var windspeed = Math.round(wind * 3.411809)
    document.getElementById("windspeed1").innerHTML = windspeed + 'km/h';
    
    var days1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d1 = new Date(forecast.list[8].dt * 1000);
    var day1 = days[d1.getDay()];
    document.getElementById("day2").innerHTML = day1;
    var temperature1 = forecast.list[8].main.temp;
    var tempCelc1 = Math.round(temperature1 - 275.15 ) + '&#8451';    document.getElementById("temperature2").innerHTML = tempCelc1;
    var description = forecast.list[8].weather[0].description;

    var pressure1 = forecast.list[8].main.pressure;   document.getElementById("pressure2").innerHTML = Math.round(pressure1) + 'hPa';
    var humidity1 = forecast.list[8].main.humidity;   document.getElementById("humidity2").innerHTML = humidity1 + '%';
    var wind1 = forecast.list[8].wind.speed;
    var windspeed1 = Math.round(wind1 * 3.411809)
    document.getElementById("windspeed2").innerHTML = windspeed1 + 'km/h';
    
    var days3 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d3 = new Date(forecast.list[16].dt * 1000);
    var day3 = days[d3.getDay()];
    document.getElementById("day3").innerHTML = day3;
    var temperature3 = forecast.list[16].main.temp;
    var tempCelc3 = Math.round(temperature3 - 275.15 ) + '&#8451';    document.getElementById("temperature3").innerHTML = tempCelc3;
    var description = forecast.list[16].weather[0].description;

    var pressure3 = forecast.list[16].main.pressure;   document.getElementById("pressure3").innerHTML = Math.round(pressure3) + 'hPa';
    var humidity3 = forecast.list[16].main.humidity;   document.getElementById("humidity3").innerHTML = humidity3 + '%';
    var wind3 = forecast.list[16].wind.speed;
    var windspeed3 = Math.round(wind3 * 3.411809)
    document.getElementById("windspeed3").innerHTML = windspeed3 + 'km/h';
     var days4 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d4 = new Date(forecast.list[24].dt * 1000);
    var day4 = days[d4.getDay()];
    document.getElementById("day4").innerHTML = day4;
    var temperature4 = forecast.list[24].main.temp;
    var tempCelc4 = Math.round(temperature4 - 275.15 ) + '&#8451';    document.getElementById("temperature4").innerHTML = tempCelc4;
    var description = forecast.list[24].weather[0].description;

    var pressure4 = forecast.list[24].main.pressure;   document.getElementById("pressure4").innerHTML = Math.round(pressure4) + 'hPa';
    var humidity4 = forecast.list[24].main.humidity;   document.getElementById("humidity4").innerHTML = humidity + '%';
    var wind4 = forecast.list[24].wind.speed;
    var windspeed4 = Math.round(wind4 * 3.411809)
    document.getElementById("windspeed4").innerHTML = windspeed4 + 'km/h';
     var days5 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d5 = new Date(forecast.list[32].dt * 1000);
    var day5 = days[d5.getDay()];
    document.getElementById("day5").innerHTML = day5;
    var temperature5 = forecast.list[32].main.temp;
    var tempCelc5 = Math.round(temperature5 - 275.15 ) + '&#8451';    document.getElementById("temperature5").innerHTML = tempCelc5;
    var description = forecast.list[32].weather[0].description;

    var pressure5 = forecast.list[32].main.pressure;   document.getElementById("pressure5").innerHTML = Math.round(pressure5) + 'hPa';
    var humidity5 = forecast.list[32].main.humidity;   document.getElementById("humidity5").innerHTML = humidity5 + '%';
    var wind5 = forecast.list[32].wind.speed;
    var windspeed5 = Math.round(wind5 * 3.411809)
    document.getElementById("windspeed5").innerHTML = windspeed5 + 'km/h';
    
     document.getElementById("t1").innerHTML = forecast.list[0].dt_txt.split(" ")[1];
    document.getElementById("t2").innerHTML = forecast.list[1].dt_txt.split(" ")[1];
    document.getElementById("t3").innerHTML = forecast.list[2].dt_txt.split(" ")[1];
    document.getElementById("t4").innerHTML = forecast.list[3].dt_txt.split(" ")[1];
    document.getElementById("t5").innerHTML = forecast.list[4].dt_txt.split(" ")[1];
    document.getElementById("t6").innerHTML = forecast.list[5].dt_txt.split(" ")[1];
    document.getElementById("t7").innerHTML = forecast.list[6].dt_txt.split(" ")[1];
    document.getElementById("t8").innerHTML = forecast.list[7].dt_txt.split(" ")[1];
    
    document.getElementById("d1").innerHTML = Math.round(forecast.list[0].main.temp - 275.15)+ '&#8451';
    document.getElementById("d2").innerHTML = Math.round(forecast.list[1].main.temp - 275.15)+ '&#8451';
    document.getElementById("d3").innerHTML = Math.round(forecast.list[2].main.temp - 275.15)+ '&#8451';
    document.getElementById("d4").innerHTML = Math.round(forecast.list[3].main.temp - 275.15)+ '&#8451';
    document.getElementById("d5").innerHTML = Math.round(forecast.list[4].main.temp - 275.15)+ '&#8451';
    document.getElementById("d6").innerHTML = Math.round(forecast.list[5].main.temp - 275.15)+ '&#8451';
    document.getElementById("d7").innerHTML = Math.round(forecast.list[6].main.temp - 275.15)+ '&#8451';
    document.getElementById("d8").innerHTML = Math.round(forecast.list[7].main.temp - 275.15)+ '&#8451';
    
    document.getElementById("t11").innerHTML = forecast.list[8].dt_txt.split(" ")[1];
    document.getElementById("t21").innerHTML = forecast.list[9].dt_txt.split(" ")[1];
    document.getElementById("t31").innerHTML = forecast.list[10].dt_txt.split(" ")[1];
    document.getElementById("t41").innerHTML = forecast.list[11].dt_txt.split(" ")[1];
    document.getElementById("t51").innerHTML = forecast.list[12].dt_txt.split(" ")[1];
    document.getElementById("t61").innerHTML = forecast.list[13].dt_txt.split(" ")[1];
    document.getElementById("t71").innerHTML = forecast.list[14].dt_txt.split(" ")[1];
    document.getElementById("t81").innerHTML = forecast.list[15].dt_txt.split(" ")[1];
    
    document.getElementById("d11").innerHTML = Math.round(forecast.list[8].main.temp - 275.15)+ '&#8451';
    document.getElementById("d21").innerHTML = Math.round(forecast.list[9].main.temp - 275.15)+ '&#8451';
    document.getElementById("d31").innerHTML = Math.round(forecast.list[10].main.temp - 275.15)+ '&#8451';
    document.getElementById("d41").innerHTML = Math.round(forecast.list[11].main.temp - 275.15)+ '&#8451';
    document.getElementById("d51").innerHTML = Math.round(forecast.list[12].main.temp - 275.15)+ '&#8451';
    document.getElementById("d61").innerHTML = Math.round(forecast.list[13].main.temp - 275.15)+ '&#8451';
    document.getElementById("d71").innerHTML = Math.round(forecast.list[14].main.temp - 275.15)+ '&#8451';
    document.getElementById("d81").innerHTML = Math.round(forecast.list[15].main.temp - 275.15)+ '&#8451';
    
    document.getElementById("t12").innerHTML = forecast.list[16].dt_txt.split(" ")[1];
    document.getElementById("t22").innerHTML = forecast.list[17].dt_txt.split(" ")[1];
    document.getElementById("t32").innerHTML = forecast.list[18].dt_txt.split(" ")[1];
    document.getElementById("t42").innerHTML = forecast.list[19].dt_txt.split(" ")[1];
    document.getElementById("t52").innerHTML = forecast.list[20].dt_txt.split(" ")[1];
    document.getElementById("t62").innerHTML = forecast.list[21].dt_txt.split(" ")[1];
    document.getElementById("t72").innerHTML = forecast.list[22].dt_txt.split(" ")[1];
    document.getElementById("t82").innerHTML = forecast.list[23].dt_txt.split(" ")[1];
    
    document.getElementById("d12").innerHTML = Math.round(forecast.list[16].main.temp - 275.15)+ '&#8451';
    document.getElementById("d22").innerHTML = Math.round(forecast.list[17].main.temp - 275.15)+ '&#8451';
    document.getElementById("d32").innerHTML = Math.round(forecast.list[18].main.temp - 275.15)+ '&#8451';
    document.getElementById("d42").innerHTML = Math.round(forecast.list[19].main.temp - 275.15)+ '&#8451';
    document.getElementById("d52").innerHTML = Math.round(forecast.list[20].main.temp - 275.15)+ '&#8451';
    document.getElementById("d62").innerHTML = Math.round(forecast.list[21].main.temp - 275.15)+ '&#8451';
    document.getElementById("d72").innerHTML = Math.round(forecast.list[22].main.temp - 275.15)+ '&#8451';
    document.getElementById("d82").innerHTML = Math.round(forecast.list[23].main.temp - 275.15)+ '&#8451';
    
    document.getElementById("t13").innerHTML = forecast.list[24].dt_txt.split(" ")[1];
    document.getElementById("t23").innerHTML = forecast.list[25].dt_txt.split(" ")[1];
    document.getElementById("t33").innerHTML = forecast.list[26].dt_txt.split(" ")[1];
    document.getElementById("t43").innerHTML = forecast.list[27].dt_txt.split(" ")[1];
    document.getElementById("t53").innerHTML = forecast.list[28].dt_txt.split(" ")[1];
    document.getElementById("t63").innerHTML = forecast.list[29].dt_txt.split(" ")[1];
    document.getElementById("t73").innerHTML = forecast.list[30].dt_txt.split(" ")[1];
    document.getElementById("t83").innerHTML = forecast.list[31].dt_txt.split(" ")[1];
    
    document.getElementById("d13").innerHTML = Math.round(forecast.list[24].main.temp - 275.15)+ '&#8451';
    document.getElementById("d23").innerHTML = Math.round(forecast.list[25].main.temp - 275.15)+ '&#8451';
    document.getElementById("d33").innerHTML = Math.round(forecast.list[26].main.temp - 275.15)+ '&#8451';
    document.getElementById("d43").innerHTML = Math.round(forecast.list[27].main.temp - 275.15)+ '&#8451';
    document.getElementById("d53").innerHTML = Math.round(forecast.list[28].main.temp - 275.15)+ '&#8451';
    document.getElementById("d63").innerHTML = Math.round(forecast.list[29].main.temp - 275.15)+ '&#8451';
    document.getElementById("d73").innerHTML = Math.round(forecast.list[30].main.temp - 275.15)+ '&#8451';
    document.getElementById("d83").innerHTML = Math.round(forecast.list[31].main.temp - 275.15)+ '&#8451';
    
    document.getElementById("t14").innerHTML = forecast.list[32].dt_txt.split(" ")[1];
    document.getElementById("t24").innerHTML = forecast.list[33].dt_txt.split(" ")[1];
    document.getElementById("t34").innerHTML = forecast.list[34].dt_txt.split(" ")[1];
    document.getElementById("t44").innerHTML = forecast.list[35].dt_txt.split(" ")[1];
    document.getElementById("t54").innerHTML = forecast.list[36].dt_txt.split(" ")[1];
    document.getElementById("t64").innerHTML = forecast.list[37].dt_txt.split(" ")[1];
    document.getElementById("t74").innerHTML = forecast.list[38].dt_txt.split(" ")[1];
    document.getElementById("t84").innerHTML = forecast.list[39].dt_txt.split(" ")[1];
    
    document.getElementById("d14").innerHTML = Math.round(forecast.list[32].main.temp - 275.15)+ '&#8451';
    document.getElementById("d24").innerHTML = Math.round(forecast.list[33].main.temp - 275.15)+ '&#8451';
    document.getElementById("d34").innerHTML = Math.round(forecast.list[34].main.temp - 275.15)+ '&#8451';
    document.getElementById("d44").innerHTML = Math.round(forecast.list[35].main.temp - 275.15)+ '&#8451';
    document.getElementById("d54").innerHTML = Math.round(forecast.list[36].main.temp - 275.15)+ '&#8451';
    document.getElementById("d64").innerHTML = Math.round(forecast.list[37].main.temp - 275.15)+ '&#8451';
    document.getElementById("d74").innerHTML = Math.round(forecast.list[38].main.temp - 275.15)+ '&#8451';
    document.getElementById("d84").innerHTML = Math.round(forecast.list[39].main.temp - 275.15)+ '&#8451';
    
    
});

function day1() {    document.getElementById("detailed1").style.display = 'block';
 }
function day2() {    document.getElementById("detailed2").style.display = 'block';
    }
function day3() {    document.getElementById("detailed3").style.display = 'block';
    }
function day4() {    document.getElementById("detailed4").style.display = 'block';
    }
function day5() {    document.getElementById("detailed5").style.display = 'block';
    }


