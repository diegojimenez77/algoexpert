// Multi-Paradign Languaje
// -Event Driven : Respond to Events 
// -Functional : Pure Functions, first-class functions
// -Object-otiented: Custom objects with inheritance
// -Imperative: Spedify logic & control flow
// -Declarative: Specify desired output

//JavaScript Is always Evolving
// -ECMAScript - standardized version
// -Executes code in the browser
// -Just-in-time compilation (or interpreted)

//Primitive Types
// number
// BigInt 99000000000000000, 20n
// Boolean true or false
// String "hello world"
// Symbol Symbol('description')
// Null null must be assigned, has no value
// undefined undefined, the value has not been asigned.

let num = 10;
console.log(num);
num = 20; //reasignacion de valor de la variable num ya no es necesario usar let 
console.log(num);

let num2 = 10.5;
console.log(Math.round(num2));
console.log(Math.random());

let strNum = "10.8";
console.log(Number(strNum));
console.log(parseInt(strNum));
console.log(parseFloat(strNum));

let num3 = 10.5
console.log(num3 == 10);
console.log('10' == 10);
console.log('10'=== 10);

console.log(Math.pow(2,3));
console.log(num3 * 'a');
console.log(-Infinity);
console.log(BigInt(100));
console.log(typeof 100n);

//////Strings

let str = 'abcd'
console.log(str + 10); //uses concatenation
console.log(str < 'efg');//prints true because of abcd goes before efg
console.log(str === 'abcd');//evaluates ecuality type and value
console.log('Hello this is a single quote: \'');//temenos que usar\ para evitar el caracter despues de '
console.log('Hello \n World');
console.log(`Hello
World`);//using template literals
console.log(`Result: ${10+30}`); // we use tamplate literals to make operations
console.log('This is a very' +
 'long string');
 

