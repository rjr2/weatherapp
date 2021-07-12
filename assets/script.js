const apiKey = "35d011654bef60ba3c639b42e8aacc9c"
var counter = 0
//Search variables
var searchBtn = document.getElementById("btn");
var zipInput = document.getElementById("zipinput");
//Current temp display variables
var currentTemp = document.getElementById("temp");
var currentWind = document.getElementById("wind");
var currentHumid = document.getElementById("humidity");
var currentUv = document.getElementById("uvindex");
//Five day forecast variables
var dayOne = document.getElementById("day1");
var dayTwo = document.getElementById("day2");
var dayThree = document.getElementById("day3");
var dayFour = document.getElementById("day4");
var dayFive = document.getElementById("day5");
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

var searchFunction = function(){
    let zipCode = zipInput.value;
    saveSearches(zipCode);
    console.log(zipCode);
    let apiAddress = "https://api.openweathermap.org/data/2.5/forecast?q="+ zipCode + "&appid=" + apiKey;
    fetch(apiAddress)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)})

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



searchBtn.addEventListener("click", searchFunction);
    
cityOne.addEventListener("click", function(){
    cityOne.value;
    console.log(cityOne.value);
    let apiAddress = "https://api.openweathermap.org/data/2.5/forecast?q="+ cityOne + "&appid=" + apiKey;
    fetch(apiAddress)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)})
})