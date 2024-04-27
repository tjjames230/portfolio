export { loadMobile };

const mobileBtn = document.querySelector("#mobile-btn");
const mobileNav = document.querySelector("#mobile-nav");

function loadMobile() {
	loadMobileEventListeners();
}

function loadMobileEventListeners() {
	mobileBtn.addEventListener("click", displayMobileNav);
}

function displayMobileNav() {
	mobileNav.style.display = "flex";
}

function hideMobileNav() {}
