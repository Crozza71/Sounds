// using window.onload so we can stop the execution of the javascript untill the dom has been loaded.
 window.onload = function (){
 
  // creating a vairable which will contain an array of all clickable elements
   var buttons = document.getElementsByTagName("a");
 
   // looping over the array of elements
  for (var i = buttons.length - 1; i >= 0; i--) {
 
     // creating a click event listener for each element inside the array
     buttons[i].addEventListener("click", function() {
 
       // extracting the id from the clicked element
       var fileName = this.getAttribute("id");
 
       // using the built in audio object to create a audio tag passing in the fileName vairable when having to declare which sound to play
       var sound = new Audio("sounds/" + fileName + ".wav");
 
       // calling the play() function to play the correct sound
       sound.play();
 
       // combining the three lines above into one
       new Audio("sounds/" + this.getAttribute("id") + ".wav").play();
     });
   }
 } 