
    var myUrl = location.href;
var arr = myUrl.split('?');
var arr2 = arr[1].split('&');
var userName = arr2[0].split('=');
var res = userName[1].replace("%40", "@");
var arrname = res.split("@");
var name = arrname[0];
document.getElementById("demo").innerHTML = ("Welcome "+name).bold().fontsize(20);

localStorage.setItem("firstName", name);

setTimeout(function(){window.location.href ="main.html"},2000);


