// Quick test to see if JQuery is activated.
if (typeof jQuery === 'undefined') {
  console.log("JQuery is ON.");
} 
else {
  console.log("JQuery is OFF");
}

// When the webpage is scrolled at all beyond its starting point...
window.onscroll = function(event) {
    var top = window.scrollY;
    
    if(top >=100) { // If the user is NOT at the top of the webpage...
      $(".navbar .container").fadeOut();
    }
    else {
      $(".navbar .container").fadeIn();
    }
}

// EXPERIMENTAL FEATURE, NEEDS TO BE BUG-TESTED.

// $(".navbar").hover(
//   function() { // What to do when hovered.
//     $(".navbar .container").fadeIn();
//   },

//   function() { // What to do when NOT hovered.
//     $(".navbar .container").fadeOut();
//   }
// );


