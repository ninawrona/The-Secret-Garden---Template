//MAKE THE MAGIC HAPPEN

var butterflyX;
var butterflyY;
var windowWidth = $(window).width() - $("#butterfly").width();
var windowHeight= $(window).height()- $("#butterfly").height();
var windowHeight = $(window).height()- $("#butterfly").height();
var randomX;
var randomY;

var xCoord;
var yCoord;

var colors = ["blue", "red", "yellow", "green"];

function randomColor(){
    var number = Math.floor(Math.random()*4);
    return colors[number];
}

function randomXY(){
 butterflyX = Math.floor(Math.random()*windowWidth);
 butterflyY = Math.floor(Math.random()*windowHeight);
}



$("#butterfly").animate( "slow", "linear", function() {movement(this)});

$("#butterfly").on("mouseenter",function(){
    randomXY();
    $("#butterfly").animate({top: butterflyY, left: butterflyX}, "slow", "linear");

});


$("#butterfly").on("mouseleave",function(){

    randomXY();
    $("#butterfly").animate({top: butterflyY, left: butterflyX}, "slow", "linear");
    $("#butterfly").stop();
    setTimeout(movement(this),6000);
});




function movement(IdRef) {
    randomXY();
    $(IdRef).animate({top: butterflyY}).delay(2000).animate({left: butterflyX}, "slow", "linear", function(){movement(IdRef);});;
}

$(window).on("mousemove", function(event){
    var mouseY = event.pageY;
    $("#net").offset({top: event.pageY, left: event.pageX});
    $("#butterfly").css("z-index", "4");

    if($("#net").offset().top <= $("#buttonId").offset().top  + 15){
        $("#net").fadeOut();
    }

    if((mouseY > $("#buttonId").offset().top  + 15)){
        $("#net").fadeIn();

    }

    $("#net").css("z-index", "5");

});


$("#moon").hide();
function appleRandomX(){
    var appleX = Math.floor(Math.random()*372) + 718;
    return appleX;
}

function appleRandomY(){
    var appleY = Math.floor(Math.random()*172) + 178;
    return appleY;
}

$(document).ready(function(){
    $("#apple1").offset({top: appleRandomY(), left: appleRandomX()})
    $("#apple2").offset({top: appleRandomY(), left: appleRandomX()})
    $("#apple3").offset({top: appleRandomY(), left: appleRandomX()})
})

var basketY = $(".basket").offset().top - 30;
var basketX = $(".basket").offset().left + 20;

$("#apple1").on("click", function(){
    $("#apple1").animate({top: basketY, left: basketX})
})

$("#apple2").on("click", function(){
    $("#apple2").animate({top: basketY, left: basketX})
})

$("#apple3").on("click", function(){
    $("#apple3").animate({top: basketY, left: basketX})
})
    


 

var windowHeightSunMoon = ($(window).height())/64;
var windowWidhtSunMoon = ($(window).width())/2 -100;
var windowWidhtSunMoonEnd = ($(window).width());
var PositionBaseY = $("#sun").offset().top;
var PositionBaseX = $("#sun").offset().left;

$("#moon").hide();
$("body").css("background-color", "rgb(197, 195, 219)")
sunAndMoon();


function sunAndMoon()
{

    $("#sun").animate({top: -150, left: windowWidhtSunMoon},10000,"linear",
        function(){
            $("#sun").css("z-index", "2");
            $("#tree").css("z-index", "3");
            $("#sun").animate({top: 150, left: windowWidhtSunMoonEnd }, 10000, "linear", 
            function()
            {
                    $("#sun").hide();
                    $("body").css("background-color", "rgb(15, 10, 64)")
                    $("#moon").fadeIn();
                    $("#moon").animate({top: -150, left: windowWidhtSunMoon},10000,"linear",
                    function()
                    {
                        $("#moon").css("z-index", "2");
                        $("#moon").animate({top: 150, left: windowWidhtSunMoonEnd }, 10000, "linear",
                        function()
                        {
                            $("#moon").hide();
                            $("#moon").animate({top: PositionBaseY, left: PositionBaseX});
                            $("#sun").animate({top: PositionBaseY, left: PositionBaseX});
                            $("#sun").fadeIn();
                            $("body").css("background-color", "rgb(197, 195, 219)");
                            sunAndMoon();
                        });    
                    });
            });
        });
}



$("#sun").animate({top: -150, left: windowWidhtSunMoon},10000,"linear",
    function(){
        $("#sun").css("z-index", "2");
        $("#tree").css("z-index", "3");
        $("#sun").animate({top: 150, left: windowWidhtSunMoonEnd }, 10000, "linear");
} );


$("#wateringcan").on("click", function () {

    var attributeContent = $("#wateringcan").attr("src");
    if (attributeContent === "images/wateringcan.png") {
        attributeContent = "images/wateringcantilted2.png";
        $(this).attr("src", attributeContent);


    }
    else {
        attributeContent = "images/wateringcan.png";
        $(this).attr("src", attributeContent);
    }
});


<<<<<<< HEAD

watering();

function watering() {
    $("#wateringcan").on("click", function () {
        $(".waterdrop").offset({
            top: $("#wateringcan").offset().top + 20,
            left: $("#wateringcan").offset().left + 5

        })

        var attributeContent = $("#wateringcan").attr("src");
        if (attributeContent === "images/wateringcantilted2.png") {
            var droptop = $(window).height() - $(".waterdrop").height();
            
            $(".waterdrop").animate({ top: droptop }, 2000, "linear", watering());
        }

    })
}
=======
$("#buttonId").on("click",function(){
    $("body").css("background-color", randomColor());
    $("#net").fadeIn();
});
>>>>>>> 30d9980e7ef0e744eb453637a80f2165ad91cacf
