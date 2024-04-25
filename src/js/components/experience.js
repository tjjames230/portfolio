export { loadExperience };

const expList = Array.from(document.querySelectorAll(".experience-list"));

function loadExperience() {
	loadExperienceEventListener();
}

function loadExperienceEventListener() {
	expList.map((exp) => {
		exp.addEventListener("click", experienceClickEvent);
	});
}

function experienceClickEvent() {
	// check class list for active, then update styling
	const newHeader = this.querySelector("h4");

	if (!this.classList.contains("active-list")) {
		// remove previous experience styling
		for (let i = 0; i < expList.length; i++) {
			if (expList[i].classList.contains("active-list")) {
				const oldHeader = expList[i].querySelector("h4");
				expList[i].classList.remove("active-list");
				oldHeader.classList.remove("active-header");
			}
		}

		// update clicked header styling
		this.classList.add("active-list");
		newHeader.classList.add("active-header");
	}

	// update content based on what is clicked
}
