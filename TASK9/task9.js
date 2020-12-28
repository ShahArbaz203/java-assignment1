var num1 = prompt("Enter first number")
var num2 = prompt("Enter second number")
// subtraction 
var subtract = num1-num2;
// multiplication
       var mult = num1 * num2;
// division
      var dvd = num1  / num2;
// modulus
      var modul = num1 % num2;
// for all value to show in document form 
document.write(
    "subtraction of  " + num1 + " and"+num2+ "is" +"subtract"
    + "<br>" + " multiplication of "+ num1 + "and"+ num2 + "is"+ mult
    +"<br>" +"divisioon of " + num1 + "and"+num2+ "is"+ dvd
    + "<br>"+"modulus of"+ num1+"and"+num2+"is"+modul
)