alert("Welcome to javascript")


let greet = "Hello, user!";
alert(greet)



let userAge = 18;
let futureAge = userAge + 5;
alert('Your Age will be after 5 Years' + " " + futureAge)



// Valid Variables Names

// var userName
// var user_Name
// var $userName

// Invalid Variables Names

// var 1userName        Number Se Start Nahi kar Sakte
// var user-Name        Dash Not Allowed
// var var              Javascript Keaword Use Nahi Karskte 



let a = 8;
let b = 2;

alert("Addition:" + " " + (8 + 2))
alert("Subtraction:" + " " + (8 - 2))
alert("Multiplication:" + " " + (8 * 2))
alert("Division:" + " " + (8 / 2))
alert("Modulas:" + " " + (8 % 2))



let num = 10;

num++;
alert("add" + " " + num)

let $num = 10;

--num;
alert("Substract" + " " + num)


var result1 = (4 + 3) * 3;
console.log(result1);

var result2 = 3 + (3 * 5)
console.log(result2)



var userName = "Alex";
var greeting = "Hello," + userName + "!";
alert(greeting)



var userName = prompt("Enter Your Name")
alert("Hello" + " " + userName + "!")



let password1 = prompt("Enter Password")

if(password === "letmain"){
    alert("Access Granted")
}



alert(6 > 3)
alert(8 < 6)
alert(5 === 5)
alert(10 !== 10)



var guess = prompt("Guess A Number Between 1 to 20")
var secretNumber = 9;

if(guess < secretNumber) {
    alert("Too Low")
}else if (guess > secretNumber) {
    alert("Too High")
}else {
    alert("Correct")
}


var age =  prompt("Enter Your Age");
var hasId = true;

if(age >= 18 && hasId) {
    alert("You May Enter")
}


var userName = prompt("Enter User-Name")
var password = prompt("Enter Password")

if(userName === "admin") {
    if(password === "1234"){
        alert("Login Successfull")
    }else {
        alert("Incorrect User-Name")
    }
}else {
    alert("Incorrect Password")
}


let fruits = ["Apple","banana","Mango","Orange","Grapes"];
console.log(fruits);
alert([fruits[2]]);

fruits.push("kiwi");
fruits.shift();
alert(fruits);

fruits.splice(1, 1, "Peach", "Plum")
console.log(fruits);

for(let i = 0; i < fruits.length; i++) {
    alert(fruits[i])
}

let searchFruits = prompt("Enter a Fruit Name");
found = false;

for(let i = 0; fruits.length; i++) {
    if(fruits[i] === searchFruits) {
        found = true;
        break;
    }
}
if(found) {
    console.log('Found');
}else {
    console.log('Not-Found');
}