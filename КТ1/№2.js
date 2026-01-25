let temp = Number (prompt("Введите temp"))
let weather = prompt("Введите weather (clear/cloudy)")
if (weather == "clear" && temp >= 25) {
  activity = "golf"
  console.log (activity)
}
else if (temp >= 10 && temp <= 24 || weather == "cloudy") {
  activity = "bowling"
  console.log (activity)
}
else {
  activity = "hiking"
  console.log (activity)
}
