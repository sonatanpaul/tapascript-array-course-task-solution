// T-001: Create an array of 5 elements using the Array Constructor.
const person = new Array("Anik", "Rayhan", "Akash", "Asraful", "Bikash");
console.log(person);
// Output : ['Anik', 'Rayhan', 'Akash', 'Asraful', 'Bikash']

// T-002: Create an array of 3 empty slots.
const number = new Array(10);
console.log(number);
// Output: (10) [empty × 10]

// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const city = ["Dhaka", "Gazipur", "Mirpur", "Kolkata", "Uttara", "Badda"];
const cityLength = city.length;
console.log(cityLength); //output : 6
const favoriteCity = city[cityLength - 2];
console.log(favoriteCity); // output : Uttara
