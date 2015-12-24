var Animations = {

    init: function() {
        this.initKoala();

        this.setBackground();
        setInterval(this.setBackground, 5000);
    },

    initKoala: function() {
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
    },

    setBackground: function() {
        // get random gif
        var gif = gifs[Math.floor(Math.random() * gifs.length)];

        // apply as background
        $('body').css('background', '#000 url("gifs/' + gif + '") no-repeat fixed center')
            .css('background-size', 'cover');
    }

};

$(document).ready(function() {
    Animations.init();
});

var gifs = new Array(
    "fuckthepolice.gif",
	  "koalaeating.gif",
    "koalaeating2.gif",
		"koalaoffice.gif",
		"koalawalking.gif",
    "koaladrummer.gif",
	  "koalafreeride.gif",
	  "koalaseating.gif",
	  "supgirl.gif",
    "koalaears.gif",
		"koalaglassespunch.gif",
	  "koalastreet.gif",
		"whayoulookinat.gif",
    "koalacute.gif",
    "koalascratching.gif",
    "koalasline.gif",
    "koalastare.gif",
    "koalapple.gif",
    "koalahug.gif",
    "koalafell.gif",
    "koalaevil.gif",
    "koalaeyes.gif",
    "koalarunning.gif",
    "koalatrip.gif",
    "koalaplane.gif",
    "koalachill.gif",
    "koalaterror.gif",
    "koalabackpack.gif",
    "koalaclimb.gif"
);
