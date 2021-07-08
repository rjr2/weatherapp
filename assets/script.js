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
//Variables for color changing
// const rows = document.getElementsByClassName("row");
// let currentHour = parseInt(moment().format('H'));

//Pulling past searches from local storage
 //$("#city1").val(localstorage.city1);
// $("#city2").val(localstorage.city2);
// $("#city3").val(localstorage.city3);
// $("#city4").val(localstorage.city4);
// $("#city5").val(localstorage.city5);

var searchFunction = function(){
    let zipCode = zipInput.value;
    saveSearches(zipCode);
    console.log(zipCode);
    let apiAddress = "https://api.openweathermap.org/data/2.5/forecast?q="+ zipCode + "&appid=" + apiKey;
    console.log(apiAddress);
    fetch(apiAddress)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)})

};

var saveSearches = function(zip){
    localStorage.setItem(city1, zip)
    cities[counter].innerHTML = zip
    if (counter < 4 ){
        counter++
    }
    else{
        counter = 0
    }
};



searchBtn.addEventListener("click", searchFunction);
    
// document.getElementById("btn").addEventListener("click", displayDate);


//UV color changing
// Array.from(rows).forEach(row => {
//     let
//       rowIdString = row.id,
//       rowHour;
//     if (rowIdString) {
//       rowHour = parseInt(rowIdString);
//     }
//     if (rowHour) {
//       if (currentHour === rowHour) {
//         setColor(row, "red");
//       } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//         setColor(row, "green");
//       } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//         setColor(row, "lightgrey");
//       } else {
//         setColor(row, "white");
//       }
//     }
//   });
  
//   function setColor(element, color) {
//     element.style.backgroundColor = color;
//   }




