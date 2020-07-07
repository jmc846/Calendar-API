$(document).ready(function(){
    // var currentDateElement = $('#today-is');
    var currentDate = moment().format("MMMM, Do, YYYY,h:mm:ss a");
    console.log(currentDate);
    $('#today-is').text(currentDate)
     $(".saveBtn").click(function(){
      console.log(this);
      var newSchedule = $(this).textarea(".textarea").val();
      var newTime = $(this).container().attr("id");
      console.log(newTime);

     }
     )});
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// $("btn btn-primary btn-lg").on("")


// THEN the current day is displayed at the top of the calendar


// WHEN I scroll down


// THEN I am presented with timeblocks for standard business hours


// WHEN I view the timeblocks for that day


// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
 
{/* <div id = "0800" onclick= "timeBlock()"> </div> */}


function timeBlock() {
    if(currentDate !== "row")
  document.getElementById("demo").style.color = "red";


};




 


// WHEN I click into a timeblock


// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
function saveSchedule(){
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("saveSchedule col-md-7").text(JSON.stringify(response));
  
  });
}

// WHEN I refresh the page
// THEN the saved events persist