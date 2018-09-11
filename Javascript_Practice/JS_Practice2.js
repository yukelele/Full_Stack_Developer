var firstName = prompt("What is your First Name?");
var lastName = prompt("What is your Last Name?");
var age = prompt("How old are you?");
var height = prompt("How tall are you?");
var petName = prompt("what is your pet's name?")

if ((firstName[0]===lastName[0])&&(20<age)&&(age<30)&&(height>=170)&&(petName[petName.length-1]==="y")){
  console.log("Welcome to the club, Spy");
}
else{
  console.log("Sorry, nothing to here");
}
