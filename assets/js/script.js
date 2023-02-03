let today = dayjs().format('MMM D, YYYY');
$('#currentDay').text(today);
let currentHour = dayjs().hour();

let timeBlockId = $('div.time-block').attr('id');
let newClass;

// sets hour-block class "present", "past", "future" : background color based on time comparison
function timeBlockColor() {
  $('div.time-block').each(function () {
    timeBlockId = $(this).attr('id');

    if (currentHour == timeBlockId) {
      newClass = $(this).addClass('present')
    } else if (currentHour > timeBlockId) {
      newClass = $(this).addClass('past')
    } else {
      newClass = $(this).addClass('future')
    }

    let textArea = localStorage.getItem(timeBlockId);
    $('textarea.description').val(textArea);
    
  })
}

// Event function to save Task Inputs (via Button Event Listener)
function saveTask() {
  $('textarea.description').each(function () {
    let textArea = $(this);
    localStorage.setItem('taskInput', textArea.val());
    console.log(localStorage)
  })
}

// Event listener
$('.saveBtn').on("click", saveTask);

// Sets time-responsive background colors on load
$(window).ready = timeBlockColor();


