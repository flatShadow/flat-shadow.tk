function openMenu() { /*Funktion fürs Menü*/
	var mobileMenu = document.getElementById("menuBody");
	var icon = document.getElementById("iconFont");
	if (mobileMenu.className === "menu") {
		mobileMenu.className += " responsive";
		icon.className = "fa fa-close";
	} else {
		mobileMenu.className = "menu";
		icon.className = "fa fa-bars";
	}
}