import {uniqueArray} from './ans4';
import {allCombinations} from './ans5';
import {Pug} from './ans6';
import {areaOfCircle,areaOfSquare,areaOfCylinder} from './ans8';
import {SinglyLinkedList} from './ans11';
import {Stack} from './ans13'
import {SetClass,customMap,customSet} from './ans12';

//Few exercises in-between the course shall be done and submitted. Also, a compiled set of exercises is published with ES6 - Part 2, to be submitted.


/*
##Coding Exercise: Weighing Buddy (Functions and Objects)

Sherry, the local veterinarian wants to know the weight of Buddy, the dog. Help her determine Buddy's weight by fixing this weigh function!

Directions: Fix the weigh function so that it accepts one parameter returns the parameter passed to it.
*/
// Solution 
var dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    weight: 60
  }
  
  function weigh(x) {
    return x;
  }
  
  weigh(dog.weight);
  console.log(weigh(dog.weight));
/*
  ##Coding Exercise: Show Me the Evens - Show me the Odds

Diana is learning to count and she just learned the difference between odds and even numbers. She wants to have some fun, so she picks a random number. If that number is even, she decides to count all the even numbers up to it. If not, she decides to count all the odd numbers up to that number.

Directions Fix this count function to return all even numbers starting from 0 up to (but not including) the input. Likewise, it the input is odd, return all odd numbers starting from 1 (but not including) the input.
*/

function count(x) {
    var numbers = [];
    if (x % 2 == 0) {
      for (var i=0; i<x; i += 2) {
        numbers.push(i);
      }
    } else {
      for (var i=1; i<x; i += 2) {
        numbers.push(i);
      }
    }
    return numbers;
}

/*
##Coding Exercise: Does this Word Contain this Letter? (Sets)

Let's implement our own version of String.includes()!

Directions: Make two changes to the given contains function. Convert the letters array split on the argued words to a set of unique characters. Then return (a true/false value) based whether or not the set has the argued letter.
 */
// solution
const contains = (word, letter) => {
    let letters = word.split("");
    let letterSet = new Set(letters);
    return letterSet.has(letter);
  };
  
  let true_check = contains("west", "e");
  let false_check = contains("north", "e");

 /**
  ##Coding Exercise: Prototype a Vehicle

Let's practice prototypes in JavaScript by working with prototypes. In this example, we already have a Vehicle Prototype that allows us to create Vehicles with a "make" and "year". However, we want to add more functionality to this prototype. Note that there's already an instance of this Vehicle prototype:

let s = new Vehicle("Tesla", 2017); s.color = "black";

Directions: Make two changes:

a) Add a 'color' field to the prototype by either using the 'prototype' keyword or adding another parameter to the function constructor.

b) Add a 'bio' method to the prototype by either using the 'prototype' keyword or adding another parameter to the function constructor. Note a method added with the 'prototype' keyword will have to use a normal function declaration since arrow functions ignore the 'this' object.

For our variable, 's', the bio method should return: "A black Tesla made in 2017."
  */ 
// solution
function Vehicle(make, year) {
    this.make = make;
    this.year = year;
  }
  
  Vehicle.prototype.color;
  Vehicle.prototype.bio = function() {
    return `A ${this.color} ${this.make} made in ${this.year}.`;
  };
  
  let s = new Vehicle("Tesla", 2017);
  s.color = "black";

/**
 ##Coding Exercise: How Many Times Does this Letter Appear? (Maps)

Let's count some letters in Mary Poppins's favorite word: supercalifragilisticexpialidocious.

Directions: Address the three todos to fix the countLetter function. First, create the 'letters' map. Secondly, add a letter to the map if it doesn't exist in the map yet. Finally, update any encountered letters if they already exist in the map.

Note: Don't delete the last two lines, as the exercise will test if your method returns the correct count for 'a', and the correct count for 'x'.
 */
//solution


let string = 'supercalifragilisticexpialidocious';

const countLetter = (word, orig_letter) => {
  let letters = new Map();
  for (let i=0; i<word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      letters.set(letter, 1);
    } else {
      letters.set(letter, letters.get(letter) + 1);
    }
  }
  return letters.get(orig_letter);
};

let a_count = countLetter(string, 'a');
let x_count = countLetter(string, 'x');

// Learning dashboard solutions

// ans 1

