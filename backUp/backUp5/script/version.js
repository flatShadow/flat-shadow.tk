var boxes = document.getElementsByClassName('tVersion');
var dButtons = document.getElementsByClassName('downloadButton');

var bg = [ //Array von allen Hintergrundbildern
	"../bilder/download/bg1.png",
	"../bilder/download/bg2.png",
	"../bilder/download/bg3.png",
	"../bilder/download/bg4.png"
]

function changeVersion(elmt,currentElemnt){ //elmt wird mit this übergeben, currentElemnt ist die Nummer des Elements
	
	if(currentElemnt >=0 && currentElemnt < bg.length){
		var version = "1." + (currentElemnt + 7) //erzeugt die Version aus der Elementnummer

		document.getElementById('downloadFr').style.backgroundImage = "url('" + bg[currentElemnt] + "')"; //Ändert das Hintergrundbild

		for(let i=0;i<boxes.length;i++){ //Ändert die Beschreibung
			boxes[i].innerHTML = version; 
		}

		var j=0;
		for(let i=512;i>=64;i/=2){
			dButtons[j].href="../texturePacks/"+version+"/FlatShadowPack"+i+"x"+i+"_"+version+".zip"; //Ändert den Downloadlink
			j++;
		}

		document.getElementsByClassName('infobox active')[0].className = "infobox version"; //Ändert dies Klasse aufs ausgewählte Element
		elmt.className="infobox active";
	}
	else{
		window.alert("Element missing!");
	}
}