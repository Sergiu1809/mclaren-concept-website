//console.log(`Hello`);
//console.log(`i like pizza`);

//window.alert(`This in an alert`);
//window.alert(`I like pizza`);

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like pizza`;

//let x = 101;
//console.log(x);

//let age=19;
//let price=10.99;
//let medie=8.63;
//console.log(age);
//console.log(price);
//console.log(`You are ${age} years old`);
//console.log(`The price is ${price}`);
//console.log(`Your general average is ${medie}`);
//console.log(typeof age);

//let firstName = "Sergiu";
//let favouriteFood = "Pizza";
//let email = "tanasesergiu1115@gmail.com";
//console.log(typeof firstName);
//console.log(firstName);
//console.log(`Your name is ${firstName}`);
//console.log(`My favourite food is ${favouriteFood}`);
//console.log(`Your email is ${email}`);

//let online = false;
//let forsale = true;
//let isStudent = true;

//console.log(typeof online);
// console.log(`Sergiu is online: ${online}`);
// console.log(`Is this car for sale? ${forsale}`);
//  console.log(`Enrolled: ${isStudent}`);

//let fullName = "Tanase Sergiu-Vasile";
//let age = 19;
//let student = true;

//document.getElementById("p1").textContent = `My name is ${fullName}`;
//document.getElementById("p2").textContent = `I am ${age} years old`;
//document.getElementById("p3").textContent = `Am I a student? ${student}`;

//let students = 30;
//students++;
//students--;
//students *= 2;
//students /=2;
//students **=3;
//students = students % 7;

//console.log(students);

//let result = 1 + 2 * 3 + 4 ** 2;

//console.log(result);

//let username;
//username = window.prompt("Whats your username?");
//console.log(username);

//let username;

//document.getElementById("mysubmit").onclick = function () {
//  username = document.getElementById("mytext").value;
//  document.getElementById("myh1").textContent = `Hello ${username}`;
//};

//const pi = 3.14159;
//let radius;
//let circumference;

//radius = window.prompt("Enter the radius of the circle");
//radius = Number(radius);
//document.getElementById("mysubmit").onclick = function () {
//  radius = document.getElementById("myinput").value;
//  radius = Number(radius);
//  circumference = 2 * pi * radius;
//  document.getElementById("myh3").textContent = circumference + "Cm";
//};
//circumference = 2 * pi * radius;

//const increasebtn = document.getElementById("increasebtn");
//const decreasebtn = document.getElementById("decreasebtn");
//const resetbtn = document.getElementById("resetbtn");
//const labelbtn = document.getElementById("countlabel");

//let count = 0;

//increasebtn.onclick = function () {
//  count++;
//  labelbtn.textContent = count;
//};

//decreasebtn.onclick = function () {
//  count--;
//  labelbtn.textContent = count;
//};

//resetbtn.onclick = function () {
//  count = 0;
//  labelbtn.textContent = count;
//};
//let i = 0;
//let x = 4;
//let z = Math.sqrt(x);
//min = Math.min(x, z, i);
//console.log(z);
//console.log(min);

//const mybutton = document.getElementById("mybutton");
//const random1 = document.getElementById("myh21");
//const random2 = document.getElementById("myh22");
//const random3 = document.getElementById("myh23");

//mybutton.onclick = function () {
// let randomNum1 = Math.floor(Math.random() * 6) + 1;
// random1.textContent = randomNum1;
// let randomNum2 = Math.floor(Math.random() * 6) + 1;
// random2.textContent = randomNum2;
// let randomNum3 = Math.floor(Math.random() * 6) + 1;
// random3.textContent = randomNum3;
/*
const myinput = document.getElementById("myinput");
const submit = document.getElementById("mysubmit");
const result = document.getElementById("myh2");
let age;

submit.onclick = function () {
  age = myinput.value;
  age = Number(age);
  if (age >= 18) {
    result.textContent = "You are allowed";
  } else if (age == 0) {
    result.textContent = "You were just born";
  } else if (age < 18) {
    result.textContent = "You are not allowed";
  }
};



const checkBox = document.getElementById("checkbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubmit.onclick = function () {
  if (checkBox.checked) {
    subResult.textContent = `You are subscribed`;
  } else {
    subResult.textContent = `You are NOT subscribed`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  } else if (paypalBtn.checked) {
    paymentResult.textContent = `You are paying with PayPal`;
  } else {
    paymentResult.textContent = `You must select a payment type`;
  }
};



let age = 17;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);


let time = 16;
let greeting = time < 12 ? "Good Morning!" : "Good afternoon!";
console.log(greeting);


let isStudent = true;

let message = isStudent ? "You're a student" : "You're not a student";
console.log(message);


let purchaseamount = 99;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log(discount);
console.log(
  `Your total is $${purchaseamount - purchaseamount * (discount / 100)}  `
);



let day = 22;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log(`${day} is not a day`);
}


let testScore = 12;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  case testScore >= 50:
    letterGrade = "E";
    break;
  default:
    letterGrade = "F";
}

console.log(letterGrade)
*/

//const fullName = "Tanase Sergiu";
//let firstName = fullName.slice(0, 5);
//let lastName = fullName.slice(7, 13);
//let firstChar = fullName.slice(-1);

//let firstName = fullName.slice(0, fullName.indexOf(" "));
//let lastName = fullName.slice(fullName.indexOf(" ") + 1);

//console.log(lastName);

//const email = "tanasesergiu15@gmail.com";

//let username = email.slice(0, email.indexOf("@"));
//let extension = email.slice(email.indexOf("@"));

//console.log(username);
//console.log(extension);

//let username = window.prompt("Enter username:");

//username = username.trim();
//let letter = username.charAt(0);
//letter = letter.toUpperCase();
//let extraChars = username.slice(1);
//extraChars = extraChars.toLowerCase();

//username = letter + extraChars;
//console.log(username);
//let username = window.prompt("Enter username:");
//username =
//  username.trim().charAt(0).toUpperCase() +
//  username.trim().slice(1).toLowerCase();

//console.log(username);

//const temp = 200;

//if (temp > 0 && temp < 30) {
//  console.log("The weather is good");
//} else {
//  console.log("The weather is bad");
//}

//const isSunny = false;

//if (!isSunny) {
//  console.log("It is cloudy!");
//} else {
//  console.log("It is sunny");
//}

//const pi = 3.14;

//if (pi === "3.14") {
//  console.log("Pi");
//} else {
//  console.log("No pi");
//}

//let username = "";

//while (username === "" || username === null) {
//  username = window.prompt(`Enter username:`);
//}

//console.log(`Hello ${username}`);

//let loggedIn = false;
//let username;
//let password;

//while (!loggedIn) {
// username = window.prompt("username:");
//  password = window.prompt("password:");

//  if (username === "myUsername" && password === "myPassword") {
//loggedIn = true;
//console.log("You are logged in");
//  } else {
//    console.log("Invalid credentials. Try again!");
//  }
//}

//for (let i = 0; i <= 2; i++) {
//  console.log("Hello!");
//}

//const min = 1;
//const max = 5;

//const answear = Math.floor(Math.random() * (max - min + 1));
//let attempts = 0;
//let guess;
//let running = true;

//while (running) {
//  guess = window.prompt(`Guess a number 1between ${min} to ${max}`);
//  guess = Number(guess);

//  if (guess === answear) {
//    window.alert("Good Job!");
//    running = false;
//  }
//}

//function happyBirthday(username, age) {
//  console.log(`Happy Birthday ${username}. You are ${age} years old!`);
//}

//happyBirthday("Sergiu", 20);

//function add(x, y) {
//  return x + y;
//}

//function subtract(x, y) {
//  return x - y;
//}

//function multiply(x, y) {
//  return x * y;
//}

//function isEven(x) {
//  return x % 2 == 0;
//}

//console.log(isEven(3));

//const textBox = document.getElementById("textBox");
//const toFah = document.getElementById("toFah");
//const toCel = document.getElementById("toCel");
//const result = document.getElementById("result");
//let temp;

//function convert() {
//  if (toFah.checked) {
//    temp = Number(textBox.value);
//    temp = (temp * 9) / 5 + 32;
//   result.textContent = temp + "°F";
//  } else if (toCel.checked) {
//    temp = Number(textBox.value);
//    temp = (temp - 32) * (5 / 9);
//    result.textContent = temp.toFixed(1) + "°C";
//  } else {
//    result.textContent = "Select a unit";
//  }
//}

//let fruits = ["apple", "pear", "mango", "coconut"];

//fruits.sort().reverse();

//for (let fruit of fruits) {
//  console.log(fruit);
//}

//let numbers = [1, 2, 3, 4, 5];

//let max = Math.max(...numbers);
//let min = Math.min(...numbers);
//console.log(min);
//console.log(...numbers);

//let username = "Sergiu";
//let letters = [...username].join("-");
//console.log(...letters);

//function sum(...numbers) {
//  let result = 0;
//  for (let number of numbers) {
//    result += number;
//  }
// return result;
//}

//console.log(sum(1, 2, 3, 4, 5));

//function rollDice() {
//  const numOfDice = document.getElementById("numOfDice").value;
//  const diceResult = document.getElementById("diceResult");
//  const diceImages = document.getElementById("diceImages");
//  const values = [];
//  const images = [];

//  for (let i = 0; i < numOfDice; i++) {
//    const value = Math.floor(Math.random() * 6) + 1;
//    values.push(value);
//    images.push(`<img src="dice_images/${value}.png">`);
//  }

//  diceResult.textContent = `dice: ${values.join(`, `)}`;
//  diceImages.innerHTML = images.join(" ");
//}

//function toGeneratePassword(
//  lenghtPassword,
//  includeLowercase,
//  includeUppercase,
//  includeNumbers,
//  includeSymbols
//) {
//  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//  const numberChars = "0123456789";
//  const symbolChars = "!@#$%^&*()_+-=";

//  let allowedChars = "";
//  let password = "";

//  allowedChars += includeLowercase ? lowercaseChars : "";
//  allowedChars += includeUppercase ? uppercaseChars : "";
//  allowedChars += includeNumbers ? numberChars : "";
//  allowedChars += includeSymbols ? symbolChars : "";

//  return "";
///}

//const lenghtPassword = 12;
//const includeLowercase = true;
//const includeUppercase = true;
//const includeNumbers = true;
//const includeSymbols = true;

//const password = toGeneratePassword(
//  lenghtPassword,
//  lenghtPassword,
//  includeUppercase,
//  includeNumbers,
//  includeSymbols
//);

//console.log(`Generated password: ${password}`);

//hello(goodbye);

//function hello(callback) {
//  console.log("Hello");
//  callback();
//}

//function goodbye() {
//  console.log("goodbye");
//}
//sum(displayPage, 1, 2);

//function sum(callback, x, y) {
//  let result = x + y;
//  callback(result);
//}

//function displayConsole(result) {
//  console.log(result);
//}

//function displayPage(result) {
//  document.getElementById("myh1").textContent = result;
//}

//let numbers = [1, 2, 3, 4, 5];
//numbers.forEach(square);
//numbers.forEach(display);

//function double(element, index, array) {
//  array[index] = element * 2;
//}

//function triple(element, index, array) {
//  array[index] = element * 3;
//}

//function square(element, index, array) {
//  array[index] = Math.sqrt(element);
//}

//function display(element) {
//  console.log(element);
//}

//let fruits = ["apple", "orange", "banana", "coconut"];

//fruits.forEach(capitalize);
//fruits.forEach(display);

//function upperCase(element, index, array) {
//  array[index] = element.toUpperCase();
//}

//function lowerCase(element, index, array) {
//  array[index] = element.toLowerCase();
//}

//function capitalize(element, index, array) {
//  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
//}

//function display(element) {
//  console.log(element);
//}

//const numbers = [1, 2, 3, 4, 5];

//const cubes = numbers.map(cube);

//function cube(element) {
// return Math.pow(element, 3);
//}

//console.log(cubes);

//const students = ["SpongeBob", "Patrick", "Sandy"];
//const studentsUpper = students.map(upperCase);

//console.log(studentsUpper);
//function upperCase(element) {
// return element.toUpperCase();
//}

//const dates = ["2025-1-18", "2026-2-12", "2023-12-3"];

//const formattedDates = dates.map(formatDates);
//console.log(formattedDates);

//function formatDates(element) {
//  const parts = element.split("-");
//  return `${parts[2]}/${parts[1]}/${parts[0]}`;
//}

//let numbers = [1, 2, 3, 4, 5, 6, 7];
//let evenNumbers = numbers.filter(isEven);
//let oddNumbers = numbers.filter(isOdd);

//console.log(numbers);
//console.log(evenNumbers);
//console.log(oddNumbers);

//function isEven(element) {
//  return element % 2 === 0;
//}

//function isOdd(element) {
//  return element % 2 !== 0;
//}

//const ages = [16, 17, 18, 18, 19, 20, 60];
//const adults = ages.filter(Adult);
//const children = ages.filter(Child);
//console.log(adults);
//console.log(children);

//function Adult(element) {
//  return element >= 18;
//}

//function Child(element) {
//  return element < 18;
//}

//const prices = [5, 30, 10, 25, 15, 20];

//const total = prices.reduce(sum);
//console.log(total);

//function sum(accumulator, element) {
//  return accumulator + element;
//}

//const numbers = [1, 2, 3, 4, 5, 6];

//const cubes = numbers.map(function (element) {
//  return Math.pow(element, 3);
//});

//console.log(cubes);

//const hello = (name) => console.log(`Hello ${name}`);

//hello("Sergiu");

//const numbers = [1, 2, 3, 4, 5, 6];

//const squares = numbers.map((element) => Math.pow(element, 2));
//const cubes = numbers.map((element) => Math.pow(element, 3));
//console.log(cubes);

//const person = {
//  firstName: "SpongeBob",
//  lastName: "squarePants",
//  age: 30,
//  isEmplyed: true,
//  sayHello: function () {
//    console.log("Hello");
//  },
//};

//const person2 = {
//  firstName: "Patrick",
//  lastName: "Star",
//  age: 42,
//  isEmplyed: false,
//};
//person.sayHello();
//console.log(person.firstName);

//const person1 = {
// name: "spongebob",
// age: 12,
//  sayHello: function () {
//    console.log(`Hello, I am ${this.name}`);
//  },
//};

//person1.sayHello();

//function Car(make, model, year, color) {
//  (this.make = make),
//    (this.model = model),
//    (this.year = year),
// /   (this.color = color);
//  this.drive = function () {
//    console.log(`You drive a ${this.model}`);
//  };
//}

//const car1 = new Car("Ford", "Mustang", 2024, "Red");
//const car2 = new Car("Porsche", "Taycan", 2024, "Grey");
//car1.drive();

//class Product {
//  constructor(name, price) {
//    this.name = name;
//    this.price = price;
//  }

//  displayProduct() {
//    console.log(`Product: ${this.name} Price: ${this.price.toFixed(2)} `);
//  }

//  calculateTotal(salesTax) {
//    return this.price + this.price * salesTax;
///  }
//}

//const product1 = new Product("Shirt", 20);
///const product2 = new Product("pants", 33.3333);
//const product3 = new Product("hat", 200);
///product1.displayProduct();
//product2.displayProduct();
//product3.displayProduct();
//console.log(product3.calculateTotal(0.05));

//class mathutil {
//  static pi = 3.14159;

//  static getDiameter(radius) {
//   return radius * 2;
//  }

// static getcircumference(radius) {
//   return 2 * this.pi * radius;
//  }

//  static getarea(radius) {
///    return this.pi * radius * radius;
//  }
//}

//console.log(mathutil.pi);
//console.log(mathutil.getDiameter(10));
//console.log(mathutil.getcircumference(10));
//console.log(mathutil.getarea(10));

//class user {
//  static userCount = 0;

//  constructor(username) {
//    this.username = username;
//    user.userCount++;
//  }

//  sayhello() {
//    console.log(`Username: ${this.username}`);
//  }
//}

//const user1 = new user("aaa");
//console.log(user1.username);
//console.log(user.userCount);
//user1.sayhello();

//class Animal {
// alive = true;

// eat() {
///   console.log(`This ${this.name} is eating`);
// }
// sleep() {
///   console.log(`This ${this.name} is sleeping`);
// }
///}

///class Rabbit extends Animal {
//  name = "Rabbit";

//  run() {
//    console.log(`This ${this.name} is running`);
//  }
////}

//class Fish extends Animal {
//  name = "Fish";
//}

//class Hawk extends Animal {
name = "Hawk";
//}

//const rabbit = new Rabbit();
//const fish = new Fish();
///const hawk = new Hawk();
///rabbit.eat();
//fish.sleep();
///rabbit.run();
//console.log(rabbit.alive);

//class Animal {
//  constructor(name, age) {
//    this.name = name;
//    this.age = age;
///  }

// move(speed) {
//    console.log(`This ${this.name} moves at a speed of ${speed} kmh`);
//  }
//}

//class Rabbit extends Animal {
//  constructor(name, age, runSpeed) {
///    super(name, age);
//    this.runSpeed = runSpeed;
// }

// run() {
//  console.log(`This ${this.name} can run `);
//  super.move(this.runSpeed);
/// }
//}

//class Fish extends Animal {
// constructor(name, age, swimSpeed) {
//   super(name, age);
//   this.swimSpeed = swimSpeed;
// }

//swim() {
//  console.log(`This ${this.name} can swim `);
///   super.move(this.swimSpeed);
//  }
//}

//class Hawk extends Animal {
// constructor(name, age, flySpeed) {
///   super(name, age);
//   this.flySpeed = flySpeed;
// }
// fly() {
//  console.log(`This ${this.name} can fly `);
//  super.move(this.swimSpeed);
// }
//}

//const rabbit = new Rabbit("rabbit", 1, 25);
//console.log(rabbit.runSpeed);
//const fish = new Fish("fish", 2, 12);
//const hawk = new Hawk("hawk", 3, 15);
//rabbit.run();

//class Rectangle {
//  constructor(width, height) {
//    this.width = width;
//    this.height = height;
//  }

//  set width(newwidth) {
//    if (newwidth > 0) {
//      this._width = newwidth;
//    } else {
//      console.error("Width must be positive");
//    }
//  }

//  set height(newheight) {
//    if (newheight > 0) {
//      this._height = newheight;
//    } else {
//      console.error("Height must be positive");
///    }
//  }

//  get width() {
//    return this._width;
//  }

// get height() {
//   return this._height;
// }

// get area() {
//   return `${(this._width * this._height).toFixed(1)}cm'2`;
// }
//}

