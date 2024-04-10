import { init } from "./js/init.js";
import "./scss/styles.scss";
import resume from "./assets/resume.pdf";
import headshot from "./assets/headshot.jpg";

init();

const resumeLink = Array.from(document.querySelectorAll(".resume-link"));

resumeLink.forEach((button) => {
	button.href = resume;
});

const heroImg = document.querySelector("#hero-img");
heroImg.src = headshot;
