function updateTime() {
  //Los Angeles Time Update
  let losAngelesElement = document.querySelector("#Los-Angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Lagos Time Update
  let lagosElement = document.querySelector("#Lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");

  let lagosTime = moment().tz("Africa/Lagos");

  lagosDateElement.innerHTML = lagosTime.format("dddd, MMMM Do YYYY");
  lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();

setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (!cityTimeZone || cityTimeZone === "select a City") return;

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <div class="city-info">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
  `;
}

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);
