$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
  
    
    for (var i = 9; i < 18; i++) {
      var row = $("<div>").addClass("row time-block");
      var hour = $("<div>").addClass("col-1 hour").text(i + ":00");
      var description = $("<textarea>").addClass("col-10 description");
      var saveBtn = $("<button>")
        .addClass("col-1 saveBtn")
        .html("<i class='fas fa-save'></i>");