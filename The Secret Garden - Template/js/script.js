//MAKE THE MAGIC HAPPEN

$('#hideButton').hover(function () {
    $('#hideButton').css({
        'background-color': 'rgb(212, 57, 57)',
        'color': '#4CAF50'
    });
}, function () {
    $('#hideButton').css({
        'background-color': '#4CAF50',
        'color': 'rgb(212, 57, 57)'
    });
});



$('#buttonId').click(function () {
    $('#buttonId').css({
        'background-color': '#4CAF50',
        'color': 'rgb(212, 57, 57)'
    }).delay(1000)
});

$('#buttonId').mousedown(function () {

    $('#buttonId').css({
        'background-color': 'rgb(212, 57, 57)',
        'color': '#4CAF50'
    });

});

var charged = "not"
$('#chargeButton').mouseup(function () {
    if (charged == "not") {
        $('#chagreButton').css({
            'background-color': '#4CAF50',
            'color': 'rgb(212, 57, 57)'
        });
        charged = "yes";
    }
    else {
        $('#chagreButton').css({
            'background-color': 'rgb(212, 57, 57)',
            'color': '#4CAF50'
        });
        charged = "not";
    }
});






$('#sun').css({
    'margin-top': '10%',
    'padding-right': '100%',
    'position': 'absolute'
});

$('#moon').css({
    'margin-top': '10%',
    'padding-right': '100%',
    'position': 'absolute'
});

$('#swamp31').css({
    'margin-top': '0px',
    'position': 'fixed',
    'height': '25%',
    'bottom': '0px',
    'right': '40%',
    'position': 'absolute'
});

$('#swamp32').css({
    'margin-top': '0px',
    'position': 'fixed',
    'height': '25%',
    'bottom': '0px',
    'right': '40%',
    'position': 'absolute'
});

$('#swamp33').css({
    'margin-top': '0px',
    'position': 'fixed',
    'height': '40%',
    'bottom': '0px',
    'right': '40%',
    'position': 'absolute'
});

$('#swamp1').css({
    'margin-top': '0px',
    'position': 'fixed',
    'height': '90%',
    'bottom': '0px',
    'right': '0%',
    'position': 'absolute'
});

$('#swamp21').css({
    'position': 'fixed',
    'height': '100%',
    'bottom': '0px',
    'right': '40%',
    'position': 'absolute'
});

$('#swamp22').css({
    'position': 'fixed',
    'height': '100%',
    'bottom': '0px',
    'left': '52%',
    'position': 'absolute',
    'top': '-25%'
});

$('#shrek').css({
    'position': 'fixed',
    'height': '40%',
    'bottom': '0px',
    'right': '30%',
    'position': 'absolute'
});





var butterflyX;
var butterflyY;
var windowWidth = $(window).width() - $("#butterfly").width();
var windowHeight = $(window).height() - $("#butterfly").height();
var windowHeight = $(window).height() - $("#butterfly").height();
var randomX;
var randomY;

var xCoord;
var yCoord;

// call a sun/moon function
var windowHeightSunMoon = ($(window).height()) / 64;
var windowWidhtSunMoon = ($(window).width()) / 2 - 100;
var windowWidhtSunMoonEnd = ($(window).width());

sunAndMoon();
randomXY();
movement("#butterfly");

/*
$("*").click(function(event){

    $("#xcoordId").text(event.pageX);
    $("#ycoordId").text(event.pageY);
});
*/

/* Adds a button to the top left to change the background to a random pick of 4 colors below
Martin Rosendahl */
var colors = ["lightSeaGreen", "peachPuff", "plum", "paleVioletRed"];

function randomColor() {
    var number = Math.floor(Math.random() * 4);
    return colors[number];
}

$("#buttonId").on("click", function () {
    $("body").css("background-color", randomColor());
});

// Moves the butterfly on its own and away from the net
function randomXY() {
    butterflyX = Math.floor(Math.random() * windowWidth);
    butterflyY = Math.floor(Math.random() * windowHeight);
}

