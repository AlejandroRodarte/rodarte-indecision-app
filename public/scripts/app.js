'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {

    // the 'arguments' object provides all the arguments injected when a function is called
    // this object is no longer accessible on arrow functions
    // console.log(arguments);

    return a + b;
};

console.log(add(2, 3));

// `this` keyword - no longer bound with arrow functions

// when we declare an ES5 function inside an object, the `this` keyword is bound to that object
// an arrow function will NOT have bound the object `this` keyword
var user = {
    name: 'Alejandro',
    cities: ['Juarez', 'Chihuahua', 'Tijuana'],

    // this is a regular ES5 function; `this` keyword is bound to the object properties, so we can
    // access this.name or this.cities inside this functions (this is a case where arrow functions are not recommended)

    // making it an arrow function would attempt to get the `this` value from the parent scope, which in this case would be
    // the Window object
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // the arrow function declared in the map method does not bound a `this` keyword, so we can STILL access this.name;
        // if the function passed in is a regular ES5 function, a `this` would be attempted to be bound, and being anonymous
        // would make `this` to be undefined
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

// challenge area

var multiplier = {
    numbers: [7, 2, 9],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
