var APIKey = "&appid=c4ba4f73e7697b2af968370b13c7b401";

// once you type in city in search bar, click search button
$(".searchBtn").on("click", function (event) {
    var searchBar = $(".searchBar").val();
    var value = $(this).siblings(".searchBar").val();
    // var wxFind = $(this).parent().attr(".searchBtn");

    // used to prevent an event's default behavior
    event.preventDefault();

    var city = $(".searchBar").val();
    getWeather(city);

    // save to local storage
    localStorage.setItem(".searchBar", value);

    $(".searchBar").val(localStorage.getItem(".searchBar"));

});

// grab text from input box
function getWeather(city) {
    console.log(city);
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;

    // call to the OpenWeatherMap API
    $.ajax({
        url: queryUrl,
        method: "GET"

        // restore the data that we retrieved inside of an object called response
    }).then(function (response) {

        $("wxInfo").text(JSON.stringify(response));

        console.log(response);

        // Main Section - Transfer content to HTML
        $(".currentDay").text(moment().format('l'));

        $(".city").text("City: ") + response.name + "Weather Details</div>";
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);

        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);

    
        // 5-Day Forecast - Transfer content to HTML
        $(".date").text("Date: ") + response.date + "Weather Details</div>";

        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        $(".humidity").text("Humidity: " + response.main.humidity);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);

        $(".date1").text(moment().format('l'));
        $(".date2").text(moment().add(1, 'days').format('l'));
        $(".date3").text(moment().add(2, 'days').format('l'));
        $(".date4").text(moment().add(3, 'days').format('l'));
        $(".date5").text(moment().add(4, 'days').format('l'));

    });
}
