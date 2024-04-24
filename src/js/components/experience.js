export { loadExperience };

const expList = Array.from(document.querySelectorAll(".experience-list"));

function loadExperience() {
	loadExperienceEventListener();
	console.log(expList[1]);
}

function loadExperienceEventListener() {
	expList.map((exp) => {
		exp.addEventListener("click", experienceClickEvent);
	});
}

function experienceClickEvent() {
	console.log(this);
}
