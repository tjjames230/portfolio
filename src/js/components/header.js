export { updateHeaderActiveLink, removeHeaderStyles, mobileNavInit };

const nav = document.querySelectorAll(".nav-links");
const mobileNavBtn = document.querySelector("#mobile-nav-btn");
const mobileNavCtn = document.querySelector("#mobile-nav");
const mobileNavExit = document.querySelector("#mobile-nav-exit");

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
		mobileNavCtn.classList.toggle("mobile-nav-end");
		mobileNavCtn.style.display = "flex";
	});

	mobileNavExit.addEventListener("click", () => {
		mobileNavCtn.style.display = "none";
	});
}
