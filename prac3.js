let m = 29;
if(true) {
  let m = 30;
  console.log(m); 
}
console.log(m); 
const pi = 3.14;
console.log(pi);

var mul = (a, b) => a * b;
console.log(mul(10, 20)); 

const spread1 = [29,30];
const spread2 = [...spread1, 31,32];
console.log(spread2); 

const array = [10,20,30,40,50];
for (const i of array) {
  console.log(i);
}

var map = new Map();
map.set("name", "Mahee");
map.set("age", "19");
console.log(map.get("name"));
console.log(map.get("age"));

var set = new Set();
set.add(29);
set.add(30);
set.add(31); 
console.log(set);

class per_info {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intro() {
    console.log(`Hey, I am ${this.name} and my age is ${this.age} years.`);
  }
}

var m2 = new per_info("Mahee", 19);
m2.intro(); 

function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [10, 20, 30,40];
      if (data.length > 0) {
        resolve(data);
      } else {
        reject("Data is not available");
      }
    }, 6000);
  });
}

fetch()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


var symbol = Symbol("greet");
var object = {
  [symbol]: "Good morning!",
};
console.log(object[symbol]); 

function person(name = "Mahee") {
  console.log(`Hello, ${name}!`);
}
person(); 
person("Prutha"); 

function add(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(add(10, 20, 30, 40)); 