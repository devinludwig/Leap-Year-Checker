var input;

var check = function(year) {

  if (year % 400 === 0) {
    return(true)
  } else if (year % 100 === 0) {
    return(false)
  } else if (year % 4 === 0) {
    return(true);
  } else {
    return(false);
  }
};

$(function(){
  $("form").submit(function(event) {
  event.preventDefault();
  $("#result").empty();
  input = parseInt($("input").val());
  if (check(input) === true) {
  $("#result").append("This is a leap year!");
} else if (check(input) === false) {
  $("#result").append("This is not a leap year!");
}
  });
});
