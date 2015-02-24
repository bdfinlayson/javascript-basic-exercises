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
  var newString = rotateString(string)
  printString(newString)
})

function findString() {

  var string = $('#string').text()
  console.log(string);
  return string;

}

function rotateString(string) {

 var newString = '';
 for (var i = string.length - 1; i >= 0; i--)
   newString += string[i];
   console.log(newString)
 return newString;

}

function printString(newString) {

  var elToClear = '#string'
  clear(elToClear)

  var stringEl = '<p id="string">' + newString + '</p>'

  $('#ex4').after(stringEl)

}

//Exercise 5

$('#stringToCaps').on('click', function() {

  var string = getUserString()
  console.log('this should be var string: ' + string)
  var newString = createStringArr(string)
  console.log('why are you: ' + newString + '?') //why is it undefined?
  var aString = capitalizeStr(newString)
  var joinArrToString = joinString(newString)
  printNewString(joinArrToString)

})

function getUserString() {

  var string = $('#userInput').val()
  console.log(string)
  return string;

}

function createStringArr(string) {

  var stringArr = string.split(' ')
  console.log(stringArr)
  return stringArr;
}

function capitalizeStr(newString) {

  console.log('what the capitalizeStr function sees: ' + newString)

  var aString = newString.map(function(word) {

  word.charAt(0).toUpperCase() + word.slice(1);
  return aString;
  })

}

function joinString (newString) {

  console.log(newString)
  var joinedString = newString.join(' ');
  return joinedString;

}

function printNewString(joinArrToString) {

  var el = '#capString'
  clear(el)

  $('#stringToCaps').after('<p id="capString">' + joinArrToString + '</p>')

}

