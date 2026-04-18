console.log("Portfolio Loaded");

const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(){

console.log("Navigating to", this.getAttribute("href"));

});

});
