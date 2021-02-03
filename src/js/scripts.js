export function isLeapYear(inputYear) {
  if ((inputYear % 4 === 0) && (inputYear % 100 !== 0) || (inputYear % 400 === 0)) {
    const result = true;
    // $(".results").children().hide();
    // $("#yes").show();
  } else {
    const result = false;
    // $(".results").children().hide();
    // $("#no").show();
  }
  return result;
}
