import { init } from "./js/init.js";
import "./scss/styles.scss";
import resume from "./assets/resume.pdf";

init();

const resumeLink = Array.from(document.querySelectorAll(".resume-link"));

resumeLink.forEach((button) => {
	button.href = resume;
});
