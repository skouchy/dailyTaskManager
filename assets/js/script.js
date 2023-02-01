let taskEl = document.querySelector('.time-block');
let buttonEl = document.querySelector('.saveBtn');

let today = dayjs().format('MMM D, YYYY');
$('#currentDay').text(today);
let currentTime;
let time;

// minutes:seconds formatted in 2-digit display
function addZero(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
}

// getDate data : hours:minutes:seconds
function clock() {
  time = new Date();
  return {
    hours: time.getHours(),
    minutes: addZero(time.getMinutes()),
    seconds: addZero(time.getSeconds()),
  }
}

// displays time in 12hr format
function formatHoursTo12() {
  return time.hours % 12 || 12;
}

// begins clock interval onload to display current formatted time
setInterval(function () {
  time = clock();
  let formatHour = formatHoursTo12();
  currentTime = (formatHour + ':' + time.minutes);
  let ampm = (formatHour <= 12) ? [currentTime + "am"] : [currentTime+"pm"]; 
  $('#currentTime').text(ampm);
  timeBlockColor();
}, 1000);

function timeBlockColor() {
  // if ()
  console.log('currentTime in timeBlock func');
  console.log(currentTime);
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function (event) {
  // TODO: Add a listener for click events on the save button. This code should
  // taskItemEl.addEventListener('submit', value);
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