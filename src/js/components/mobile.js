export { loadMobile };

const mobileBtn = document.querySelector("#mobile-btn");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavExit = document.querySelector("#mobile-nav-exit");

function loadMobile() {
	loadMobileEventListeners();
}

function loadMobileEventListeners() {
	mobileBtn.addEventListener("click", displayMobileNav);
	mobileNavExit.addEventListener("click", hideMobileNav);
}

function displayMobileNav() {
	mobileNav.style.display = "flex";
}

function hideMobileNav() {
	mobileNav.style.display = "none";
}
