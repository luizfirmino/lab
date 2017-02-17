/* 
1.	Convert the following identifiers to Camel Case notation:

var someMonth;
function theMonth (){} 		  // function to return current month
const currentMonth 		     // a constant
var summerMonths; 		// an array of summer months
function myLibrary (){}	   // a function 

/*
2.	Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression. */

var numericExp = 22.4;
var stringExp = "LuizF";
var boolExp = true;
var nullExp = null;

/*
3.	Give me two examples of complex/variable expressions. 
*/
var complexVariableExp1 = (3/100)*100;
var complexVariableExp2 = complexVariableExp1 + "%";


/*
4.	Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation to accomplish this task. 
*/
var strFirstName, strLastName, strAddress, strCity, strState, strZipCode, intYourAge, strReferralSource, isMayWeContactYou

/*
5.	Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.
*/
var strFirstName = "Luiz";
var strLastName = "Filho";
var strAddress = "1790 DIAMOND ST", strCity = "SAN DIEGO", strState = "CA", strZipCode = "92109";
var intYourAge = 34;
var strReferralSource = "bla bla bla bla bla bla"
var isMayWeContactYou = true;


/*
6.	Create 3 variables. For the first variable, add a number and a string and use console.log to display the coerced result. For the second variable, add a Boolean and a string and display the coerced result. For the third variable, add a number and a Boolean and display the coerced result. 
*/

window.console.log("----------------- STEP 6 -------------------");

var var1 = 34 + " :age";
window.console.log(var1);

var var2 = true + " :can contact you";
window.console.log(var2);

var var3 = 34 + true;
window.console.log(var3);

window.console.log("--------------- END-STEP 6 -----------------\n\n\n");

/*
7.	Demonstrate your knowledge of hoisting. Write a program that returns undefined within the console window because of hoisting.
*/
window.console.log("----------------- STEP 7 -------------------");
x = 10;
function egHoisting (){
    window.console.log(x);
    var x;
}
egHoisting();
window.console.log("--------------- END-STEP 7 -----------------\n\n\n");


/*
8.	Is the following string literal valid? If not, how would you fix it?

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
console.log(someString);
*/
window.console.log("----------------- STEP 8 -------------------");

var someString = "'Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\"'";
console.log(someString);

window.console.log("--------------- END-STEP 8 -----------------\n\n\n");


/*
9.	Create a variable that produces a null value in the console window. Also, create a variable that produces an undefined value in the console window.
*/

window.console.log("----------------- STEP 9 -------------------");
var exNull = null, exUndefined;
window.console.log(exNull);
window.console.log(exUndefined);
window.console.log("--------------- END-STEP 9 -----------------\n\n\n");


/*
10.	Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
*/

window.console.log("----------------- STEP 10 -------------------");
window.console.log(typeof "FEWD 2");
window.console.log(typeof 2.0);
window.console.log(typeof (1==2));
window.console.log(typeof window);
window.console.log(typeof variableUndefined); /* :) */
window.console.log("--------------- END-STEP 10 -----------------\n\n\n");


/*
11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 

Hello Zak Ruvalcaba, welcome to the JavaScript class!

Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
*/

window.alert("Hello " + "Luiz Filho" + ", welcome to the JavaScript class!");


/*
12.	Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.
*/

var strName = "Luiz Filho";
window.alert("Hello " + strName + ", welcome to the JavaScript class!");


/*
13.	Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
*/

var strCourse = "Javascript";
window.alert("Hello " + strName + ", welcome to the " + strCourse + " class!");

/*
14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

Hello Zak Ruvalcaba.
Welcome to the JavaScript class!
*/

window.alert("Hello " + strName + ".\nWelcome to the " + strCourse + " class!");


/*
15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 
*/

strName = window.prompt("What is your name?");

/*
16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
*/

strCourse = window.prompt("Which class you are taking?");
window.alert("Hello " + strName + ".\nWelcome to the " + strCourse + " class!");

/*
17.	Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window. 
*/

window.console.log("----------------- STEP 17 -------------------");
var x = 10;
var y = 20;
window.console.log(x+y);
window.console.log("--------------- END-STEP 17 -----------------\n\n\n");


/*
18.	Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.
*/

window.console.log("----------------- STEP 18 -------------------");
var x = 20;
window.console.log(x*5);
window.console.log("--------------- END-STEP 18 -----------------\n\n\n");


/*
19.	Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.
*/

window.console.log("----------------- STEP 19 -------------------");
var x = 20;
window.console.log(x*5);
window.console.log("--------------- END-STEP 19 -----------------\n\n\n");

/*
20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Next, divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.
*/

window.console.log("----------------- STEP 20 -------------------");
var x = (20/3);
window.console.log((x/x)+1);
window.console.log("--------------- END-STEP 20 -----------------\n\n\n");


/* 21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
*/

window.console.log("----------------- STEP 21 -------------------");
var objDate = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = 0;
while (1==1){ // be carefull here!!!
    if (objDate.getDay() == day){
        window.console.log("Happy " + days[day] + "! \\o/");
        break;
    }
    day++;     
}
window.console.log("--------------- END-STEP 21 -----------------\n\n\n");

/* 
22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
*/

window.console.log("----------------- STEP 22 -------------------");
var valRent = parseFloat(window.prompt("How much you pay for renting?"));
if (!(valRent > 1000))
    window.console.log("Ops, something wrong here, are you in San Diego, CA? :)");
else if (!(valRent > 1500))
    window.console.log("Wow, this is a great deal renting!");
else if (!(valRent > 2000))
    window.console.log("Not bad renting value!");
else
    window.console.log("Wow, this is a expensive renting!");
window.console.log("--------------- END-STEP 22 -----------------\n\n\n");


/*23.	Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.
*/

window.console.log("----------------- STEP 23 -------------------");

var widget = new Object();
window.console.log(typeof widget);

window.console.log("--------------- END-STEP 23 -----------------\n\n\n");


/*24.	Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.
*/

window.console.log("----------------- STEP 24 -------------------");
window.console.log(widget instanceof Object);
window.console.log("--------------- END-STEP 24 -----------------\n\n\n");


/*
25.	Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.
*/

window.console.log("----------------- STEP 24 -------------------");
window.console.log(widget instanceof String);
window.console.log("--------------- END-STEP 24 -----------------\n\n\n");
