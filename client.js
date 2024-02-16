

///////*before string*//////////////////////////////////////////////
let firstName = "shawn";
document.getElementById("string").innerHTML = firstName;
//*number of string*//
let lengthOfString = firstName.length;
document.getElementById("string2").innerHTML = lengthOfString;
//*first character of the string*////
let firstChar = firstName[0];
document.getElementById("string3").innerHTML = firstChar;

////////*before number*/////////////////////////////////////////////////
let age = '23';
document.getElementById("number").innerHTML = age;
age++;
document.getElementById("number2").innerHTML = age;
//*number to string*//
let numberAsString = age.toString();
document.getElementById("number3").innerHTML = numberAsString;


/////////*before arrays*///////////////////////////////////////////////

let friends = ['mike', 'sara'];
document.getElementById("array").innerHTML = friends;
//*Merge two arrays together*//
let friends2 = ['adam','kate'];
let mergedArray = friends.concat(friends2);
document.getElementById("array2").innerHTML = mergedArray;
//*Remove from an array using the *//
let friends3 = mergedArray.pop();
document.getElementById("array3").innerHTML = mergedArray;

////////*before object*/////////////////////////////////////////////

let shawn = {
  firstName : 'shawn',
  age : '23',
  friends: ['mike', 'sara']

}

document.getElementById("object").innerHTML = shawn;
//*Create and log an array of the values of your object with Object.values()*//
let valuesArray = Object.values(shawn);

document.getElementById("object2").innerHTML = valuesArray;
//*Create and log an array of the values of your object with Object.values()*//
let keysArray = Object.keys(shawn);
document.getElementById("object3").innerHTML = keysArray;

//* we use the const keyword to declare variables that are not supposed to change*//