//const person = 'Prajwal';
// const personName = 'He\'s 20 years old\nHi';
// const person_name = 'hello'

// console.log(person.at(-1));
// console.log(person.charAt(1))//(-)dosent support
// console.log(person.concat(' \nHello').concat('\nsello')) //value return garxa
// const personName = 'hello';

// const name = 'shyam';
// const job = 'Dev';

// console.log(name.concat('-').concat(job).concat('-').concat('Jee'));
// shyam-Dev-jee
// console.log(person.toUpperCase())
// console.log(person.toLowerCase())
// console.log(personName.endsWith('a'));
//console.log(personName.includes('ram'));
// console.log(personName.isWellFormed(''));
// console.log(personName.length);
// console.log(personName.trim().length);
// console.log(personName.repeat(5));
//console.log(personName.replace('bad','good'));
//console.log(personName.replaceAll('bad','good'));
//console.log(personName.slice(0,4));
// console.log(personName.substring(0,2));
    
// const personName = 'zcnzcnmskdnk.jpg';



// console.log(personName.split('.'));
    
// const personName = 'Ram';
// const age = 90;
// const job  ='Dev';
// // template literals
// console.log(`he is ${personName} ${age} ${job} `);


// const strongPasswordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// console.log(strongPasswordRegex.test('Abscbw@9'));

// const temperature = 20;
// const value = 2;
// const pizza = 'pizza';
// const pasta = 'pasta';

// Write a program that produces this output by using all of them:

// The temperature is 20C
// 2 plus 2 makes 4
// I like pizza and pasta

// console.log(`The temperature is ${temperature}C\n${value} plus ${value} makes ${value+value}\nI like ${pizza} and ${pasta}.`);

// let m = 'sdlkf';

// m = 'sdflk';
// console.log(m);

// const price = '10000';
// console.log(Number(price)+1000);


//const price = 111;
//console.log(Number.isInteger(price));


//const price = 'abc';
// const price = '555';

// console.log(Number.isNaN(Number(price)));

// const person={
//     name: 'prajwal',
//     age: 20,
//     sleep:function(){
//         console.log('person is sleeping')
//     }
// }

// const carName = {
//     name: 'Supra',
//     model:'Electric',
//     speed: function(){
//         console.log('It\'s high spped is 160km/hrs')
//     }
// };
// carName.speed();
// console.log(carName.model);

// console.log(Math.PI);
// console.log(Math.sqrt(4));
// console.log(Math.cbrt(27));
// console.log(Math.max(11, 99, 77, 66, 4));
// console.log(`The max value is ${Math.max(11, 99, 77, 66, 4)}`);
// console.log(Math.min(11, 99, 77, 1, 66, 4, 0.5));

// const rating = 9.444;
// const random = Math.random() * 100; //100 + 1 gariyo vane 1-100 samma aauxa

// console.log(random);
// console.log(Math.trunc(random));

// console.log(Math.floor(rating));
// console.log(Math.ceil(rating));
// console.log(Math.round(rating));

// const age = 55.586468465;

// console.log(age.toFixed(2));

// let name;
// const isLogin = null;

// console.log(name);
// console.log(isLogin);


//  let a = 0;

// const c = ++a;
// a++//a = a+1

// console.log(c);


// comparison operator, ternary operator, if-else operator, switch-case loops

// let a = 100;

// // a = a + 90;
// a **= 2;//power

// console.log(a);

// const sum = 90 + 100 * 10;

// console.log(sum);


// const a = 90;
// const b = 100;


// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(b % a);
// console.log(a ** b);

// const c = '90';

// console.log(a === c);

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(b === a);
// console.log(a !== b);


// const a = 90;
// const b = 100;

// console.log(a > b || a < b);
// console.log(a > b && a < b);

// const age = 50;


// const m = age > 50  ? 'senior' : age < 20 ? 'junior': age == 20 ? 'normal' : 'senior';

// console.log(m);

// const age = 40;

// if(age>50){
//     console.log('Hello');
// }else{
//     console.log('Hi');
// }


// const age = 90;

// if(age<50){
//     console.log('Hello');
// }else if(age > 50){
//     console.log('Hi');
// }elseif(age === 90){
//     console.log(sello);
// }

// const age = 50;

// if(age>=50){
//     console.log('senior');
// }else if(age < 20){
//     console.log('junior');
// }else{
//     console.log('normal');
// }

// const netSalary = 50000;
// const expenses = 35000;

