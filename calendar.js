

 queryURL = "https://momentjs.com"

 var currentHour = ("h");
 var hourPast = hourPast < currentHour;
 var hourNow = currentHour;
 var hourFuture = hourFuture > currentHour;
 var blockHour = document.getElementById(blockHour);
 
 $(document).ready(function () {
     // var currentDateElement = $('#today-is');
     var currentDate = moment().format("MMMM, Do, YYYY,");
     currentHour = moment().format("h:mm:ss a");
     // console.log(currentDate);
     currentDate = $('.lead').append(currentDate);
      $('.today-is').append(currentHour);
     militaryHour = moment().hours()
  // common operation/ (looping over each block to apply particular color)
     $(".col-md-5.txt-area").each(function() { 
        var blockHour = parseInt($(this).attr("id"));
        console.log(blockHour)
        console.log(militaryHour)
        if (blockHour < militaryHour) {
          $(this).addClass("past");
       
        }
        else if (blockHour === militaryHour) {
          console.log(blockHour)
          console.log(militaryHour)
          $(this).removeClass("past");
          $(this).addClass("present");
        }
        else {blockHour > militaryHour
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
    })
 }
 );
 // GIVEN I am using a daily planner to create a schedule
 // WHEN I open the planner
 // $("btn btn-primary btn-lg").on("")
 // THEN the current day is displayed at the top of the calendar
 // WHEN I scroll down.  	    
 // THEN I am presented with timeblocks for standard business hours
 // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
 
    








// WHEN I view the timeblocks for that day



 
// Use window.localStoirage to retreve and store your data object as string
// var LS = JSON.parse(localStorage.scheduler || '{col-md-5 txt-area}'); // now an Object

// double click makes calender content editable

$("#set-Schedule").click(function () {
    console.log(clickbait);
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
}


// WHEN I refresh the page
// THEN the saved events persist