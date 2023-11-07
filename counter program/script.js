let x=0;

document.getElementById("dec").onclick=function(){
  x-=1;
document.getElementById("counter").innerHTML= x;
}

document.getElementById("reset").onclick=function(){
  x=0;
  document.getElementById("counter").innerHTML= x;
  }

  document.getElementById("inc").onclick=function(){
    x+=1;
    document.getElementById("counter").innerHTML= x;
    }