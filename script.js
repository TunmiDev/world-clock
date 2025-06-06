let intervalId = setInterval(updateTime, 1000); // Auto-update for default cities
let cityIntervalId; // For single city updates

function updateTime() {
  // Los Angeles Time Update
  let losAngelesElement = document.querySelector("#Los-Angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Lagos Time Update
  let lagosElement = document.querySelector("#Lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");

    let lagosTime = moment().tz("Africa/Lagos");

    lagosDateElement.innerHTML = lagosTime.format("dddd, MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  clearInterval(intervalId); // Stop default city updates
  if (cityIntervalId) {
    clearInterval(cityIntervalId); // Stop any previous city update
  }

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div class="city-info">
        <h2>${cityName}</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>
    <a href="index.html" class="back-link">Back to all cities</a>
  `;

  // Select newly created time/date elements
  let cityDateElement = citiesElement.querySelector(".date");
  let cityTimeElement = citiesElement.querySelector(".time");

  // Update the time immediately
  function updateSelectedCityTime() {
    let cityTime = moment().tz(cityTimeZone);
    cityDateElement.innerHTML = cityTime.format("dddd, MMMM Do YYYY");
    cityTimeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
  }

  updateSelectedCityTime(); // Initial update
  cityIntervalId = setInterval(updateSelectedCityTime, 1000); // Keep updating
}

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);

// Initial update and interval start
updateTime();
