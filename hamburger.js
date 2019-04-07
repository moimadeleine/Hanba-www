
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }



const hamburger = $('.hamburger');
const nav = $('.navbar ul');


$(hamburger).on('click', function(){

$(this).toggleClass('is-active');
nav.slideToggle();


});

