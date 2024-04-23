import { init } from "./js/init.js";
import "./scss/styles.scss";
import resume from "./assets/resume.pdf";
import headshot from "./assets/headshot.jpg";
import library from "./assets/library.png";
import coffee from "./assets/coffee.png";

init();

const resumeLink = Array.from(document.querySelectorAll(".resume-link"));

resumeLink.forEach((button) => {
	button.href = resume;
});

const heroImg = document.querySelector("#hero-img");
heroImg.src = headshot;

const libraryImg = document.querySelector("#library-img");
libraryImg.src = library;

const coffeeImg = document.querySelector("#coffee-img");
coffeeImg.src = coffee;
