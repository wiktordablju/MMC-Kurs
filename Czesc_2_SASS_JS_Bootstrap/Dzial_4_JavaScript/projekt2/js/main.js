const arrowIcon = document.querySelector(".fa-arrow-down")
const arrow = document.querySelector(".arrow")
const hiddenImage = document.querySelector(".item1")

function showHiddenImage() {
	hiddenImage.classList.toggle("show")
	if (hiddenImage.classList.contains("show")) {
		arrowIcon.style.rotate = "180deg"
	} else {
		arrowIcon.style.rotate = "0deg"
	}
}

arrow.addEventListener("click", showHiddenImage)
