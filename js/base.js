
$(".name").html(localStorage.getItem("firstName"));




xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);

var id1;
var id2;
for(var i=0; i<6; i++)
{
  id1 = "post"+i;
    id2 = "content"+i;
    console.log(id1);
 
    document.getElementById("posts").innerHTML +="<div class='col-lg-12 post' id='"+id1+"'>";
   document.getElementById(id1).innerHTML ="<div class='col-lg-12 head'>   <h6>"+myobj.Dept.posts.post[i].title+"</h6></div> <hr>";
   document.getElementById(id1).innerHTML+="<div class='col-lg-12 content' id='"+id2+"'>";
   document.getElementById(id2).innerHTML =" <img src="+myobj.Dept.posts.post[i].img1+" width='50' height='auto' class='img-fluid' alt=''>"+
   "<span>"+myobj.Dept.posts.post[i].name+"</span>"+
   "<p>"+myobj.Dept.posts.post[i].content+"</p>"+
   "<img src='"+myobj.Dept.posts.post[i].img2+"' class='img-fluid' alt=''><hr>"+
   "<span><a href='#''><i class='fas fa-thumbs-up'></i>like</a></span>"+
   "<span><a href='#''> <i class='fas fa-comment-alt'></i>  comment</a></span>"+
   " <span><a href='#'><i class='fas fa-share'></i>share</a></span> </div>";
   document.getElementById(id1).innerHTML +="</div> ";

   
      
    
}


}
}
xmlhttp.open("GET","jsonFiles/Json.txt",true);
xmlhttp.send();


// ----------------------------------------------chat--------------------------
var flag = true;
$(function(){
  $("#openChat").click(function(){
    if(flag)
    {
    $("#myForm2").animate({ height: '400px' }, 250);
    flag = false;
    }
    else
    {
      $("#myForm2").animate({ height: '50px' }, 250);
      flag = true;
    }


  })
})


