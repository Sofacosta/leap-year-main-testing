import { isLeapYear } from "./scripts";

$(document).ready(function () {
  $("#formInput").submit(function (event) {
    event.preventDefault();
    const inputYear = parseInt($("input#year").val());
    const leapYear = isLeapYear(inputYear);
  });
});