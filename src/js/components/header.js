export { updateHeaderActiveLink };

const nav = Array.from(document.querySelectorAll(".nav-links"));

function updateHeaderActiveLink() {
	nav.map((link) => {
		link.addEventListener("mouseover", console.log("hi"));
	});
}
