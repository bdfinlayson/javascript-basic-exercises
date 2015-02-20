//Javascript Basic Exercises | http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
//Exercise 1

$('#timeButton').on('click', function() {

  var date = new Date();
  showTime(date)

})

function showTime(date) {
  var elToClear = '#time'
  clear(elToClear)
  var today = date.getDay();
  var daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var hours = date.getHours();
  var regHours = hours - 12;
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  var el = ('<p id="time">' + "Today is " + daysArr[today] + " and the time is " + regHours + ":" + minutes + " p.m." + " and " + seconds + " seconds." + '</p>')
  
  $('#ex1').after(el)
}

function clear(data) {

  $(data).remove()

}
