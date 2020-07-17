

 queryURL = "https://momentjs.com"

 var currentHour = ("h:a");
 var hourPast = hourPast < currentHour;
 var hourNow = currentHour;
 var hourFuture = hourFuture < currentHour;
 
 
 $(document).ready(function () {
     // var currentDateElement = $('#today-is');
     var currentDate = moment().format("MMMM, Do, YYYY,h:mm:ss a");
     currentHour = moment().format("h:mm:ss a");
     // console.log(currentDate);
     currentDate = $('.lead').append(currentDate);
     currentHour = $('.textarea').append(currentHour);
 
 }
 );
 // GIVEN I am using a daily planner to create a schedule
 
 // WHEN I open the planner
 // $("btn btn-primary btn-lg").on("")
 
 
 // THEN the current day is displayed at the top of the calendar
 
 
 // WHEN I scroll down.  	    
 
 
 // THEN I am presented with timeblocks for standard business hours
 
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
 $('#target').hover(function () {
     // common operation
     function backgroundColorEdit() {
         if (hourNow == currentHour) {
             document.getElementById("hour-").style.backgroundColor = "#ff0000";
         } else if (hourNow < currentHour) {
             document.getElementById("hour-").style.backgroundColor = "#d3d3d3";
         } else {
             document.getElementById("hour-").style.backgroundColor = "#90ee90";
         }
 
         $('#hour-' + i).addClass('past');
         $('#hour+' + i).addClass('future');
         $('#hour=' + i).addClass('present');
     };
// WHEN I view the timeblocks for that day



 
// Use window.localStoirage to retreve and store your data object as string
var LS = JSON.parse(localStorage.scheduler || '{textarea}'); // now an Object

// double click makes calender content editable

$(".textData").click(function () {
    $(this).addClass('d-none')
    $(this).siblings("input").removeClass("d-none");
});

$(".btn").click(function () {
    console.log(this);
    console.log($(this).attr("id"))
    var id = $(this).attr("id")
    var time = id.slice(0,3)
    console.log(time)

    var timeInputId = time + "Input"; 
});


// WHEN I click into a timeblock


// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
function saveSchedule(){
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#btn btn-primary").text(JSON.stringify(response));
  
  });
}})


// WHEN I refresh the page
// THEN the saved events persist