//const rectangle = new Rectangle(3, 4);
//rectangle.width = 5.54;
///rectangle.height = 6;
///console.log(rectangle.width);
//console.log(rectangle.height);
//console.log(rectangle.area);

//let a = 1;
//let b = 2;

//[a, b] = [b, a];

//console.log(a);
//console.log(b);

//const colors = ["red", "green", "blue", "black", "white"];

//[colors[0], colors[4]] = [colors[4], colors[0]];

//console.log(colors);

//const colors = ["red", "green", "blue", "black", "white"];

//const person = {
////  fullName: "Tanase Sergiu",
// age: 19,
// student: true,
// hobbies: ["gym", "reading", "informatics"],
//// address: {
//   street: "Cantemir",
///   city: "Sibiu",
//   country: "Romania",
///  },
//};

//console.log(person.address.city);

//for (const property in person.address) {
///  console.log(person.address[property]);
//}

//class person {
//  constructor(name, age, ...address) {
//   this.name = name;
//   this.address = new Address(...address);
// }
//}

//class Address {
// constructor(street, city, country) {
//  this.street = street;
///   this.city = city;
//   this.country = country;
// /// }
//}

//const person1 = new person("sergiu", 19, "Cantemir", "Sibiu", "Romania");
//console.log(person1.address.city);

