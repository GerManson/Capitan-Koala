$(document).ready(function() {
    var koala = $("img.koala");

    var mouseIn = function() {
        koala.animate({ marginBottom: '-30px'}, 500);
    };

    var mouseOut = function() {
        koala.animate({ marginBottom: '-100px'}, 1000);
    };

    $("#facebook_link")
        .on("mouseenter", mouseIn)
        .on("mouseleave", mouseOut);
});
