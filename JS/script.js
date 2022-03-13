// user interface logic
$(document).ready(function () {
    $("#design-col").click(function () {
        $("#design").toggle();
        $("#design-icon").toggle();
        

    });


    $("#development-col").click(function () {
        $("#development").toggle();
        $("#development-icon").toggle()
    });


    $("#management-col").click(function () {
        $("#management").toggle();
        $("#management-icon").toggle()
    });

});