//const fruits = [
// { name: "apple", color: "red", calories: 95 },
// { name: "orange", color: "orange", calories: 45 },
/// { name: "banana", color: "yellow", calories: 105 },
// { name: "coconut", color: "white", calories: 155 },
// { name: "pineapple", color: "yellow", calories: 37 },
//];
//fruits.push({ name: "grapes", color: "purple", calories: 62 });
//fruits.pop();

//fruits.splice(1, 2);
//fruits.forEach((fruit) => console.log(fruit.name));

//const fruitNames = fruits.map((fruit) => console.log(fruit.name));
//const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

//const maxfruit = fruits.reduce((max, fruit) =>
// fruit.calories > max.calories ? fruit : max
//);

//console.log(maxfruit);

//let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

//numbers.sort((a, b) => b - a);

//console.log(numbers);

//const people = [
//  { name: "alex", age: 11, gpa: 2 },
//  { name: "andrei", age: 13, gpa: 3 },
// { name: "sergiu", age: 19, gpa: 5 },
// { name: "ionut", age: 14, gpa: 4 },
///];

//people.sort((a, b) => a.name.localeCompare(b.name));
//
//console.log(people);

//const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//shuffle(cards);
//console.log(cards);
//function shuffle(array) {
// for (let i = array.length - 1; i > 0; i--) {
//   const random = Math.floor(Math.random() * (i + 1));
//   [array[i], array[random]] = [array[random], array[i]];
/// }
//}

