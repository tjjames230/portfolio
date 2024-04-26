export { loadExperience };

const expList = Array.from(document.querySelectorAll(".experience-list"));
const expDetails = Array.from(document.querySelectorAll(".experience-details"));

function loadExperience() {
	loadExperienceEventListener();
}

function loadExperienceEventListener() {
	expList.map((exp) => {
		exp.addEventListener("click", updateExperienceList);
		exp.addEventListener("click", updateExperienceDetails);
	});
}

function updateExperienceList() {
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
}

function updateExperienceDetails() {
	for (let i = 0; i < expList.length; i++) {
		if (expList[i].classList.contains("active-list")) {
			for (let j = 0; j < expDetails.length; j++) {
				expDetails[j].classList.remove("active-details");
				expDetails[j].classList.add("hidden-details");
			}

			expDetails[i].classList.remove("hidden-details");
			expDetails[i].classList.add("active-details");
		}
	}
}
