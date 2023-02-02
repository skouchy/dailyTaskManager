let today = dayjs().format('MMM D, YYYY');
$('#currentDay').text(today);

let currentTime;
let time;
let timeBlockEl;

let buttonEl = $('.saveBtn');

// *$(document).ready(function() {
//   $('body').wrapAll();
// })

// getDate data : hours:minutes:seconds
function clock() {
  time = new Date();
  return {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  }
}

// displays time in 12hr format
function formatTimeTo12() {
  let time = clock();
  let hour = time.hours;
  let minutes = time.minutes;
  let seconds = time.seconds;
  let ampm = hour >= 12 ? ' pm' : ' am';
  hour = hour % 12;
  hour = hour ? hour : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let headerClock = hour + ':' + minutes + ':' + seconds + ampm;
  $('#currentTime').text(headerClock);
  console.log(headerClock);
  timeBlockColor();
}

// sets hour-block class "present", "past", "future" : background color based on time comparison
function timeBlockColor() {
  $('.time-block').each(function () {
    timeBlockEl = ($(this).attr('id'));
    
    time = clock();
    
    let currentHour = time.hours;
    if (currentHour == timeBlockEl) {
      console.log('the time is now bitches')
    } else if (currentHour > timeBlockEl) {
      $(this).attr('class', '.past')
      console.log('the time has past bitches')
    } else {
      $(this).attr('class', '.future');
      console.log('the world is your oyster')
    }
    console.log('the current hour is ' + currentHour)
    console.log('this is ' + timeBlockEl)
  });
}

// begins clock interval onload to display current formatted time
setInterval(function () {
  formatTimeTo12()
}, 5000);



    // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function (event) {
  // TODO: Add a listener for click events on the save button. This code should
  // taskItemEl.addEventListener('submit', value);
  // $('.saveBtn').on("submit", function({
  // $(addtoLocalStorage
  // })
  // $( "p" ).css( "color", "red" ).find( ".special" ).css( "color", "green" );
//   function toggleColor(){
//     tag = $('div');
//     // Ternary Operator (add/remove background color)
//     // If tag color is green convert it to red otherwise convert to green.
//    tag.css('background') == 'green' ? tag.css({'background':'red'}) : tag.css({'background':'green'});
//  }

//   $('button').on('click', function(){
//     toggleColor();
//   });
  // *use the id in the containing time-block as a key to save the user input in
    // *local storage. HINT: What does `this` reference in the click listener
    // *function? How can DOM traversal be used to get the "hour-x" id of the
    // *time-block containing the button that was clicked? How might the id be
    // *useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  // });