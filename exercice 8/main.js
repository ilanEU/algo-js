let moi = {
  name: "Ilan",
  favoriteFood: "mes opps",
  city: "Paris"
};

let result = 0 
let values = Object.values(moi);

// Simple

values.forEach(value => {
  result += value.length
});

console.log(result);

if (result % 2) {
  console.log("impair");
} else {
  console.log("pair");
}

console.log(`Le résultat est ${result}`); // L'interpolation
console.log("le résultat est" + result); // La concaténation
console.log(`Le résultat est ${result % 2 ? "impair" : "Pair"}`); // 

// Compliqué

result = 0 
result = values.reduce((acc, value) => acc + value.length, 0)
console.log(result);

