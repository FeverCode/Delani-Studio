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

    $(".innerdiv").hover(function () {
            $(this).animate({
                opacity: '1'
            });
        },
        function () {
            $(this).animate({
                opacity: '0'
            });
        })

});

$(document).ready(function () {
    $("mc-embedded-subscribe-form").on("submit", function (e) {
        e.preventDefault();
    });

    $(".submit").click(function () {
        var name = $("#mce-FNME").val();
        var email = $("#mce-EMAIL").val();
        var message = $("mce-MESSAGE").val();

        if (name == '' || email == '' || message == '') {
            alert("Please Fill in Required Fields!")

        } else
            alert("Thank you " + name + "" + " We Have Received Your Mesaage!")


    });
});