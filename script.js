
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&appid=748778755175dcebdaf648c31eb5369b&units=metric&q=";
console.log(apiURL);

const searchCity = document.getElementById("city");
const searchBtn = document.querySelector("#searchBtn");

async function checkWeather(city) {
    const response = await fetch(apiURL + city);
    if(response.status == 404){
        document.querySelector(".errMsg").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        var data = await response.json();
        console.log(data);

        document.querySelector("#cityName").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector("#high").innerHTML = "H: " + Math.round(data.main.temp_max) + "°C";
        document.querySelector("#low").innerHTML = "L: " + Math.round(data.main.temp_min) + "°C";
        document.querySelector("#type").innerHTML = data.weather[0].main;

        document.querySelector(".errMsg").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    
}

searchBtn.addEventListener("click", () => {
    // document.querySelector(".search").style.display = "none";
    if(searchCity.value!== "") {
        checkWeather(searchCity.value);
        searchCity.value="";    
        document.querySelector("#temp").style.display = "block";
        document.querySelector("#high").style.display = "inline-block";
        document.querySelector("#low").style.display = "inline-block";
        document.querySelector("#type").style.display = "inline-block";
    }
    else {
        document.querySelector(".errMsg").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector("#temp").style.display = "none";
        document.querySelector("#high").style.display = "none";
        document.querySelector("#low").style.display = "none";
        document.querySelector("#type").style.display = "none";
    }
})
