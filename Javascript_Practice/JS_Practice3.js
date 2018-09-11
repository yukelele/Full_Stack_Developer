

// Create Empty Student Roster Array
var roster = []


// ADD A NEW STUDENT
function addNew(name){
  roster.push(name)
}


// REMOVE STUDENT
function remove(name){
  var index = roster.indexOf(name);
  roster.splice(index,1);
}



// DISPLAY ROSTER
function display(){
  console.log(roster)
}


// Start by asking if they want to use the web app
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

var start = prompt("Do you want to use the web app? y or n");
q = false
if (start === "y"){
  while(q != true){
    var action = prompt("What action do you want to do? add/remove/display/quit" )
    if (action == "add"){
      var name = prompt("Who do you want to add?")
      addNew(name)
    }
    if(action == "remove"){
      var name = prompt("Who do you want to remove?")
      remove(name)
    }
    if(action == "display"){
      display()
    }
    if(action == "quit"){
      q = true
    }
  }
}