let givenArray = [3,62,234,7,23,74,23,76,92];
let arrayGreatorThanSeventy = givenArray.filter((n) => n>70 );
console.log(arrayGreatorThanSeventy);

// ans 2(a)

var liArray = Array.from(document.getElementsByTagName('li'));
console.log(liArray);

// 2(b)
var onlyFlexBox = liArray.filter((li) => {
    if(li.innerHTML.includes('Flexbox')) {
        return li;
    }
});
console.log(onlyFlexBox);


// ans 2(c) 
var timeStrings = onlyFlexBox.map((li) => li.dataset.time);
console.log(timeStrings);


// ans 2(d)
var arrayOfSeconds = timeStrings.map((li) => li.split(":").pop(-1));
console.log(arrayOfSeconds);


// ans 2(e)

//filter using reduce
const totalUsingFilter = arrayOfSeconds
    .filter(arr => parseInt(arr) > 30)
    .reduce((total,arr) => {
        return total+parseInt(arr);
    },0);
console.log(`total using filter ${totalUsingFilter}`);

//filter without using reduce
var total = 0;
arrayOfSeconds
    .filter(arr => {
        if(parseInt(arr) > 30) {
            total+=parseInt(arr);
        }
    });
console.log(total);
 

// total with map
var totalMap = 0;
arrayOfSeconds
    .map(arr=> {
        if(parseInt(arr) >30) {
            totalMap += parseInt(arr);
        }
    });
console.log(totalMap);



// ans 3
const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
};
var songDiv = document.createElement('div');
songDiv.innerHTML = `<div class="song"><p>${song.name} — ${song.artist}(Featuring ${song.featuring})</p></div>`;
document.body.appendChild(songDiv);

// ans 4
const user = {
    firstName: "Sahil",
    lastName: "Dua",
    Address: {
    Line1: "address line 1",
    Line2: "address line 2",
    State: "Delhi",
    Pin: 110085,
    Country: "India",
    City: "New Delhi",
    },
    phoneNo: 9999999999
}


// getting values of each key
var a = user.Address;
console.log(Object.values(a));

// getting only keys
var arrKeys = [...Object.keys(user.Address)];
console.log(arrKeys);

// another way of getting keys 
var [a,b,c,d,e,f] = [...Object.keys(user.Address)];
console.log(a,b,c,d,e,f);


// ans 4 -> Filter unique array members using Set.
console.log(uniqueArray([1,1,2,3,4,4,4]));

// ans 5 ->  Find the possible combinations of a string and store them in a MAP? 
var strings = allCombinations("abc");
var map = new Map();
for (var i=0;i<strings.length;i++) {
    map.set(i,strings[i]);
}
for (let [key, value] of map.entries()) {
      console.log(`${key} => ${value}`);
}


// ans 6 -> . Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.
var pug = new Pug("doggie","pug",2);
console.log(pug);
Pug.show();

// ans 7 -> Write a program to implement a class having static functions
class Maths {
    static add (a,b) {
        return a+b;
    }
    static multiplty(x,y) {
        return x*y;
    }
}
console.log(Maths.add(2,5),Maths.multiplty(2,4));

// ans 8 -> Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.
console.log(areaOfCircle(2.5));
console.log(areaOfSquare());
console.log(areaOfCylinder(20,3.5));
  

// ans 9
console.log(uniqueArray([1,1,2,3,4,4,4]));

// ans 10 
var nestedArray = [[1,2],[3,4,5,6],10];

const flattenArray = (arr) => 
    arr.reduce((totalArray, presentArray) => 
    totalArray.concat(Array.isArray(presentArray) ? flattenArray(presentArray) : presentArray), [])
        
console.log(flattenArray(nestedArray));

// ans 11 -> . Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)
var singleList = new SinglyLinkedList();
singleList.addFirst(20);
singleList.addLast(30);
singleList.addFirst(10);
singleList.printList();
console.log(singleList.getFirst());
console.log(singleList.getLast());
console.log(singleList.getLength());

// ans 12
var myMap = new customMap();
myMap.add("one",1);
myMap.add("two",2);
myMap.remove("two");
console.log(myMap.get("one"));
console.log(myMap);

var mySet = new customSet();
mySet.add(2);
mySet.add(4);
mySet.add(4);
mySet.remove(2);
console.log(mySet.contains(4));
console.log(mySet);


// ans 13 -> stack using linked list
var stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.top());
stack.printList();
stack.pop();
console.log(stack.top());
stack.printList();





  