//const date = new Date();

//console.log(date);

//const data1 = new Date("2025-07-21");
//const data2 = new Date("2024-12-23");

//if (data1 > data2) {
// // console.log("data 1 bigger");
//} else {
//  console.log("as");
//}

//function outer() {
/// let message = "hello";
/// function inner() {
//  console.log(message);
///}
// inner();
//}

//outer();
//function createCounter() {
//  //let count = 0;

// function increment() {
//   count++;
//   console.log(`Count increased to ${count}`);
// }

// function getCount() {
//   return count;
/// }
// return { increment, getCount };
//}

//const counter = createCounter();
//counter.increment();
//counter.increment();
//counter.increment();

//console.log(counter.getCount());
//function createGame() {
// let score = 0;

// function increaseScore(points) {
//  score += points;
//  console.log(`+${points} pts`);
//}

// function decreaseScore(points) {
//   score -= points;
//   console.log(`-${points}pts`);
// }

// function getScore() {
//   return score;
//  }
//  return { increaseScore, decreaseScore, getScore };
//}

//const score = createGame();

//score.increaseScore(2);
//score.increaseScore(5);
//score.decreaseScore(9);
//console.log(score.getScore());

//const timeoutID = setTimeout(function () {
//  window.alert("Hello");
//}, 3000);

