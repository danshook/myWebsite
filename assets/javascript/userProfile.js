// ******************************************************************
//              Get the aspect ratio of your Image
// ******************************************************************

// var frameToArtPct = 15 %
// var frameToMatPct = 2.5 %

// var aspectRatio = (imgWidth / imgHeight)

// var imgWidth = (1 - (2 * frameToArtPct)) * frameWidth

setTimeout(function() {
  $(".welcome")
    .html("enjoy...")
    .addClass("welcomeHinge");
  $(".welcome_info").hide();
}, 4000);

setTimeout(function() {
  $(".welcomeHinge").addClass("animated hinge");
}, 5500);
