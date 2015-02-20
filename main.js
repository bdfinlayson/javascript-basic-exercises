//Javascript Basic Exercises | http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

//modular clearing function

function clear(data) {
  $(data).remove()
}

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
  var minutes = myMinutes(date);
  var message = getMessage(date)
  var seconds = date.getSeconds()
  var el = ('<p id="time">' + message + "Today is " + daysArr[today] + " and the time is " + regHours + ":" + minutes + " and " + seconds + " seconds." + '</p>')
  $('#ex1').after(el)
}

function myMinutes(date) {
  if (date.getMinutes() < 10) {
     fixMinutes(date)
  } else {
     var minutes = date.getMinutes()
  }
  return minutes;
}

function getMessage(date) {

  if (date.getHours() < 12) {
    var message = 'Good Morning! '
  } if ( date.getHours() >= 12 && date.getHours() < 18) {
    var message = 'Good Afternoon! '
  } if ( date.getHours() >= 18 && date.getHours() <= 24 ) {
    var message = 'Good Evening! '
  }

  return message;
}

function fixMinutes(date) {
  if (date.getMinutes() < 10) {
    var minutes = '0' +  date.getMinutes().toString()
    return minutes;
  }
}

//Exercise 2

$('#printButton').on('click', function () {

  window.print()

})


//Exercise 3

$('#currentDateButton').on('click', function() {

  var date = new Date();
  showCurrentDate(date)

})

function showCurrentDate(date) {

  var elToClear = '#currentDate'
  clear(elToClear)
  var month = date.getMonth()
  var day = date.getDay()
  var year = date.getFullYear()
  printCurrentDate(month, day, year)

}

function printCurrentDate(month, day, year) {

  var el = ('<p id="currentDate">' + month + '/' + day + '/' + year + '</p>');
  $('#ex3').after(el)

}

//Exercise 4

$('#rotateString').on('click', function() {

  var string = findString()
  var splitStr = splitString(string)
  var newString = rotateString(splitStr)
  printString(newString)
})

function findString() {

  var string = $('#string').text()
  console.log(string);
  return string;

}

function splitString(string) {

  var splitStr = string.split('')
  console.log(splitStr)
  return splitStr;
}

function rotateString(splitStr) {

  var lastLetter = splitStr.pop()
  console.log(lastLetter)
  var firstLetter = splitStr.shift()
  console.log(firstLetter)
  console.log(splitStr.length)
  var newStringArr =  splitStr += firstLetter
  console.log(newStringArr)
    newStringArr = lastLetter += splitStr
  console.log(newStringArr)
  var newString = newStringArr.join('')
  return newString;
}

function printString(newString) {

  var elToClear = '#string'
  clear(elToClear)

  var stringEl = '<p id="string">' + newString + '</p>'

  $('#ex4').after(stringEl)

}
