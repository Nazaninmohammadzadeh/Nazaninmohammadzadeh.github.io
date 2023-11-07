
setInterval(myClock,1000);

myClock();
function myClock(){
  
let date= new Date;

let second= date.getSeconds();
let minute = date.getMinutes();
let hour= date.getHours();

if(second<10){
  second="0"+second;
}
if(minute<10){
  minute="0"+minute;
}
if(hour<10){
  hour="0"+hour;
}
 return document.getElementById("clock").innerHTML=`${hour}:${minute}:${second}`;

}