$("#butterfly").on("mouseenter", function () {
    randomXY();
    $("#butterfly").animate({ top: butterflyY, left: butterflyX }, "slow", "linear");
});

$("#butterfly").on("mouseleave", function () {
    randomXY();
    $("#butterfly").animate({ top: butterflyY, left: butterflyX }, "slow", "linear");
    $("#butterfly").stop();
    setTimeout(movement("#butterfly"), 6000);
});

function movement(IdRef) {
    randomXY();
    $(IdRef).animate({ top: butterflyY }).delay(2000).animate({ left: butterflyX }, "slow", "linear", function () { movement(IdRef); });;
}

$(window).on("mousemove", function (event) {
    $("#net").offset({ top: event.pageY, left: event.pageX });
    $("#butterfly").css("z-index", "4");
    $("#net").css("z-index", "5");
});

// Adds two buttons to the top left to show or hide the net upon mouseenter
$("#hideButton").on("mouseenter", function () {
    $("#net").fadeOut();
})


$("#showButton").on("mouseenter", function () {
    $("#net").fadeIn();
})

/* Add a button to make the net sparkle
Gif made through https://www.glitterphoto.net/
Christian Foyer */
$("#chargeButton").on("mouseenter", function () {
    $("#net").fadeOut();
})

$("#chargeButton").on("click", function () {
    var src = $("#net").attr("src");
    if (src === "images/net.png") {
        src = "images/charged_net.gif";
        $("#net").attr("src", src);
        $("#net").fadeIn();
    }
    else {
        src = "images/net.png";
        $("#net").attr("src", src);
        $("#net").fadeIn();
    }
})


// Randomly place the apples in the crown of the tree by taking random number that is created by 
// multiplying 0-1 by the length or width of the tree crown and adding its (tree's) coordinates
// Nina Wrona
function appleRandomX() {
    var appleX = Math.floor(Math.random() * 320) + $("#tree").offset().left + 40;
    return appleX;
}

function appleRandomY() {
    var appleY = Math.floor(Math.random() * 190) + $("#tree").offset().top + 70;
    return appleY;
}

$(document).ready(function () {
    $("#apple1").offset({ top: appleRandomY(), left: appleRandomX() })
    $("#apple2").offset({ top: appleRandomY(), left: appleRandomX() })
    $("#apple3").offset({ top: appleRandomY(), left: appleRandomX() })
})


// Increase the size of apples for a few sec and place the apples in the basket when clicked

// Nina Wrona
$(".basket").offset({ left: $("#tree").offset().left + 100 })
$(".apple").css("z-index", "8");
$("#basketwhole").css("z-index", "7");
$("#basketfront").css("z-index", "9");

var basketY = $("#basketfront").offset().top - 40;
var basketX = $("#basketfront").offset().left + 15;


$("#apple1").on("click", function () {
    $("#apple1").animate({ height: 50, width: 50 }, 1000).animate({ height: 25, width: 25 }, 1000).animate({ top: basketY, left: basketX }, 2000, 'linear')
})


$("#apple2").on("click", function () {
    $("#apple2").animate({ height: 50, width: 50 }, 1000).animate({ height: 25, width: 25 }, 1000).animate({ top: basketY, left: basketX + 15 }, 2000, 'linear')
})

$("#apple3").on("click", function () {
    $("#apple3").animate({ height: 50, width: 50 }, 1000).animate({ height: 25, width: 25 }, 1000).animate({ top: basketY, left: basketX + 35 }, 2000, 'linear')
})

/* Adds a sun and moon that traverse the sky and change the background
Kamil Fischbach */
var windowHeightSunMoon = ($(window).height()) / 64;
var windowWidhtSunMoon = ($(window).width()) / 2 - 100;
var windowWidhtSunMoonEnd = ($(window).width());
var PositionBaseY = 0.2 * $(window).height;
var PositionBaseX = 0.1 * $(window).height;






