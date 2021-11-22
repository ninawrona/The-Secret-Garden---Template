//MAKE THE MAGIC HAPPEN

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