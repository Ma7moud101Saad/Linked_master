$(function(){
    $("#signIn").click(function(event){
     //   var x = document.getElementById("passwordHelp").value; 
        var x = $("#passwordHelp").val();
        if(x.length <6)
       {
        event.preventDefault();
       }
    });
});