
queryURL = "https://momentjs.com"
 var currentTime = ("h:mm:ss a");

var hourPast = hourPast < currentTime;
var hourNow = currentTime;
var hourFuture = hourFuture < currentTime; 
 

$(document).ready(function(){
    // var currentDateElement = $('#today-is');
    var currentDate = moment().format("MMMM, Do, YYYY,h:mm:ss a");
    var currentTime = moment().format("h:mm:ss a");
    // console.log(currentDate);
   currentDate =  $('.lead').append(currentDate);
  currentTime = $('.textarea').append(currentTime);
   
     }
     );
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// $("btn btn-primary btn-lg").on("")


// THEN the current day is displayed at the top of the calendar


// WHEN I scroll down.  	    


// THEN I am presented with timeblocks for standard business hours
$('#target').hover(function () {
  // common operation
  function backgroundColorEdit(){
    if (hourNow == currentTime){
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#ff0000";
    }else if (hourNow < currentTime){
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
    }else 
    {
        document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
    }


};

// WHEN I view the timeblocks for that day


// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
 
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

// set active time
// make background color of / past hours gray / current hour red / future hours green
var hourPast = hourPast < currentTime;
var hourNow = currentTime;
var hourFuture = hourFuture < currentTime;

// if currentTime > hourNow make background color gray//
    var hourNow = currentTime;
console.log(hourNow)
console.log(currentTime)
    function backgroundColorEdit(){
        if (hourNow == currentTime){
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#ff0000";
        }else if (hourNow < currentTime){
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
        }else 
        {
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
        }
}



 


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