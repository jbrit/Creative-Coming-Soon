var finalDate = "07/31/2020";
const callback = (event) => {
  var { hours, minutes, seconds, totalDays } = event.offset;
  totalDays = `${totalDays}`;
  hours = `${hours < 10 ? 0 : ""}${hours}`;
  minutes = `${minutes < 10 ? 0 : ""}${minutes}`;
  seconds = `${seconds < 10 ? 0 : ""}${seconds}`;
  console.log(seconds);
  var elements = ["hours", "minutes", "seconds", "totalDays"];
  elements.forEach((elt) => {
    $(`#${elt}`).html(eval(elt));
  });
};
$("div#count").countdown(finalDate).on("update.countdown", callback);