// if(netSalary>expenses){
//     console.log(`you have saves ${netSalary-expenses} this month`);
// }else if(expenses>netSalary){
//     console.log(`you have loss ${expenses-netSalary} this month`);
// }else{
//     console.log('Balance hasn\'t changed');
// }

// const number = 91;

// if(number % 2 === 0){
//     console.log('even');
// }else{
//     console.log('odd');
// }


// const age = 0;//false value

// if(age){
//     console.log('true value');
// }

// const weekday = '';

// switch (weekday) {
//     case'sunday':
//     console.log('This is sunday');
//     break;
//     case'monday':
//     console.log('This is monday');
//     break;
//     case'tuesday':
//     console.log('This is tuesday');
//     break;
//     case'wednesday':
//     console.log('This is wed');
//     break;
//     case'thursday':
//     console.log('This is thursday');
//     break;
//     case'friday':
//     console.log('This is friday');
//     break;
//     case'saturday':
//     console.log('This is saturday');
//     break;
//      default:
//     console.log('please provide day');
// }


// const calc = 'divide';
// const a = 50;
// const b = 30;

// switch(calc){
//     case('add'):
//     console.log(a + b);
//     break;
//     case('sub'):
//     console.log(a - b);
//     break;
//     case('multiply'):
//     console.log(a * b);
//     break;
//     case('divide'):
//     console.log(a / b);
//     break;
//     default:
//         console.log('Please provide method');
// }

// let i = 0;         //while loop
// while (i < 20) {
//     i++;
//     console.log(`Hello ${i}`);

//      if(i % 2 === 0){
//        console.log('This is even number');
//       }else{
//          console.log('This is odd number');
//     }
// }

//Do-While loop

// let i = 0;

// do{
//     i++;
//     console.log('Hello world');
// }while(i<10)

// let sum=0;
// for (let i = 1; i <= 15; i++) {
//   console.log(`hello jee ${i} `);
//   sum=sum+i;
//   console.log(sum);
// }


// for(i=0;i<=15;i++){
//    if(i%3 ===0 && i%5 ===0){
//     console.log("fizz buzz");
//    }
//    else if(i%3 === 0){
//     console.log("fizz");
//    }
//    else if(i%5 === 0){
//     console.log("buzz");
//    }
//    else{
//     console.log(i);
//    }
// }

// for(i=0;i<=15;i++){
//     if(i % 2 === 0){
//        console.log(`${i} even`);
//       }else{
//          console.log(`${i} odd`);
//     }
// }

// let oddtotal = 0;
// let eventotal = 0;
// for (i=0;i<=15;i++){
//     if(i%2 == 0){
//         eventotal += i;
//         console.log(`${i} is even number`);
//     }
//     else{
//          oddtotal += i;
//         console.log(`${i} is odd number`);
//     }
// }
// console.log(`The sum of Even Number is: ${eventotal}`);
// console.log(`The sum of Odd Number is: ${oddtotal}`);

// const persons = [11, 22, 33, 44, 55, 66, 77];
// let sum=0;

// //for in -- for off

// // for (let i in persons) {
// //   //console.log('hello');
// //   console.log(i);

// // }

// for (let i of persons) {
//     console.log(i);
//     sum=sum+i;
    
// }
// console.log(`The sum of array is ${sum}`);


// const persons = [11, 22, 33, 44];




// persons.push(55, 66);
//persons.pop();
//persons.shift();
// persons.unshift(9, 7);
// console.log(persons.concat(9,7,6).concat([1,2,3,5]));


//const persons = [11, 22, 33, 44];

// console.log(persons.includes(90));
//console.log(persons.length);
//console.log(persons.reverse());
//console.log(persons.indexOf(22));
//console.log(persons.join('-'));

// const func = () => {
//     console.log('hello');
// }
// func();


// somejee();
// function somejee(){
//     console.log('hello jee');
// }

// somejee();


// function giveSum(a,b){
//    console.log(a + b);
// }
// giveSum(80,90)

// function git(username){
//     console.log(`Good morning ${username}!!!`);

// }

// git('Prajwal');

// function giveSum(a = 90) {
//   console.log(a);
// }

// giveSum(100);


// let sum=0;
// function giveSum(numbers) {
//     for (let i of numbers) {
//     sum=sum+i;
//     }
//     console.log(`The sum of the array is ${sum}`);
// }

// giveSum([11,22,33,44,55,66]);