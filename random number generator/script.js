let x;

document.getElementById("generate").onclick=function(){
x=Math.floor(Math.random()*99)+1;
document.getElementById("number").innerHTML=x;
}