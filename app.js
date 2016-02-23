
//find the body tag and store it in a variable called 'body'
/*var body = document.querySelector("body");

//listen for the keydown event
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
    //displayMessage(e.keyCode);
};*/

//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");
var taxiLocationCounter = 1;
 
 
//listen for the keydown event
body.onkeydown = function(e){

  
    //e.keyCode - will capture the key codes    
     //function keyCodeName();    
var keyName = keyCodeName(e.keyCode);
var myClass = createLocationClass(taxiLocationCounter);
var tl = newTrafficLight(taxiLocationCounter);      
      displayMessage(myClass);
        taxiLocationCounter++;
        if(keyName === "right") {
           moveForward();
        }
        else if(keyName === "left")
          moveReverse();

        if(TrafficLight === "red") {

        }
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

function createTrafficLightClass(num) {
   if(num === 1) {
        return ".one-of-nine";
    }
    else if(num === 2) {
        return ".two-of-nine";
    }
    else if(num === 3) {
        return ".three-of-nine";
    }
    else if(num === 4) {
        return ".four-of-nine";
    }
    else if(num === 5) {
        return ".five-of-nine";
    }
    else if(num === 6) {
        return ".six-of-nine";
    }
    else if(num === 7) {
        return ".seven-of-nine";
    }
     else if(num === 8) {
        return ".eight-of-nine";
    }
    else if(num === 9) {
        return ".nine-of-nine";
    }

};

function createLocationClass(numb) {
    if(numb === 1) {
        return "slot-one-of-nine";
    }
    else if(numb === 2) {
        return "slot-two-of-nine";
    }
    else if(numb === 3) {
        return "slot-three-of-nine";
    }
    else if(numb === 4) {
        return "slot-four-of-nine";
    }
    else if(numb === 5) {
        return "slot-five-of-nine";
    }
    else if(numb === 6) {
        return "slot-six-of-nine";
    }
    else if(numb === 7) {
        return "slot-seven-of-nine";
    }
     else if(numb === 8) {
        return "slot-eight-of-nine";
    }
    else if(numb === 9) {
        return "slot-nine-of-nine";
    }

 };

 function moveForward() {
  var currentLocation = createLocationClass(taxiLocationCounter);
      taxiLocationCounter++;
var newLocation = createLocationClass(taxiLocationCounter);
      taxiLocationCounter--;   
    moveTaxi(currentLocation, newLocation);
 }

 function moveReverse() {
 var currentLocation = createLocationClass(taxiLocationCounter);
      taxiLocationCounter--;
  var newLocation = createLocationClass(taxiLocationCounter);
        taxiLocationCounter--;
   moveTaxi(currentLocation, newLocation);
 }

 var trafficLightElement = document.querySelector(className);

 var TrafficLight = function(number) {
     this.makeGreen = function() {
        trafficLightElement.classList.add("lights-go");
     }
     this.makeOrange = function() {
        trafficLightElement.classList.add("lights-slowdown");
        trafficLightElement.classList.remove("lights-slowdown");

     }
     this.makeRed = function() {
        trafficLightElement.classList.add("lights-stop");
     }
     this.color = function() {
        if (trafficLightElement.classList.contains("lights-slowdown")){
        return 'orange';
     };
 };
 
  var red = new TrafficLight('lights-stop');

  var orange = new TrafficLight('lights-slowdown');

  var green = new TrafficLight('lights-go');