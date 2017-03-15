// Callbacks can be used to handle events

// Remember how we said that Javascript uses an Event-Driven programming style? This means that we listen for events, trigger events, and keep track of a list of instructions to run when the event is triggered. As developers, we take care of listening for events and passing the list of instructions to dictate what to do once the event is triggered. The user is usually the one to actually trigger the event.

// Example
// Here is our starting point:

// <html>
//   <body>
//     <button id="someButton">This is Some Button</button>
//     <script>
//  // some js code here to add an event listener to the button
//     </script>
//   </body>
// </html>

// We want to make it so that when the user clicks the button, the page alerts “you clicked a button!”

// Link our variable "button" to a DOM element
var button = document.getElementById("someButton")
// add a DOM eventListener to that variable.
button.addEventListener("click", whatToDoOnClick);
// here we define the whatToDoOnClick function
function whatToDoOnClick() {
  alert("You Did it!")
}

// We did a couple of things in the code above:

// We stored the button element in the button variable so that we could run methods on it. We used the “addEventListener” method to add a listener for the “click” event that will run the “whatToDoOnClick” function once triggered

// The next couple assignments will help solidify this type of callback.