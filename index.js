//  1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Amit", age: 23, gender: "male" },
  { name: "Mahazabin", age: 25, gender: "female" },
  { name: "Tamal", age: 22, gender: "male" },
  { name: "Sifat", age: 22, gender: "male" },
  { name: "roksana", age: 22, gender: "female" },
];

const filterAndMapNames = (people) => {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
};

// console.log(filterAndMapNames(people));

//2. Task : Object Manipulation
//Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "Book 1", author: "Author 1", year: 1991 },
  { title: "Book 2", author: "Author 2", year: 1992 },
  { title: "Book 3", author: "Author 3", year: 1993 },
];

const getBookTitles = (books) => books.map((book) => book.title);

// console.log(getBookTitles(books));

// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composeFunctions(num) {
  return addFive(double(square(num)));
}

// console.log(composeFunctions(2));

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2010 },
  { make: "Honda", model: "Accord", year: 2008 },
  { make: "Ford", model: "Mustang", year: 2015 },
];

const sortCarsByYear = (arr) => arr.sort((a, b) => a.year - b.year);

// console.log(sortCarsByYear(cars));

// 5.Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const persons = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 27, gender: "female" },
  { name: "David", age: 35, gender: "male" },
];

const modifyPersonAge = (persons, name, newAge) => {
  return persons.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );
};

// console.log(modifyPersonAge(persons, "Carol", 29));
