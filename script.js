lucide.createIcons();

const toggleNav = document.getElementById("toggle-nav");
const playButtonCJ = document.getElementById("play-button-cj");
const playButtonTA = document.getElementById("play-button-ta");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const section = document.querySelector("section");

const mediaQuery = window.matchMedia("(max-width: 900px)");

let isToggleNavUp = true;

playButtonCJ.addEventListener("click", () => {
	window.location.href = "coaster-jump.html";
});


playButtonTA.addEventListener("click", () => {
	window.open("https://gx.games/games/dr3b59/track-attack/tracks/5333215e-3b13-4fdc-b5cf-e2c86e84b124/", "_blank");
});


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
