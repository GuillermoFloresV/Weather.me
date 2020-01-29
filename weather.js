$(document).ready(function(){

    $("#submittedCity").click(function(){
        return getWeather();

    });

});

function getWeather()
{
    var inputtedCity = $("#cityInput").val();
    var my_key = config.MY_KEY;
    if (inputtedCity != '')
    {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + inputtedCity + "&units=imperial" +"&APPID="+ my_key,
            type: "GET",
            dataType: "jsonp",
            success: function(data)
            {

                var weatherWidget = showResults(data);

                $("#showWeather").html(weatherWidget);
                //sets the input field to empty for the next weather request
                $("#inputtedCity").val("");
            }
        });
    }
    else{
        $("#error").html("<div class='alert alert-danger' id='error-city'> City field cannot be left empty </div>");
    }
}


function showResults(data)
{
    return  '<h3>Current weather information for: ' + data.name+ ',' + data.sys.country +'</h3>' +
            "<p>Weather: </p>" + data.weather[0].main + "</p>"+
            "<p>Weather Description: </p>" + data.weather[0].description + "</p>"+
            "<p>Temperature: " + data.main.temp +" &deg;F</p>" +
            "Current Pressure: " +data.main.pressure+" hpa</p>"+
            " <p> Humidity: " + data.main.humidity + "%</p>"+
            "<p>Wind Speed: " + data.wind.speed + " Miles per Hour</p>"+
            "<p> Low of the day: " + data.main.temp_min + "&deg;F</p>" +
            "<p> High of the day: " + data.main.temp_max + "&deg;F</p>";
}