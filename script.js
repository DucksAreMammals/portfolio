// Part 2
const firstName = "Bjorn";
let currentGame = "Celeste";
let gameHours = 225.5;

console.log(`Type of first name: ${typeof(firstName)}`);
console.log(`Type of current game: ${typeof(currentGame)}`);
console.log(`Type of game hours: ${typeof(gameHours)}`);

// Part 3 and 4 combination
// Calculates the first 10 fibbonaci numbers, stores a formatted list in res.
let a = 1;
let b = 1;

let res = String(a) + ", " + String(b);
for (let i = 0; i < 8; i++) {
	let temp = b;
	b += a;
	a = temp;
	res += `, ${b}`;
}

console.log(res);

var compString = b < 100 ? "less than" : "greater than or equal to";
console.log(`The 10th fibbonachi number is ${compString} 100`);
