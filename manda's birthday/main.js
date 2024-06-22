var password = prompt("passwordnya sayangku?");
        if (password=="2306") {
            //location = "media.html"
          
        }
        else 
        {
          document.getElementById("msg").value = "test";  
          //location = "error.html"
        }
$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("i wish you happy birthday, thank you for coming unto my life, Amanda Safitri").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});