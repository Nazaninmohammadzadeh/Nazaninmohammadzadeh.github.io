let a;
let b;
let c;

document.getElementById("button").onclick=function(){
a=document.getElementById("a").value;
a=Number(a);
b=document.getElementById("b").value;
b=Number(b);
c= Math.pow(a,2)+Math.pow(b,2);
c= Math.sqrt(c);
document.getElementById("result").innerHTML="Side C is "+c;

}