//clearTimeout(timeoutID);
//let timeoutId;

//function startTimer() {
// timeoutId = setTimeout(function () {
//   window.alert("Hello");
// }, 3000);
// console.log("Start");
//}

//function clearTimer() {
// clearTimeout(timeoutId);
//  console.log("Stop");
//}

//function updateClock() {
//  const now = new Date();
///  const hour = now.getHours().toString().padStart(2, 0);
/// const minutes = now.getMinutes().toString().padStart(2, 0);
// const seconds = now.getSeconds().toString().padStart(2, 0);
// const timeString = `${hour}:${minutes}:${seconds}`;
// document.getElementById("clock").textContent = timeString;
//}

//updateClock();
//setInterval(updateClock, 1000);

//const display = document.getElementById("display");
//let timer = null;
//let startTime = 0;
//let elapsedTime = 0;
//let isRunning = false;

//function start() {
/// if (!isRunning) {
//  startTime = Date.now() - elapsedTime;
//  timer = setInterval(update, 10);
//  isRunning = true;
// }
//}

//function stop() {
//  if (isRunning) {
//   clearInterval(timer);
//   elapsedTime = Date.now() - startTime;
//   isRunning = false;
// }
//}

//function reset() {
//  clearInterval(timer);
//  startTime = 0;
// elapsedTime = 0;
/// isRunning = false;
/// display.textContent = "00:00:00:00";
//}

