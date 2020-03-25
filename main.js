$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        var first = $("#gId").val();
        var second = $("select#event option:checked").val();
        var third = $("#mId").val();
        $("form").hide();
        $("#card-section").css("display","flex")
        $("#gOutput").text("Form Submitted");
        $("#eOutput").text(`${first}! You are going to a ${second}. We will let them know: ${third}`);
    });
  });