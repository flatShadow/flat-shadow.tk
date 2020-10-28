var boxes = document.getElementsByClassName('tVersion');
var dButtons = document.getElementsByClassName('downloadButton');
var soon = document.getElementById('soon');
var bg = document.getElementById('downloadFr');

var versions = [ //Array version, Available, hintergund
	[
		"alpha",
		"none", //none -> available, block -> not available
		"bilder/download/bg3.png",
	],
	[
		"1.7",
		"block",
		"bilder/download/bg1.png",
	],
	[
		"1.8",
		"block",
		"bilder/download/bg2.png",
	],
	[
		"1.9",
		"block",
		"bilder/download/bg3.png",
	],
	[
		"1.10",
		"block",
		"bilder/download/bg4.png",
	],
]

function changeVersion(elmt,currentElemnt){ //elmt wird mit this übergeben, currentElemnt ist die Nummer des Elements
	
	if(currentElemnt >=0 && currentElemnt < versions.length){
		var version = versions[currentElemnt][0];
		soon.style.display = versions[currentElemnt][1]; // coming soon Fenster
		bg.style.backgroundImage = "url('" + versions[currentElemnt][2] + "')"; //Ändert das Hintergrundbild	
		
		for(let i=0;i<boxes.length;i++){ //Ändert die Beschreibung
			boxes[i].innerHTML = version; 
		}

		var j=0;
		for(let i=512;i>=64;i/=2){
			dButtons[j].href="texturePacks/"+version+"/FlatShadowPack"+i+"x"+i+"_"+version+".zip"; //Ändert den Downloadlink
			j++;
		}
		
		document.getElementsByClassName('infobox active')[0].className = "infobox version"; //Ändert dies Klasse aufs ausgewählte Element
		elmt.className="infobox active";
	}
	else{
		window.alert("Element missing!");
	}
}