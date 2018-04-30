var gameElement = "";
var excalTries = 0;
var excaliburPosition = -2;
var message =  "This is the current state of the game."

$(document).ready(function() {  // do when document is loaded
  $("#select-game").show(); // show buttons to selecdt game component
  $("#take-picture").hide();  // hide picture taking code
  $("#results").hide(); // hide results page

});

$("#excalibur").click(function(){

  $("#select-game").hide(); // show buttons to selecdt game component
  $("#take-picture").show();  // hide picture taking code
  $("#results").hide(); // hide results page

  $("#take-photo-button").show(); // hide take photo button page
  $("#download-photo-button").hide();
  $("#upload-photo-button").hide();

  gameElement = "excalibur";
});

$("#siege").click(function(){
  $("#select-game").hide(); // show buttons to selecdt game component
  $("#take-picture").show();  // hide picture taking code
  $("#results").hide(); // hide results page

  $("#take-photo-button").show(); // hide take photo button page
  $("#download-photo-button").hide();
  $("#upload-photo-button").hide();

  gameElement = "siege";
});

$("#round-table").click(function(){
  $("#select-game").hide(); // show buttons to selecdt game component
  $("#take-picture").show();  // hide picture taking code
  $("#results").hide(); // hide results page

  $("#take-photo-button").show(); // hide take photo button page
  $("#download-photo-button").hide();
  $("#upload-photo-button").hide();

  gameElement = "round-table";

});

$("#capture").click(function(){

  $("#take-photo-button").hide(); // hide take photo button page
  $("#download-photo-button").show();
  $("#upload-photo-button").hide();

});





var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;

    $("#select-game").hide(); // show buttons to selecdt game component
    $("#take-picture").show();  // hide picture taking code
    $("#take-photo-button").hide(); // hide take photo button page
    $("#download-photo-button").hide();
    $("#upload-photo-button").show();

});
