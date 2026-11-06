lucide.createIcons();

// Toggles
const toggleNav = document.getElementById("toggle-nav");
const toggleAutomationSkills = document.getElementById("toggle-automation-skills");
const toggleSoftwareDevelopmentSkills = document.getElementById("toggle-software-development-skills");
const toggleDevOpsSkills = document.getElementById("toggle-devops-skills");
// Buttons
const playButtonCJ = document.getElementById("play-button-cj");
const playButtonTA = document.getElementById("play-button-ta");
// Content
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const automationSkills = document.getElementById("automation-skills");
const softwareDevelopmentSkills = document.getElementById("software-development-skills");
const devOpsSkills = document.getElementById("devops-skills");
const section = document.querySelector("section");

const mediaQuery = window.matchMedia("(max-width: 900px)");

// Are dropdowns up?
let isToggleNavUp = true;
let isToggleAutomationSkillsUp = true;
let isToggleSoftwareDevelopementSkills = true;
let isToggleDevOpsSkills = true;

playButtonCJ.addEventListener("click", () => {
	window.location.href = "coaster-jump.html";
});


playButtonTA.addEventListener("click", () => {
	window.open("https://gx.games/games/dr3b59/track-attack/tracks/5333215e-3b13-4fdc-b5cf-e2c86e84b124/", "_blank");
});

// Nav
toggleNav.addEventListener("click", () => {
        if (isToggleNavUp) {
                toggleNav.style.transform = "rotate(180deg)";
		nav.style.display = "";
                isToggleNavUp = false;
        } else {
                toggleNav.style.transform = "rotate(0)";
		nav.style.display = "none";
                isToggleNavUp = true;
        }
});
// Automation Skills
toggleAutomationSkills.addEventListener("click", () => {
        if (isToggleAutomationSkillsUp) {
                toggleAutomationSkills.style.transform = "rotate(180deg)";
                automationSkills.style.display = "flex";
                isToggleAutomationSkillsUp = false;
        } else {
                toggleAutomationSkills.style.transform = "rotate(0)";
                automationSkills.style.display = "none";
                isToggleAutomationSkillsUp = true;
        }
});
// Software Development Skills
toggleSoftwareDevelopmentSkills.addEventListener("click", () => {
        if (isToggleSoftwareDevelopementSkills) {
                toggleSoftwareDevelopmentSkills.style.transform = "rotate(180deg)";
                softwareDevelopmentSkills.style.display = "flex";
                isToggleSoftwareDevelopementSkills = false;
        } else {
                toggleSoftwareDevelopmentSkills.style.transform = "rotate(0)";
                softwareDevelopmentSkills.style.display = "none";
                isToggleSoftwareDevelopementSkills = true;
        }
});
// DevOps Skills
toggleDevOpsSkills.addEventListener("click", () => {
        if (isToggleDevOpsSkills) {
                toggleDevOpsSkills.style.transform = "rotate(180deg)";
                devOpsSkills.style.display = "flex";
                isToggleDevOpsSkills = false;
        } else {
                toggleDevOpsSkills.style.transform = "rotate(0)";
                devOpsSkills.style.display = "none";
                isToggleDevOpsSkills = true;
        }
});


toggleMobileUI();


mediaQuery.addEventListener("change", () => {
	toggleMobileUI();
});


function toggleMobileUI() {
        if (mediaQuery.matches) {
                body.style.marginTop = "11rem";
                nav.style.display = "none";
		toggleNav.style.display = "";
        } else {
                body.style.marginTop = "12.5rem";
                nav.style.display = "";
		toggleNav.style.display = "none";
        }
}
