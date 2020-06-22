// Start-Animation stoppen
document.getElementsByClassName("startAnimation")[0].children[0].style.animationPlayState = "paused";
document.getElementsByClassName("startAnimation")[0].children[1].style.animationPlayState = "paused";
document.getElementsByClassName("startAnimation")[0].children[1].children[0].style.animationPlayState = "paused";

//Animation der Drehaufforderung
var handy = document.getElementById('rotate');

function orentationHint(){
	var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
	if(orientation === "landscape-primary"){
		handy.style.display = "none";
	 }
	else{
		handy.style.display = "block";
	}
}
window.addEventListener("orientationchange", orentationHint);

//  --- Regler und Bild anpassen
window.onload = function(){
	fade();
	document.getElementsByClassName("startAnimation")[0].children[0].style.animationPlayState = "running"; //Animation starten wenn Seite fertig geladen wurde
	document.getElementsByClassName("startAnimation")[0].children[1].style.animationPlayState = "running";
	document.getElementsByClassName("startAnimation")[0].children[1].children[0].style.animationPlayState = "running";
	var modul = document.getElementById("modul");
	var div1 = document.getElementById("changeFrame");
	div1.onmousemove = changeModul;
	div1.onmousedown = changeModul;
	resizeFunction();
	orentationHint();
	
	
}
var pic1 = document.getElementById("pic1");
	var pic2 = document.getElementById("pic2");

function resizeFunction(){ //aktualisiert wennn das Fenster die Größe ändert
	var heightImg = (window.innerWidth*0.7)*0.52415; //Berechnet die Höhe des Bildes 
	document.documentElement.style.setProperty('--imgHeight',heightImg + "px");
}

function changeModul(e) { //Funktion, um positionen für Bild und Regel zu laden	
	var posX = e.clientX - window.innerWidth*0.15;
	document.documentElement.style.setProperty('--wid',posX + "px");
	
	//  Stelle der Reglers
	if(posX < 0){
		var posModul = - (modul.offsetWidth/2);
	}
	else if(posX > window.innerWidth*0.7){
		var posModul = (window.innerWidth*0.7) - (modul.offsetWidth/2);
	}
	else{
		var posModul = posX - (modul.offsetWidth/2);
	}
	document.documentElement.style.setProperty('--marginModul',posModul + "px");
}


//  --- Ladescreen Halfimg --- //
var load = document.getElementById('loadIMG');
var time = Date.now();

pic2.onload = function() {
	/*if(Date.now() - time < 250){ // Wenn die Datei schnell geladen wird, wird der Ladescreen nicht angezeigt
	   load.style.display = "none";
	}
	else{
		load.style.opacity = 0;
		setTimeout(() => { load.style.display = "none"; }, 800); //Element erst 500ms nach ausblendung entfernen
	}*/
	load.style.opacity = 0;
		setTimeout(() => { load.style.display = "none"; }, 800); //Element erst 500ms nach ausblendung entfernen
}

//  ---  Bild ändern ---
var images = [ //Array von allen Bildern
	["bilder/halfImg/default1.png", "bilder/halfImg/FS1.png", 1], //0-> nicht geladen, 1-> gealden
	["bilder/halfImg/default2.png", "bilder/halfImg/FS2.png", 0],
	["bilder/halfImg/default3.png", "bilder/halfImg/FS3.png", 0],
	["bilder/halfImg/default4.png", "bilder/halfImg/FS4.png", 0],
	["bilder/halfImg/default5.png", "bilder/halfImg/FS5.png", 0],
	["bilder/halfImg/default6.png", "bilder/halfImg/FS6.png", 0],
	["bilder/halfImg/default7.png", "bilder/halfImg/FS7.png", 0],
]
var currentImg = 0;
function changeImg(x){
	
	currentImg += x;
	if(currentImg<0){
		currentImg = images.length - 1;
	}
	else if(currentImg>=images.length){
		currentImg = 0;
	}
		
	if(images[currentImg][2] == 0){ //ladescreen laden falls Bild noch nicht geladen
		load.style.opacity = 100; 
		load.style.display = "block"; 
		images[currentImg][2] = 1;
	}
		
	pic1.src=images[currentImg][0];
	pic2.src=images[currentImg][1];
	//time = Date.now(); //Zeit des Wegsendens
}