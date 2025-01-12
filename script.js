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

// T-004: Use the for loop on the above array to print elements in the odd index.
const newCity = ["Dhaka", "Gazipur", "Mirpur", "Kolkata", "Uttara", "Badda"];

for (let i = 1; i < newCity.length; i += 2) {
  console.log(newCity[i]);
}
// Output : Gazipur  Kolkata Badda

// T-005: Add one element at the front and the end of an array.
// add last element of array
const friend = ["Anik", "Asraful", "Rayhan"];
friend.push("Akash");
console.log(friend);
// output : ['Anik', 'Asraful', 'Rayhan', 'Akash']

// add first element of array
const bestFriend = ["Anik", "Rayhan"];
bestFriend.unshift("Asraful");
console.log(bestFriend);
// output:  ['Asraful', 'Anik', 'Rayhan']

// T-006: Remove an element from the front and the end of an array.
const removeLastElement = [1, 2, 3, 5, 6];
removeLastElement.pop();
console.log(removeLastElement);
// Output : [1, 2, 3, 5]

const removeFirstElement = [1, 2, 3, 4, 5, 6, 7];
removeFirstElement.shift();
console.log(removeFirstElement);
// Output : [2, 3, 4, 5, 6, 7]
