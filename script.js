var APIKey = "c4ba4f73e7697b2af968370b13c7b401";
var queryUrl = "api.openweathermap.org/data/2.5/weather?" + "q=austin&appid=" + APIKey;
var city = $("searchBar").val();

// once you type in city in search bar, click search button
$("searchBtn").on("click", function (event) {
    var value = $(this).siblings("#searchBar").val();
    var wxFind = $(this).parent().attr("#searchBtn");

    // used to prevent an event's default behavior
    event.preventDefault();

    // save to local storage
    localStorage.setItem(value, wxFind);
});

$("cities").val(localStorage.getItem("cities"));
    
    // grab text from input box
    city = $("#searchBar").val();

// call to the OpenWeatherMap API
    $.ajax({
        url: queryUrl,
        method: "GET"

    // restore the data that we retrieved inside of an object called response
    }).then(function (response) {
        
        $("wxInfo").text(JSON.stringify(response));

        console.log(response);

       
        // Transfer content to HTML
        $(".city").html("<h1>") + response.name + " Weather Details</h1>";
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
        
    });