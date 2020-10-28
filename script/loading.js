//Main Ladescreen
function fade(){
	document.getElementsByClassName("loadingScreen")[0].style.opacity = 0;
	setTimeout(() => { document.getElementsByClassName("loadingScreen")[0].style.display = "none"; }, 700); //Element erst 500ms nach ausblendung entfernen
	document.getElementsByTagName('html')[0].style.overflow = "auto";
}