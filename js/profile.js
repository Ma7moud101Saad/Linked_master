$(function(){
    var flag = true;
    $("#hide").click(function () {
     $(".asd").toggle();
     if(flag)
     {
     $(this).html("show");
     flag = false;
    }
    else
    {
        $(this).html("hide");
        flag = true;
    }

      })
});