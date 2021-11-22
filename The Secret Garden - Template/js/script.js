

//MAKE THE MAGIC HAPPEN

var butterflyX;
var butterflyY;
var windowWidth = $(window).width() - $("#butterfly").width();
var windowHeight= $(window).height()- $("#butterfly").height();
var randomX;
var randomY;




function randomXY(){
 butterflyX = Math.floor(Math.random()*windowWidth);
 butterflyY = Math.floor(Math.random()*windowHeight);
}



$("#butterfly").animate( "slow", function() {squareMovement(this)});

$("#butterfly").on("mouseenter",function(){
    randomXY();
    $("#butterfly").animate({top: butterflyY, left: butterflyX}, "slow");
    $("#butterfly").stop();


});


function squareMovement(IdRef) {
    randomXY();
    $(IdRef).animate({top: butterflyY}).delay(2000).animate({left: butterflyX}, "slow", function(){squareMovement(IdRef);});
}


$(window).on("mouseenter", function(event){
    var xCoord = event.pageX;
    var yCoord = event.pageY;

    $("#net").offset({top: yCoord, left: xCoord});
});

//SUNTHING AND MOONTHING












//SUNEND AND MOONEND
