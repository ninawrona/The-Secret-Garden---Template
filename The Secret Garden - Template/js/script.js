

//MAKE THE MAGIC HAPPEN

var butterflyX;
var butterflyY;
var windowWidth = $(window).width() - $("#butterfly").width();
var windowHeight= $(window).height()- $("#butterfly").height();
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


function movement(IdRef) {
    randomXY();
    $(IdRef).animate({top: butterflyY}).delay(2000).animate({left: butterflyX}, "slow", "linear", function(){movement(IdRef);});;
}


$(window).on("mousemove", function(event){
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
