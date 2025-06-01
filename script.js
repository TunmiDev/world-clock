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
