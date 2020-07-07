var calendar =  document.calendar;
// var p = MindFusion.Scheduling;
// visualize the calendar
// // calendar.render();
// calendar.theme = "red";
// calendar.selectionEnd.addEventListener(handleSelection);
// calendar.headerClick.addEventListener(handleHeaderClick);

function handleHeaderClick(sender, args){
    if(sender.currentView===p.calendarView.TimeTable)
{
    sender.date = sender.timetableSettings.dates.items
    sender.currentView = p.CalendarView.SingleMonth;
}
}
function handleSelection(sender, args){

if(sender.currentView===p.CalendarView.SingleMonth)

args.cancel = true;
}
// var start = args.startTime;
// var end = args.endTime;

// Clear all Dates from the TimeTab


// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner


// THEN the current day is displayed at the top of the calendar


// WHEN I scroll down


// THEN I am presented with timeblocks for standard business hours


// WHEN I view the timeblocks for that day


// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click into a timeblock


// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist