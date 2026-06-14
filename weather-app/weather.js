let myInput = document.querySelector("input")
let myBtn = document.querySelector("button")
let myDiv = document.getElementById("output")

console.log(myInput, myBtn, myDiv);

myBtn.addEventListener("click", async ()=>{

    myDiv.innerHTML = ""
    
    let mykey = "YOUR_KEY"
    
    myDiv.innerHTML = "<h2>🌦 Loading weather...</h2>";

    let myFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myInput.value}&appid=${mykey}`)

    if (myInput.value.trim() === "") {
    myDiv.innerHTML = "<h2>Please enter city name</h2>";
    return;
    }

    if (!myFetch.ok) {
    myDiv.innerHTML = "<h2>City not found 😢</h2>";
    return;
    }

    let data = await myFetch.json()
 
    myDiv.innerHTML = ""; // remove loading

    let cityName = document.createElement("h1");
    cityName.innerHTML = `City Name: ${data.name}`;

    let cityTemp = document.createElement("h2");
    cityTemp.innerHTML = `Temparature: ${Math.floor(data.main.temp-273.15)}º C`;

    let weather = document.createElement("h2")
    weather.innerHTML = `Climate: ${data.weather[0].main}`;

    let windSpeed = document.createElement("h2");
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} km/hr`

    let humidity = document.createElement("h2");
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;


    myDiv.append(cityName, cityTemp, weather, windSpeed, humidity)
    console.log(data, cityName, cityTemp);
    

})

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}  => change city name, API key arguments
