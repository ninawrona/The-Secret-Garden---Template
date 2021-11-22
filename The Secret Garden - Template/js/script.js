<<<<<<< HEAD
//MAKE THE MAGIC HAPPEN

var yVar = $("#basket").offset().top();
var xVar = $("#basket").offset().left();

function randomX(){
var positionX = Math.floor(Math.random()*($(window).width()-$(".apple").width()));
return positionX;
}

function randomY(){
    var positionY = Math.floor(Math.random()*($(window).height()-$(".apple").height()));
return positionY;
}

$(document).ready(function(){
    $("#apple1").offset({top: randomY(), left: randomX()});
    $("#apple2").offset({top: randomY(), left: randomX()});
    $("#apple3").offset({top: randomY(), left: randomX()});
});

$(".apple").click(function(){
    $(this).animate({top: yVar, left: xVar});
})
=======
//MAKE THE MAGIC HAPPEN
>>>>>>> 762a7ad3dd2830cdb42993f7e2d19ece3125339b
