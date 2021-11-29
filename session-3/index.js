// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

//Task 1 

let a = 5;
const b = 10;
let c = a + b;

console.log(c);

a = 20;
c = a + b;
console.log(c)

//Task 2
function sayHey() {
    console.log("Hey!");
}

function conversation() {
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}

conversation();

//Task 3

function conversation(name,topic) {
    sayHey();
    console.log("Do you like" + topic + "?");
}

conversation("Erika", "pizza");

conversation("John", "cake");

function addTwoNumbers(x,y) {
    const answer = x + y;
    return"The answer is: " + answer;
}
 console.log(addTwoNumbers (1,1)); 



 function futureAge(name,age) {
    const ageInFiveYears = age + 5;
    return "Hi " + name+"! You will be " + ageInFiveYears + " years old in 5 years";
 }

 // Two  ways of excuting code
 var Nads = futureAge("Nadra", 22);
 console.log(Nads);

 console.log(futureAge("Nadra", 22));


 