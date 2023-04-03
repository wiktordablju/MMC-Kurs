const numbers = [1, 2, 3, 4, 5, 6]

for (i = 0; i < numbers.length; i++) {
	console.log(numbers[i])
}

function operations(arg1, arg2, arg3) {
	const result = arg1 + arg2 * arg3
	console.log(`wynikiem dzialania ${arg1} + ${arg2} * ${arg3} jest ${result}`)
}

operations(1, 2, 3)

if (numbers.length > 5) {
	console.log("true")
} else {
	console.log("false")
}

console.log(`Tablica z cyframi ma ${numbers.length} elementow`)
