const apiKey = "83fd21b8d9aaee2db03a37e73cc1570c";
async function getweather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("city").innerText = data.name;
    document.getElementById("weather-icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    document.getElementById("temp").innerText = `${ data.main.temp }°C`;

    document.getElementById("condition").innerText = data.weather[0].main;

    document.getElementById("humidity").innerText = data.main.humidity;

    document.getElementById("wind").innerText = data.wind.speed;
}