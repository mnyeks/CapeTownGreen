
//find the body tag and store it in a variable called 'body'
/*var body = document.querySelector("body");

//listen for the keydown event
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
    //displayMessage(e.keyCode);
};*/

//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

//listen for the keydown event
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes    
     //function keyCodeName();    
var keyName = keyCodeName(e.keyCode);
     displayMessage(taxiLocationCounter);
};

var taxiLocationCounter = 0;
    taxiLocationCounter++;
 //var i =  0; 
 // function outcome() {
    // i = i++;
  //} 

var keyCodeName = function(keyCode) {

	if(keyCode === 39) {
       return "right";
   }

   if(keyCode === 37) {
      return "left";
   }

   if(keyCode === 38) {
     return "up";
   }

   if(keyCode === 40) {
      return "down";
   }

   else {
      return "";
   }
	};

function createLocationClass(taxiLocationCounter) {
    if(taxiLocationCounter === 1) {
        return "slot-one-of-nine";
    }
    if(taxiLocationCounter === 2) {
        return "slot-two-of-nine";
    }
    if(taxiLocationCounter === 3) {
        return "slot-three-of-nine";
    }
    if(taxiLocationCounter === 4) {
        return "slot-four-of-nine";
    }
    if(taxiLocationCounter === 5) {
        return "slot-five-of-nine";
    }
    if(taxiLocationCounter === 6) {
        return "slot-six-of-nine";
    }
    if(taxiLocationCounter === 7) {
        return "slot-seven-of-nine";
    }
    if(taxiLocationCounter === 8) {
        return "slot-eight-of-nine";
    }
    if(taxiLocationCounter === 9) {
        return "slot-nine-of-nine";
    }
 };

 function moveForward() {
  var currentLocation = createLocationClass(taxiLocationCounter);
  

 }
  