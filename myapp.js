console.log("Hello World");

function makeCoffee(sugar, milk) {
  var instructions = "Boil water,";
  instructions += " pour int cup,";
  instructions += " Add coffee granules,";
  instructions += " add " + sugar + " spoons of sugar,";
  instructions += " add " + milk + "% milk";

  return instructions;
}
console.log(makeCoffee(2, 20));

// objects and arrays

// object
var car = {
  color: "red",
  speed: 200,
  drive: function () {
    return "drive";
  },
};

// array
var shoppinglist = ["Apple", "Orange", "Pear"];

// Embedding objects and Arrays

var car = {
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    pistons: [{ maker: "BMW" }, { maker: "BMW2" }],
  },
  move: function () {
    return "drive";
  },
};

var drawer = [
  { drawer1: ["pencils", "pens", "rubber", "books"] },
  // function open() {
  //   var drive = "Opening drawer 1 :)";
  //   return "drive";
  // },
  "hello",
  "array",
];

// Member Acces

console.log(car.make);

// computered membered Access

console.log(drawer[0].drawer1[0]);

// var array = [
//   "ruler",
//   "phone",
//   "laptop",
//   "motor",
// ];

// ARRAY MODIFICATIONS
// array.shift(); -> removes [0]
// array.pop(); -> removes last element in the array
// array.unshift(); -> adds elemnts at [0]
// array.push(); -> adds elements at array end
// array.splice(); -> adds or deletes or replaces inbetween the array

function name() {
  var fullname = "Robert Chege";

  function concat(name) {
    return "MR." + name;
  }

  return concat(fullname);
}

var engine = {
  make: "Ford",
  headGasket: {
    maker: "Golf",
    pots: ["piston1", "piston2"],
  },
};

function runExpression() {
  var a = 10;
  var engine = "New engine";

  function add() {
    console.log(a, engine);

    (test = "new String"), (test2 = "new String 2 "), (test3 = " new String 3");
  }

  add();
}

//  this

var object = {
  prop: this,
  embed: {
    embed: true,
    method: function () {
      return this;
    },
  },
};

var array = [
  this,
  function () {
    return this;
  },
];

function global() {
  return this;
}

global.call(object);

// constructors

function Apple(x, y, color, score) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = score;
}

// prototypes
Apple.prototype = {
  eat: function () {
    return "eat the apple ";
  },
  throw: function () {
    return " throw the apple";
  },
};

var apple1 = new Apple(10, 20, "red", 200);
var apple2 = new Apple(10, 15, "orange", 78);
var apple3 = new Apple(20, 200, "pink", 30);

// conditions

var carsLeft = 0,
  carsRight = 0;
GreenMan = "no";

if(GreenMan === "yes") 
{
  console.log('cross the road');
} else if (carsLeft === 0 && carsRight === 0)
{
  console.log('All clear! Cross the road');
} else
{
  console.log("Stay where you are");
}

// for loop

var names = ["Kim", "Kevin", "Mum"];

// for(var i = 0; i < names.length; i++){
//   console.log(names[i]);
// }

// for( var i = names.length - 1; i >= 0; i--){
//   console.log(names[i]);
// }

// for in loop

for(var i in names){
  console.log(names[i]);
}

// let respects scope
// var does not respect scope except in functions
// contant cannot accept a diffent assignment and respects scope too

// Changing DOM elements
var pHello = document.getElementById('hello');

pHello.innerText = "new world";

pHello.innerHTML += " order <span> hello world</span>";

pHello.outerHTML = "<h2 id='hello'>new world order <span> hello world</span></h2>";

var spanH1 = document.querySelectorAll('h1 span')[0];

spanH1.innerHTML = "new text here!!";

// styling in Javascript

var el = document.getElementById('style');

// el.style.background = "blue";
// el.style.color = "white";
// el.style.width = "200px";

// el.style.cssText = "background: blue; color: white; width: 200px ";

getComputedStyle(el);

// Event Handlers

var select = document.getElementsByName('cars')[0];

select.onclick = function( event ){
  console.log(event);
};

// select.addEventListener('click', funtion( evt ){

//   console.log( 'clicked by add event listener' );

// })

function ClickCallback(event){

  console.log('clicked by add event listener');

}

select.addEventListener('click', ClickCallback);

select.removeEventListener('click', ClickCallback);

//  Create and append child and InsertBefore methods

var element = document.createElement('div');

element.style.cssText = "width:200px; height:20px; background:blue;";

element.onclick = function(){ alert('hello'); };

// document.body.appendChild(element);

var target = document.getElementById('yellow');

document.body.insertBefore(element, target); 

// Final Project

let elements = document.getElementsByName('cssProperty');

let div = document.getElementById('modify');

function set()
{
  for(let index = 0; index < elements.length; index++){

    let cssProperty = elements[index].getAttribute('id') ;

    let cssValue = elements[index].value ;

   div.style[cssProperty] = cssValue;

  }
}

document.getElementById('set').addEventListener('click', set);
