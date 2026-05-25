$(document).ready(function(){

    $("#btn").click(function(){

        $("#message").text("Welcome to CAMU Weekly Timetable");

        $("table").fadeOut(500);
        $("table").fadeIn(500);

    });

});