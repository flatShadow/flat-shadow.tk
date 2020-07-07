var boxes = document.getElementsByClassName('tVersion');
var dButtons = document.getElementsByClassName('downloadButton');

function changeVersion(elmt,version){
	
	for(let i=0;i<boxes.length;i++){ //Ändert die Beschreibung
		boxes[i].innerHTML = version;
	}
	
	var j=0;
	for(let i=512;i>=64;i/=2){
		dButtons[j].href="../texturePacks/"+version+"/FlatShadowPack"+i+"x"+i+"_"+version+".zip";
		j++;
	}
	
	document.getElementsByClassName('infobox active')[0].className = "infobox version"; //Ändert ausgewähltes Element
	elmt.className="infobox active";
	
}