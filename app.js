var date = new Date();
var daysinweek = ["SUNDAY", "MONDAY", "TEUSDAY", "WEDNESDAY", "THRUSDAY", "FRIDAY", "SATUREDAY"];
var day = date.getDay();
var today = daysinweek[day]
var hours = date.getHours();
var times = hours % 12;
var min = date.getMinutes();
var sec = date.getSeconds();
var ampm = hours < 12 ? "AM" : "PM"; 
function home()
{
  document.getElementById("screen").innerText =today+"\n"+ times + ':' + min + ':' + sec + ampm;
}
function msg()
{
 var wish=hours<12?"good morning":(hours<15?"good afternoon":"good evening");
 document.getElementById("screen").innerText=wish;
}
function music()
{
  document.getElementById("screen").innerHTML+='<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="220" height="117"frameborder-radius="37.4861" allowtransparency="true" allow="encrypted-media"></iframe>';
}
function time()
{
  document.getElementById("screen").innerText =times + ':' + min + ':' + sec + ampm;
}