const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector(".btn2")
const removeColor = document.querySelector(".remove-color")
const div = document.querySelector(".color")

function redColor() {
	div.classList.toggle("red")
}

function blueColor() {
	div.classList.toggle("blue")
}

function deleteColor() {
	div.classList.remove("blue")
	div.classList.remove("red")
}

btn1.addEventListener("click", redColor)
btn2.addEventListener("click", blueColor)
removeColor.addEventListener("click", deleteColor)
