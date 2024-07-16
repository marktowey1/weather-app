const searchButton = document.getElementById("search-button");
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
    console.log(data);

    temperature.innerHTML = data.main.temp + "°C";
    city.innerHTML = data.name;
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
}