//function update() {
//  const currentTime = Date.now();
//  elapsedTime = currentTime - startTime;

// let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
// let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
// let seconds = Math.floor((elapsedTime / 1000) % 60);
// let miliseconds = Math.floor((elapsedTime % 1000) / 10);

//hours = String(hours).padStart(2, 0);
// minutes = String(minutes).padStart(2, 0);
/// seconds = String(seconds).padStart(2, 0);
// miliseconds = String(miliseconds).padStart(2, 0);

// display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
//}

//import { pi, getCircumference, getArea, getVolume } from "./mathUtil.js";

//console.log(pi);

//const circumference = getCircumference(10);
///const area = getArea(10);
//const volume = getVolume(10);

//console.log(circumference.toFixed(2));
//console.log(area.toFixed(2));
//console.log(volume.toFixed(2));

//const display = document.getElementById("display");

//function appendToDisplay(input) {
//  display.value += input;
//}

//function clearDisplay() {
//  display.value = "";
//}

//function calculate() {
//  try {
///    display.value = eval(display.value);
// } catch {
//   display.value = "Error";
// }
//}

//const myHeading = document.getElementById("myh1");
//myHeading.style.backgroundColor = "yellow";
//myHeading.style.textAlign = "center";

//const fruits = document.getElementsByClassName("fruits");
//console.log(fruits);

//fruits[0].style.backgroundColor = "yellow";

//for (let fruit of fruits) {
//  fruit.style.backgroundColor = "yellow";
//}

//Array.from(fruits).forEach((fruit) => {
//  fruit.style.backfroundColor = "yellow";
//});

//const h4Elements = document.getElementsByTagName("h4");
//const liElements = document.getElementsByTagName("li");

//h4Elements[0].style.backgroundColor = "yellow";

//for (let h4Element of h4Elements) {
//  h4Element.style.backgroundColor = "yellow";
//}

//for (let liElement of liElements) {
//  liElement.style.backgroundColor = "green";
//}

//const element = document.querySelector(".fruits");
//element.style.backgroundColor = "yellow";

//const fruits = document.querySelectorAll(".fruits");

//const element = document.getElementById("fruits");
//const firstChild = element.firstElementChild;

//firstChild.style.backgroundColor = "yellow";

//const newH1 = document.createElement("h1");
//newH1.id = "myH1";
//newH1.style.color = "tomato";
//newH1.style.textAlign = "center";
//newH1.textContent = "I like pizza";
//document.getElementById("box1").prepend(newH1);
//document.body.prepend(newH1);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);

//const myBox = document.getElementById("myBox");
//const muButton = document.getElementById("myButton");
////function changeColor(event) {
//  event.target.style.backgroundColor = "tomato";
// event.target.textContent = "Ouch";
//}

