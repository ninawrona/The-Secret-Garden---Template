

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




