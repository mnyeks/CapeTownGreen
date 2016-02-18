
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
    //displayMessage(e.keyCode);

    var keyName = keyCodeName(e.keyCode);
     displayMessage(keyName);
  
};

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

	