//myButton.addEventListener("click", function (event) {
///  event.target.style.backgroundColor = "tomato";
// event.target.textContent = "Ouch";
//});

//myButton.addEventListener("mouseover", (event) => {
//  event.target.style.backgroundColor = "yellow";
// event.target.textContent = "Dont do it";
//});

//myButton.addEventListener("mouseout", (event) => {
//  event.target.style.backgroundColor = "lightgreen";
//  event.target.textContent = "Click me 😃";
//});

//const myBox = document.getElementById("myBox");

//document.addEventListener("keydown", (event) => {
// myBox.textContent = "😊";
// myBox.style.backgroundColor = "lightblue";
//});

//document.addEventListener("keyup", (event) => {
// myBox.textContent = "😃";
// myBox.style.backgroundColor = "lightblue";
//});

//const moveAmount = 100;
//let x = 0;
//let y = 0;

//document.addEventListener("keydown", (event) => {
//if (event.key.startsWith("Arrow")) {
// event.preventDefault();
// switch (event.key) {
//   case "ArrowUp":
//     y -= moveAmount;
//     break;
//  case "ArrowDown":
///    y += moveAmount;
///    break;
//  case "ArrowLeft":
//    x -= moveAmount;
//    break;
//  case "ArrowRight":
//    x += moveAmount;
//    break;
//}

// myBox.style.top = `${y}px`;
// myBox.style.left = `${x}px`;
//}
//});

//const myButton = document.getElementById("myButton");
//const myImg = document.getElementById("myImg");

//myButton.addEventListener("click", (event) => {
//  if (myImg.style.display === "none") {
//    myImg.style.display = "block";
//   myButton.textContent = "Hide";
// } else {
//   myImg.style.display = "none";
//   myButton.textContent = "Show";
// }
//});

//buttons.forEach((button) => {
//button.style.backgroundColor = "green";
// button.textContent += "❤️";
//});

//buttons.forEach((button) => {
// button.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "tomato";
/// });
//});

//buttons.forEach((button) => {
// button.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "hsl(205, 100%, 30%)";
///  });
//});

//buttons.forEach((button) => {
//  button.addEventListener("mouseout", (event) => {
//    event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//  });
//});

//const newButton = document.createElement("button");

//newButton.textContent = "Button 5";
//newButton.classList = "myButtons";
//document.body.appendChild(newButton);
//buttons.querySelectorAll(".myButtons");
//let buttons = document.querySelectorAll(".myButtons");
//buttons.forEach((button) => {
// button.addEventListener("click", (event) => {
//   event.target.remove();
//   buttons = document.querySelectorAll(".myButtons");
// });
//});

//const myButton = document.getElementById("myButton");
///const myH1 = document.getElementById("myH1");
//myButton.classList.add("enabled");
//myButton.classList.remove("enabled");

//myButton.addEventListener("mouseover", (event) => {
// myButton.classList.toggle("hover");
//});

//myButton.addEventListener("mouseout", (event) => {
// myButton.classList.toggle("hover");
//});

//myButton.classList.add("enabled");
//myH1.classList.add("enabled");

///myH1.addEventListener("click", (event) => {
// if (event.target.classList.contains("disabled")) {
//   event.target.textContent += "😍";
////  } else {
//   event.target.classList.replace("enabled", "disabled");
///  }
//});

//myButton.addEventListener("click", (event) => {
//  if (event.target.classList.contains("disabled")) {
//    event.target.textContent += "😍";
///  } else {
///    event.target.classList.replace("enabled", "disabled");
//  }
//});

//let buttons = document.querySelectorAll(".myButtons");

//buttons.forEach((button) => {
///  button.classList.add("enabled");
//});

//buttons.forEach((button) => {
//  button.addEventListener("mouseover", (event) => {
//    event.target.classList.toggle("hover");
///  });
//});

//buttons.forEach((button) => {
//  button.addEventListener("mouseout", (event) => {
//    event.target.classList.toggle("hover");
//  });
//});

//buttons.forEach((button) => {
//  button.addEventListener("click", (event) => {
//     event.target.textContent += "😢";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });
//});

//const choices = ["rock", "paper", "scissors"];
//const playerDisplay = document.getElementById("playerDisplay");
//const computerDisplay = document.getElementById("computerDisplay");
//const resultDisplay = document.getElementById("resultDisplay");
//const computerScoreDisplay = document.getElementById("computerScoreDisplay");
//c//onst playerScoreDisplay = document.getElementById("playerScoreDisplay");
//let playerScore = 0;
//let computerScore = 0;

