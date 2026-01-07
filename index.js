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

const age = 50;


const m = age > 3  ? 'senior' : age < 20 ? 'junior': age == 20 ? 'normal' : 'senior';

console.log(m);