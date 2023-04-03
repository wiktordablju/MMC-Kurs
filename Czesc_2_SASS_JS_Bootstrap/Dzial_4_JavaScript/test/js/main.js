// W JS - camelCase, w Pythonie - snake_case
// Z duzej litery tylko klasy w OOP
// z samych duzych tylko krytyczna zmienna

const myName = "Wiktor"
const favouriteFood = "Pizza"
const age = 18

console.log(
	`Jestem ${myName}, mam ${age} a moim ulubionym jedzeniem jest ${favouriteFood}`
)

const x = 8
const y = 8

if (x == y) {
	console.log("essa")
} else {
	console.log("brak essy")
}

const passLength = 4
if (passLength >= 10) {
	console.log("Masz bardzo dobre haslo")
} else if (passLength > 5 && passLength < 10) {
	console.log("Masz spoko haslo")
} else {
	console.log("masz za slabe haslo")
}

// wartosc consta to tablica, zawartosc tablicy moze byc modyfikowana
const colors = ["red", "green", "blue"]
console.log(colors.length)
colors.push("rozowy")
console.log(colors)

// petle for
for (let i = 0; i < 3; i++) {
	console.log(i)
}

const fruits = ["banan", "jablko", "mandarynka"]

for (i = 0; i < fruits.length; i++) {
	console.log(fruits[i])
}

// function

function test() {
	console.log("testuje funkcje essa:D")
}

test()

// Pobieranie elementow

// Wybiera pierwszy napotkany paragraf/klasa/cokolwiek
const p = document.querySelector(".test")
console.log(p)

const liItems = document.querySelectorAll("li")
console.log(liItems)

// add event listener
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector(".btn2")

function button1Click() {
	console.log("Kliknieto przycisk 1")
}

function operation() {
	console.log(2 + 2)
}

btn1.addEventListener("click", button1Click)

btn2.addEventListener("click", operation)
