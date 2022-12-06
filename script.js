/* header */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
	//Links
	navLinks.classList.toggle("open");
	links.forEach(link => {
			link.classList.toggle("fade");
	});

	//Animation
	hamburger.classList.toggle("toggle");
});
/* header */

/* sliders */
var counter=1;
	setInterval(function(){
	document.getElementById('sbutton'+ counter).checked=true;
	counter++;
	if(counter>4){
		counter=1;
	}
	},5000);
/* sliders */