const apiKey = "35d011654bef60ba3c639b42e8aacc9c"
var counter = 0
//Search variables
var submitForm = document.getElementById("submit")
var searchBtn = document.getElementById("btn");
var zipInput = document.getElementById("zipinput");
//Current temp display variables
var searchedCity = document.getElementById("searched-city")
var currentTemps = document.getElementById("temp");
var currentWinds = document.getElementById("wind");
var currentHumids = document.getElementById("humidity");
var currentUvs = document.getElementById("uvindex");
//Five day forecast date variables
var dateOne = document.getElementById("date1");
var dateTwo = document.getElementById("date2");
var dateThree = document.getElementById("date3");
var dateFour = document.getElementById("date4");
var dateFive = document.getElementById("date5");
//five day forecast temp variables
var tempOne = document.getElementById("temp1");
var tempTwo = document.getElementById("temp2");
var tempThree = document.getElementById("temp3");
var tempFour = document.getElementById("temp4");
var tempFive = document.getElementById("temp5");
//Previous search Variables
var cityOne = document.getElementById("city1");
var cityTwo = document.getElementById("city2");
var cityThree = document.getElementById("city3");
var cityFour = document.getElementById("city4");
var cityFive = document.getElementById("city5");
//local storage array
var cities = [cityOne, cityTwo, cityThree, cityFour, cityFive]

//Pulling past searches from local storage
$("#city1").val(cities[0].zip);
$("#city2").val(cities[1].zip);
$("#city3").val(cities[2].zip);
$("#city4").val(cities[3].zip);
$("#city5").val(cities[4].zip);



var searchFunction = function(event){
    if(event){event.preventDefault();}
    let zipCode = zipInput.value || "richmond";
    saveSearches(zipCode);
    console.log(zipCode);
    let apiAddress = "https://api.openweathermap.org/data/2.5/weather?q="+ zipCode + "&units=imperial&appid=" + apiKey;
    let apiAddress2 = "https://api.openweathermap.org/data/2.5/forecast?q="+ zipCode + "&units=imperial&appid=" + apiKey;
    fetch(apiAddress)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
searchedCity.innerHTML = data.name;
        currentTemps.innerHTML = "Temp: " + data.main.temp + " F";
        currentWinds.innerHTML = "Wind Speed: " + data.wind.speed + " MPH"
        currentHumids.innerHTML = "Humidity: " + data.main.humidity 
        console.log(data)
    })
    fetch(apiAddress2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
            dateOne.innerHTML = data.list[0].dt_txt;
            tempOne.innerHTML = "Temp: " + data.list[0].main.temp + " F";
            dateTwo.innerHTML = data.list[7].dt_txt;
            tempTwo.innerHTML = "Temp: " + data.list[7].main.temp + " F";
            dateThree.innerHTML = data.list[15].dt_txt;
            tempThree.innerHTML = "Temp: " + data.list[15].main.temp + " F";
            dateFour.innerHTML = data.list[23].dt_txt;
            tempFour.innerHTML = "Temp: " + data.list[23].main.temp + " F";
            dateFive.innerHTML = data.list[31].dt_txt;
            tempFive.innerHTML = "Temp: " + data.list[31].main.temp + " F";
        console.log(data)
    })
};

var saveSearches = function(zip){
    cities[counter].innerHTML = zip
    localStorage.setItem(cities[counter], zip)
    if (counter < 4 ){
        counter++
    }
    else{
        counter = 0
    }
};


searchFunction();
submitForm.addEventListener("submit", searchFunction);
    
