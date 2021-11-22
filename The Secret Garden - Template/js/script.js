

//MAKE THE MAGIC HAPPEN

var butterflyX;
var butterflyY;
var windowWidth = $(window).width() - $("#butterfly").width();
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
    $("#net").offset({top: event.pageY, left: event.pageX});
});