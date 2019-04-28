$(function(){
    var flag = true;
    $("#hide").click(function () {
     $(".asd").toggle();
     if(flag)
     {
     $(this).html("<i class='fas fa-chevron-down'></i>");
     flag = false;
    }
    else
    {
        $(this).html("<i class='fas fa-chevron-up'></i>");
        flag = true;
    }

      })
    //------------------------------------------------
   $(".iconStar").mouseover(function () { 
        $(".popUpIcon").show();
    
    });
    // ----------------------------------------------
    $(".iconStar").mouseout(function () { 
        $(".popUpIcon").hide();
    });
       //------------------------------------------------
   $(".firstBro").mouseover(function () { 
    $(".popUpIcon2").show();
});
// ----------------------------------------------
$(".firstBro").mouseout(function () { 
    $(".popUpIcon2").hide();
});
       //------------------------------------------------
       $(".secondBro").mouseover(function () { 
        $(".popUpIcon2").show();
    });
    // ----------------------------------------------
    $(".secondBro").mouseout(function () { 
        $(".popUpIcon2").hide();
    });
       //------------------------------------------------
       $(".thirdBro").mouseover(function () { 
        $(".popUpIcon2").show();
    });
    // ----------------------------------------------
    $(".thirdBro").mouseout(function () { 
        $(".popUpIcon2").hide();
    });
       //------------------------------------------------
       $(".fourthBro").mouseover(function () { 
        $(".popUpIcon2").show();
    });
    // ----------------------------------------------
    $(".fourthBro").mouseout(function () { 
        $(".popUpIcon2").hide();
    });
 //------------------------------------------------
           $(".gray").mouseover(function () { 
            $(".popUpIcon2").show();
        });
        // ----------------------------------------------
        $(".gray").mouseout(function () { 
            $(".popUpIcon2").hide();
        });
    
// ---------------------------------------------

    $(".circleStar").mouseover(function(){
        $(".popUpIcon3").show();   
        $(".popUpIcon2").hide();
    });
//-----------------------------------------------
$(".circleStar").mouseout(function () { 
    $(".popUpIcon3").hide();

});
// ----------slider---------------------------
var flag1 =1;
var display = true;
$("#next").click(function(){
    flag1++;

    if(flag1==1)
    {
    $(".div1").show();
    $(".div2").hide();
    $(".div3").hide();
   
    }
   else  if(flag1==2)
    {
    $(".div2").show();
    $(".div1").hide();
    $(".div3").hide();
   
    }
    else  if(flag1==3)
    {
    $(".div3").show();
    $(".div1").hide();
    $(".div2").hide();
   
    }
    
    if(flag1>=1)
    {
        $( "#previeus" ).prop( "disabled", false );
        $("#previeus").css("cursor","pointer");
    }

    if(flag1>=2)
    {
        $( "#previeus" ).prop( "disabled", false );
        $("#previeus").css("cursor","pointer");
    }

    if(flag1 >=3)
    {
    flag1=3;
        $( "#next" ).prop( "disabled", true );
        $("#next").css("cursor","not-allowed");

    }


console.log(flag1);
    
});

$("#previeus").click(function () { 
    flag1--;
    if(flag1==1)
    {
    $(".div1").show();
    $(".div2").hide();
    $(".div3").hide();

    }

    else if(flag1==2)
    {
    $(".div2").show();
    $(".div1").hide();
    $(".div3").hide();
  
   
    }
   else  if(flag1==3)
    {
    $(".div3").show();
    $(".div1").hide();
    $(".div2").hide();


    }
         
    if(flag1<=3)
    {
        $( "#next" ).prop( "disabled", false );
        $("#next").css("cursor","pointer");
    }

    if(flag1<=2)
    {
        $( "#next" ).prop( "disabled", false );
        $("#next").css("cursor","pointer");
    }

    if(flag1 <=1)
    {
    flag1=1;
    $( "#previeus" ).prop( "disabled", true );
    $("#previeus").css("cursor","not-allowed");
    }
    
    console.log(flag1);
});

});