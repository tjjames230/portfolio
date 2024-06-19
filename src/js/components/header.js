export { updateHeaderActiveLink, removeHeaderStyles, mobileNavInit };

const nav = document.querySelectorAll(".nav-links");
const mobileNavBtn = document.querySelector("#mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavExit = document.querySelector("#mobile-nav-exit");
const mobileNavCtn = document.querySelector(".mobile-nav-bg");

function updateHeaderActiveLink() {
	nav.forEach((link) => {
		link.addEventListener("click", () => {
			updateHeaderStyles(link);
		});
	});
}

function updateHeaderStyles(link) {
	removeHeaderStyles();
	addHeaderStyles(link);
}

function removeHeaderStyles() {
	nav.forEach((child) => {
		child.classList.remove("active-nav");
	});
}

function addHeaderStyles(link) {
	link.classList.add("active-nav");
}

function mobileNavInit() {
	mobileNavBtn.addEventListener("click", () => {
		mobileNav.classList.add("active-bg");
		mobileNavCtn.classList.add("active-ctn");
	});

	mobileNavExit.addEventListener("click", () => {
		mobileNav.classList.remove("active-bg");
		mobileNavCtn.classList.remove("active-ctn");
	});
}
