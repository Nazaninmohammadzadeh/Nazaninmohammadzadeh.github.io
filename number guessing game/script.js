let number= Math.floor(Math.random()*9)+1;
console.log(number);
let guess=0;

document.getElementById("btn").onclick=function(){
 let yourNumber= document.getElementById("your-guess").value; 
 if(number==yourNumber && guess==0){
  window.alert(`Congratulations!!!\nYou found the number in your first try.`);
  
 }
 else if(yourNumber<number){
  window.alert("Your guess is too small!!");
  guess+=1;
 }
 else if(yourNumber>number){
  window.alert("Your guess is too big!!");
  guess+=1;
 }

 else if (number==yourNumber )
  window.alert(`Congratulations!!!\nYou found the number in ${guess} tries.`);
 
}