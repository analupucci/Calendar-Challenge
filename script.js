$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
  
    
    for (var i = 9; i < 18; i++) {
      var row = $("<div>").addClass("row time-block");
      var hour = $("<div>").addClass("col-1 hour").text(i + ":00");
      var description = $("<textarea>").addClass("col-10 description");
      var saveBtn = $("<button>")
        .addClass("col-1 saveBtn")
        .html("<i class='fas fa-save'></i>");

     
    if (i < moment().hour()) {
        description.addClass("past");
    } else if (i === moment().hour()) {
        description.addClass("present");
    } else {
        description.addClass("future");
    }

    row.append(hour, description, saveBtn);

    $(".container").append(row);
    }

    $(".saveBtn").on("click", function() {
        var event = $(this)
          .siblings(".description")
          .val();
        var hour = $(this)
          .siblings(".hour")
          .text();
        localStorage.setItem(hour, event);
      });

      for (var i = 9; i < 18; i++) {
        var hour = i + ":00";
        var event = localStorage.getItem(hour);
        $("textarea")
          .filter(function() {
            return $(this).siblings(".hour").text() === hour;
          })
          .val(event);
      }
    });
    
