let portfolio = document.getElementById("portfolio")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let portrait = document.getElementById("portrait")

portfolio.addEventListener("mouseover", function( event ) {
    portrait.style.backgroundColor = "rgb(220,255,255)";
}, false);

portfolio.addEventListener("mouseout", function( event ) {
    portrait.style.backgroundColor = "rgb(240,240,240)";
}, false);

about.addEventListener("mouseover", function( event ) {
    portrait.style.backgroundColor = "rgb(220,220,255)";
}, false);

about.addEventListener("mouseout", function( event ) {
    portrait.style.backgroundColor = "rgb(240,240,240)";
}, false);

contact.addEventListener("mouseover", function( event ) {
    portrait.style.backgroundColor = "rgb(255,220,220)";
}, false);

contact.addEventListener("mouseout", function( event ) {
    portrait.style.backgroundColor = "rgb(240,240,240)";
}, false);