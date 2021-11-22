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
<<<<<<< HEAD
    $("#net").offset({top: event.pageY, left: event.pageX});
});


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

var basketY = $(".basket").offset().top;
var basketX = $(".basket").offset().left;

$("#apple1").on("click", function(){
    $("#apple1").animate({top: basketY, left: basketX})
})

$("#apple2").on("click", function(){
    $("#apple2").animate({top: basketY, left: basketX})
})

$("#apple3").on("click", function(){
    $("#apple3").animate({top: basketY, left: basketX})
})
=======
    $("#net").offset({top: event.pageY, left: event.pageX},);
    $("#butterfly").css("z-index", "4");
});

$("#moon").hide();

var windowHeightSunMoon = ($(window).height())/64;
var windowWidhtSunMoon = ($(window).width())/2 -100;
var windowWidhtSunMoonEnd = ($(window).width());



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


>>>>>>> 45f9b727d916b96a96bfb32008d48c01d00b313d
