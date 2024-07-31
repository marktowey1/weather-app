const searchButton = document.getElementById("search-button");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");

const apiKey = "5ab6d6daee632e76dd710c39ec853f23";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

searchButton.addEventListener("click", checkWeather);

async function checkWeather(e) {
  e.preventDefault();
  const cityInput = document.getElementById("city-input").value;

  try {
    const response = await axios.get(
      apiUrl + `&appid=${apiKey}&q=${cityInput}`
    );

    const data = response.data;

    document.getElementById("error").style.display = "none";
    document
      .querySelector(".weather-info")
      .classList.remove("hide-weather-info");
    weatherIcon.src = `images/${data.weather[0].main}.png`;
    temperature.innerHTML = Math.floor(data.main.temp) + "°C";
    city.innerHTML = data.name;
  } catch (error) {
    console.log("Error fetching weather data:", error);

    if (error.response.status == 404) {
      document.getElementById("error").style.display = "block";
      document
        .querySelector(".weather-info")
        .classList.add("hide-weather-info");
    } else {
      console.log(error.message);
    }
  }
}
