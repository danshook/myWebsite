// ******************************************************************
//              Get the aspect ratio of your Image
// ******************************************************************

// var frameToArtPct = 15 %
// var frameToMatPct = 2.5 %

// var aspectRatio = (imgWidth / imgHeight)

// var imgWidth = (1 - (2 * frameToArtPct)) * frameWidth

setTimeout(function() {
  $(".welcome")
    .html("have a better look")
    .addClass("welcomeExit");
  $(".welcome_info").hide();
}, 4000);

setTimeout(function() {
  $(".welcomeExit").addClass("animated zoomOutUp");
}, 5500);
