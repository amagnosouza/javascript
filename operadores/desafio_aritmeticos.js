// Calcular temperaturas!


//Fahrenheit
// (F - 32) / 9 = C/5
let f = 73
grauC = ((f - 32) / 9) * 5
console.log(grauC) // => 22.77

// Celsius em graus Fahrenheit
let c = 22.77
let grauF = (9/5 * c) + 32 
console.log(grauF) // => 72.98 ~ 73!

// Celsius em graus kelvin
let k = c + 273.15

// kelvin em graus Celsius
let c = k - 273.15