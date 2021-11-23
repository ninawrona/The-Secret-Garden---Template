//MAKE THE MAGIC HAPPEN

$("#info").css("float" ,"right");
$("#info").css("color" ,"rgb(212, 57, 57)");
$("#info").css("font-family" ,"Arial, Helvetica, sans-serif");
$("#info").css("padding-right", "10px");
$(".buttons").css("margin-top", "10px");
$("#buttonId").css("margin-left", "5px");




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

$("#butterfly").animate("slow", "linear", function () { movement(this) });

$("#butterfly").on("mouseenter", function () {
    randomXY();
    $("#butterfly").animate({ top: butterflyY, left: butterflyX }, "slow", "linear");
});

$("#butterfly").on("mouseleave", function () {
    randomXY();
    $("#butterfly").animate({ top: butterflyY, left: butterflyX }, "slow", "linear");
    $("#butterfly").stop();
    setTimeout(movement(this), 6000);
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
$("#chargeButton").on("mouseenter", function (){
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
/* Reference
$("#imageId").on("click", function() {
    var attributeContent = $("#imageId").attr("src");
    if (attributeContent === "images/glad.jpg")
    {
        attributeContent = "images/sad.jpg";
        $(this).attr("src", attributeContent);
    }
    else
    {
        attributeContent = "images/glad.jpg";
        $(this).attr("src", attributeContent);
    }
})
*/

// Randomly place the apples in the crown of the tree by taking random number that is created by 
// multiplaying 0-1 by the length or width of the tree crown and adding its (tree's) coordinates
function appleRandomX() {
    var appleX = Math.floor(Math.random() * 370) + $("#tree").offset().left + 30;
    return appleX;
}

function appleRandomY() {
    var appleY = Math.floor(Math.random() * 170) + $("#tree").offset().top;
    return appleY;
}

$(document).ready(function () {
    $("#apple1").offset({ top: appleRandomY(), left: appleRandomX() })
    $("#apple2").offset({ top: appleRandomY(), left: appleRandomX() })
    $("#apple3").offset({ top: appleRandomY(), left: appleRandomX() })
})


// Increase the size of apples for a few sec and place the apples in the basket when clicked
// Note: Net must be hidden
$(".apple").css("z-index", "4");
$("#basketfront").css("z-index", "5");

var basketY = $("#basketfront").offset().top - 30;
var basketX = $("#basketfront").offset().left + 15;    


$("#apple1").on("click", function () {
    $("#apple1").animate({height: 50, width:50}, 1000).animate({height: 25, width:25}, 1000).animate({ top: basketY, left: basketX}, 2000, 'linear')
})
    

$("#apple2").on("click", function () {
    $("#apple2").animate({height: 50, width:50}, 1000).animate({height: 25, width:25}, 1000).animate({ top: basketY, left: basketX }, 2000, 'linear')
})

$("#apple3").on("click", function () {
    $("#apple3").animate({height: 50, width:50}, 1000).animate({height: 25, width:25}, 1000).animate({ top: basketY, left: basketX }, 2000, 'linear')
})

/* Adds a sun and moon that traverse the sky and change the background
Kamil Fischbach */
var windowHeightSunMoon = ($(window).height()) / 64;
var windowWidhtSunMoon = ($(window).width()) / 2 - 100;
var windowWidhtSunMoonEnd = ($(window).width());
var PositionBaseY = 0.2*$(window).height;
var PositionBaseX = 0.1*$(window).height;






function sunAndMoon() {
    $("#sun").hide();
    $("#moon").hide();
    $("body").css("background-color", "rgb(197, 195, 219)");
    $("#sun").animate({top: 50, left: 10},1);
    $("#moon").animate({top: 50, left: 10},1);
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
// Note: Net must be hidden


var droptop = $(window).height() - $(".waterdrop").height();


$(".waterdrop").hide();


$("#wateringcan").on("click", function () {
    var attributeContent = $("#wateringcan").attr("src");
    if (attributeContent === "images/wateringcan.png") {
        attributeContent = "images/wateringcantilted.png";
        $(this).attr("src", attributeContent);
        $(".waterdrop").show();
        $(".waterdrop").offset({
            top: $("#wateringcan").offset().top + 20,
            left: $("#wateringcan").offset().left + 5
        })

        $(".waterdrop").animate({ top: droptop }, 2000, "linear", function () {
            $(".waterdrop").animate({ top: droptop }, 2000, "linear")
        });


    }
    else {
        attributeContent = "images/wateringcan.png";
        $(this).attr("src", attributeContent);
    }
});
