// ******************************************************************
//              Get the aspect ratio of your Image
// ******************************************************************

// var frameToArtPct = 15 %
// var frameToMatPct = 2.5 %

// var aspectRatio = (imgWidth / imgHeight)

// var imgWidth = (1 - (2 * frameToArtPct)) * frameWidth

setTimeout(function() {
  $(".welcome")
    .html("enjoy!")
    .addClass("welcomeExit");
  $(".welcome_info").hide();
}, 4000);

setTimeout(function() {
  $(".welcomeExit").addClass("animated lightSpeedOut");
}, 5500);
