

document.getElementById("btn").onclick=function(){

let temp= document.getElementById("temperature").value;
temp=Number(temp);

  if(document.getElementById("cel").checked){
    document.getElementById("result").innerHTML=(((temp-32)*(5/9))).toFixed(2)+"°C";
  }

  else if(document.getElementById("fah").checked){
    document.getElementById("result").innerHTML=(temp*(9/5)+32).toFixed(2)+"°F";
  }
  else{
    document.getElementById("result").innerHTML="Select a unit";
  }
  
}
