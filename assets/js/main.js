$(function () {
  $("#totalDays.ldBar").append(
    `<div class="my-label"><span class='d-none d-sm-block f-18' >Days</span><div class="main-label"></div> </div>`
  );
  $("#hours.ldBar").append(
    `<div class="my-label"><span class='d-none d-sm-block f-18' >Hours</span><div class="main-label"></div> </div>`
  );
  $("#minutes.ldBar").append(
    `<div class="my-label"><span class='d-none d-sm-block f-18' >Minutes</span><div class="main-label"></div> </div>`
  );
  $("#seconds.ldBar").append(
    `<div class="my-label"><span class='d-none d-sm-block f-18' >Seconds</span><div class="main-label"></div> </div>`
  );
});
var end = new Date("07/31/20");
setInterval(function () {
  var now = Date.now();
  var delta = end.getTime() - now; // milliseconds elapsed since start
  var totalSecs = delta / 1000; // in seconds
  var totalDays = Math.floor(totalSecs / 86400);
  var rem = totalSecs % 86400;
  var hours = Math.floor(rem / 3600);
  rem = rem % 3600;
  var minutes = Math.floor(rem / 60);
  var seconds = rem % 60;

  // Percents
  var totalDaysPercent = 1,
    hoursPercent = hours / 24,
    minutesPercent = minutes / 60,
    secondsPercent = seconds / 60;
  // Stringified values
  totalDaysSTR = `${totalDays}`;
  hoursSTR = `${hours < 10 ? 0 : ""}${hours}`;
  minutesSTR = `${minutes < 10 ? 0 : ""}${minutes}`;
  secondsSTR = `${Math.floor(seconds) < 10 ? 0 : ""}${Math.floor(seconds)}`;

  var elements = ["hours", "minutes", "seconds", "totalDays"];
  elements.forEach((elt) => {
    setOffSet(
      document.querySelector(`#${elt} path.mainline`),
      eval(`${elt}Percent`)
    );
    $(`#${elt} .main-label`).html(eval(`${elt}STR`));
  });
}, 100); // update about every second
const setOffSet = (element, fraction) => {
  try {
    if (element.style) {
      element.style.strokeDashoffset =
        (1 - fraction) * element.getTotalLength();
      element.style.strokeDasharray = element.getTotalLength();
    }
  } catch (error) {
    return;
  }
};
const toggleTheme = () => {
  document.querySelector("body").dataset.theme =
    document.querySelector("body").dataset.theme === "dark" ? "light" : "dark";
};
// var switcherTl = gsap.timeline({ defaults: { duration: 1, reversed: true } });
// switcherTl
//   .fromTo(
//     ".loader",
//     { translateX: "-100%" },
//     { translateX: "0", duration: 0.6, onComplete: toggleTheme }
//   )
//   .fromTo(
//     ".loader",
//     { translateX: "0" },
//     { translateX: "100%", duration: 0.6 }
//   );
const switcher = document.getElementById("themeSwitcher");

switcher.addEventListener("click", () => {
  // switcherTl.play();
  // setTimeout(() => {
  //   switcherTl.reverse();
  // }, 600);
  toggleTheme();
});