function sunAndMoon() {
    $("#sun").hide();
    $("#moon").hide();
    $("body").css("background-color", "rgb(197, 195, 219)");
    $("#sun").animate({ top: 50, left: 10 }, 1);
    $("#moon").animate({ top: 50, left: 10 }, 1);
    $("#sun").fadeIn();

    $("#sun").animate({ top: -150, left: windowWidhtSunMoon }, 10000, "linear",
        function () {
            $("#sun").css("z-index", "2");
            $("#tree").css("z-index", "3");
            $("#sun").animate({ top: 150, left: windowWidhtSunMoonEnd }, 10000, "linear",
                function () {
                    $("#sun").hide();
                    $("body").css("background-color", "rgb(15, 10, 64)")
                    $("#moon").fadeIn();
                    $("#moon").animate({ top: -150, left: windowWidhtSunMoon }, 10000, "linear",
                        function () {
                            $("#moon").css("z-index", "2");
                            $("#moon").animate({ top: 150, left: windowWidhtSunMoonEnd }, 10000, "linear",
                                function () {
                                    $("#moon").hide();
                                    $("#moon").animate({ top: PositionBaseY, left: PositionBaseX });
                                    $("#sun").animate({ top: PositionBaseY, left: PositionBaseX });
                                    $("#sun").fadeIn();
                                    $("body").css("background-color", "rgb(197, 195, 219)");
                                    sunAndMoon();
                                });
                        });
                });
        });
}



// Makes the watering can tilt and drop water
// The water dripping from the can forms a swamp over time. An entity takes over the swamp. 
// Robert Barta


$(".waterdrop").hide(); $("#swamp1").hide(); $("#swamp21").hide(); $("#swamp22").hide(); $("#swamp31").hide(); $("#swamp32").hide(); $("#swamp33").hide(); $("#shrek").hide();

var dropCount = 0;
var droptop = $(window).height() - $(".waterdrop").height();

$("#wateringcan").css("z-index", "6");
$(".waterdrop").css("z-index", "7");

$("#wateringcan").on("click", function () {
    var attributeContent = $("#wateringcan").attr("src");
    if (attributeContent === "images/wateringcan.png") {

        attributeContent = "images/wateringcantilted.png";
        $(this).attr("src", attributeContent);

        $(".waterdrop").offset({ top: $("#wateringcan").offset().top + 20, left: $("#wateringcan").offset().left + 5 })
        drip1();

    }
    else {
        attributeContent = "images/wateringcan.png";
        $(this).attr("src", attributeContent);
        stopdrip();
        function stopdrip() {
            $(".waterdrop").stop(true);
            $(".waterdrop").hide();
        }
    }
});


//Function for dripping: 

function drip1() {
    $(".waterdrop").fadeIn();
    $(".waterdrop").animate({ top: droptop }, 500, "linear", function () {
        dropCount++;
        drip1();

        if (dropCount > 10) {
            $("#swamp31").fadeIn().css("z-index", "4");
        }
        if (dropCount > 30) {
            $("#swamp31").css("height", "30%", "left", "40%");
            $("#swamp32").fadeIn().css("left", "60%").css("z-index", "4");
        }
        if (dropCount > 50) {
            $("#swamp31").css("height", "50%");
            $("#swamp32").css("height", "35%")
            $("#swamp33").fadeIn().css("left", "30%");
        }
        if (dropCount > 70) {
            $("#swamp1").fadeIn().css("z-index", "4");
        }
        if (dropCount > 90) {
            $("#swamp21").fadeIn().css("z-index", "2");
        }
        if (dropCount > 100) {
            $("#swamp22").fadeIn().css("z-index", "5");
        }
        if (dropCount > 115) {
            $("#shrek").fadeIn().css("z-index", "3");
        }
    })
    $(".waterdrop").offset({
        top: $("#wateringcan").offset().top + 20,
        left: $("#wateringcan").offset().left + 5
    })
}



