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