//f/unction playGame(playerChoice) {
//  const computerChoice = choices[Math.floor(Math.random() * 3)];
// let result = "";
//// if (playerChoice === computerChoice) {
//   result = "IT'S A TIE";
// } else {
//   switch (playerChoice) {
///  case "rock":
//     result = computerChoice === "scissors" ? "YOU WIN" : "YOU LOSE";
///     break;
//    case "paper":
//////      result = computerChoice === "rock" ? "YOU WIN" : "YOU LOSE";
//      break;
//    case "scissors":
//      result = computerChoice === "paper" ? "YOU WIN" : "YOU LOSE";
//       break;
///  }
//}

// playerDisplay.textContent = `PLAYER: ${playerChoice}`;
// computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
// resultDisplay.textContent = result;

//resultDisplay.classList.remove("greenText", "redText");

// switch (result) {
//   case "YOU WIN":
//     resultDisplay.classList.add("greenText");
//     playerScore++;
//     playerScoreDisplay.textContent = playerScore;
//     break;
//   case "YOU LOSE":
//     resultDisplay.classList.add("redText");
//     computerScore++;
//    computerScoreDisplay.textContent = computerScore;
//    break;
// }
//}

//c//onst slides = document.querySelectorAll(".slides img");
//let slideIndex = 0;
//let intervalId = null;

//document.addEventListener("DOMContentLoaded", initializeSlider);

//function initializeSlider() {
//  if (slides.length > 0) {
//    slides[slideIndex].classList.add("displaySlide");
//   intervalId = setInterval(nextSlide, 5000);
// }
//}

//function showSlide(index) {
// if (index >= slides.length) {
//   slideIndex = 0;
/// } else if (index < 0) {
//   slideIndex = slides.length - 1;
// }
///
// slides.forEach((slide) => {
//   slide.classList.remove("displaySlide");
//  });
// slides[slideIndex].classList.add("displaySlide");
//}

//function prevSlide() {
// clearInterval(intervalId);
// slideIndex--;
// showSlide(slideIndex);
//}

////function nextSlide() {
/// slideIndex++;
// showSlide(slideIndex);
//}

//function task1(callback) {
// setTimeout(() => {
//   console.log("Task 1 complete");
//   callback();
// }, 2000);
//}
//function task2(callback) {
// setTimeout(() => {
//   console.log("Task 2 complete");
//   callback();
// }, 1000);
//}
//function task3(callback) {
// setTimeout(() => {
///    console.log("Task 3 complete");
//   callback();
///  }, 3000);
//}
//function task4(callback) {
// setTimeout(() => {
///  console.log("Task 4 complete");
//    callback();
// }, 1500);
//}

//task1(() => {
// task2(() => {
///   task3(() => {
//     task4(() => {
///       console.log("All tasks complete");
//     });
///   });
//  });
//});

//const names = ["Sergiu", "Ana", "Ionut", "Rares"];

//const jsonString = JSON.stringify(person);

//const person = {
// name: "Sergiu",
// age: 19,
// isEmplyed: true,
// hobbies: ["reading", "gym", "box", "info"],
//};

//const people = [
// {
//   name: "Sergiu",
///    age: 19,
///   isEmplyed: true,
//  },
// {
//   name: "Ana",
/////////   age: 20,
//   isEmplyed: false,
// },
// {
//   name: "Ionut",
//    age: 21,
//   isEmplyed: true,
// },
/// {
//   name: "Rares",
///   age: 20,
//    isEmplyed: true,
/// },
//];

//fetch("person.json")
// .then((response) => response.json())
//.then((value) => console.log(value));

//fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then((response) => {
//  if (!response.ok) {
//    throw new Error("Could not fetch error");
//  }
// /  return response.json();
// })
// .then((data) => console.log(data.name))
// .catch((error) => console.error(error));

//async function fetchData() {
// try {
//   const pokemonName = document
//     .getElementById("pokemonName")
//    .value.toLowerCase();
//  const response = await fetch(
//   `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
// );
// if (!response.ok) {
//    throw new Error("Could not fetch resource");
///  }

//  const data = await response.json();
//  const pokemonSprite = data.sprites.front_default;
//  const imgElement = document.getElementById("pokemonSprite");

///  imgElement.src = pokemonSprite;
//   imgElement.style.display = "block";
// } catch (error) {
//   console.error(error);
// }
//}

//--------------------------------------Weather App-------------------------------------------

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "7a37b407af443d3142a61491ee557da7";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = ``;
}

function displayWeatherInfo(data) {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
