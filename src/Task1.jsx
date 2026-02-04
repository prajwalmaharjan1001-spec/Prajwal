// export default function App() {

//   const personName = 'shyam';
//   const age = 90;
//   const isLogin = true;
//   const person = {
//     name: 'shyam',
//     age: 90
//   }
//   const numbers = [11, 22, 33, 44, 55];


//   return (
//     <div className="p-5">

//       <h1 className="text-5xl font-bold text-red-700 uppercase">{personName}</h1>

//       <p>{age}</p>

//       <p>{`${personName} he is ${age} years old ${isLogin}  `}</p>

//       <p>{`${personName} is a good person`}</p>



//         <p>{`${personName}'s salary is ${salary} & his expenses is ${expenses} he works as a ${job}
//         at ${bankName} he's married status is ${isMarried}`}</p>
//     <p>{person.name}</p>    
//     <p>{person.age}</p>


//     </div>
//   )
// }

// export default function App() {
//   const food = {
//     id: 1,
//     name: "Pizza",
//     category: "Fast Food",
//     price: 450,
//     isVeg: false,
//     ingredients: ["Cheese", "Tomato Sauce", "Flour"],
//     rating: 4.5,
//     available: true,
//   };
//   return (
//     <div>
//       <p>{food.id}</p>
//       <p>{food.name}</p>
//       <p>{food.category}</p>
//       <p>{food.price}</p>
//       <p>{food.isVeg}</p>
//       <p>{food.rating}</p>
//       <p>{food.available}</p>
//       <h1>{`types of food: ${food.category}`}</h1>
//       <p>
//         {food.available? `Price of ${food.name}: ${food.price}   Rating of food is ${food.rating}`
//           : "Food is not available"}
//       </p>
      
//   );

// export default function App() {


//   const numbers = [11, 22, 33, 44, 55];


//   const persons = ['ram', 'shyam', 'hari', 'sita'];
 

//   const person = [
//   {
//     id: 1,
//     name: "Rabin",
//     age: 25,
//     role: "Developer",
//     city: "Kathmandu"
//   },
//   {
//     id: 2,
//     name: "Sita",
//     age: 23,
//     role: "Designer",
//     city: "Pokhara"
//   },
//   {
//     id: 3,
//     name: "Amit",
//     age: 28,
//     role: "Manager",
//     city: "Lalitpur"
//   }
// ];

//   return (
//     <div className="p-5">


//       {numbers.map((n, i) => {
//         return <h1 key={i}>{n}</h1>
//       })}

//       {persons.map((a,b) => {
//         return <h1 key={b}>{a}</h1>
//       })}
      
//       {person.map((p)=> {
//          return <h1 key={p}>{p.name}</h1>
//       })}
//       {person.map((p)=> {
//          return <h1 key={p}>{p.id}</h1>
//       })}
      
//       {person.map((p)=> {
//          return <h1 key={p}>{p.age}</h1>
//       })}
      
//       {person.map((p)=> {
//          return <h1 key={p}>{p.role}</h1>
//       })}
      
//       {person.map((p)=> {
//          return <h1 key={p}>{p.city}</h1>
//       })}
      
//       {person.map((p)=>{
//         return <h1 key={p}>{`na`}</h1>
//       })}


//     </div>
//   )
// }

// export default function App() {
  // const persons = [
  //   {
  //     id: 1,
  //     name: "Rabin",
  //     age: 25,
  //     role: "Developer",
  //     city: "Kathmandu"
  //   },
  //   {
  //     id: 2,
  //     name: "Sita",
  //     age: 23,
  //     role: "Designer",
  //     city: "Pokhara"
  //   },
  //   {
  //     id: 3,
  //     name: "Amit",
  //     age: 28,
  //     role: "Manager",
  //     city: "Lalitpur"
  //   }
//   const foods = [
//   {
//     id: 1,
//     name: "Pizza",
//     category: "Fast Food",
//     price: 450,
//     isVeg: false,
//     rating: 4.5
//   },
//   {
//     id: 2,
//     name: "Veg Momo",
//     category: "Snacks",
//     price: 180,
//     isVeg: true,
//     rating: 4.7
//   },
//   {
//     id: 3,
//     name: "Chowmein",
//     category: "Main Course",
//     price: 220,
//     isVeg: true,
//     rating: 4.3
//   }
// ];


//   return (
//     <div className="p-5">

//       {foods.map((food,i)=>{
//         return <div key={food.id}>
//           <p>{food.id}</p>
//           </div>
//       })}

//       {/* {persons.map((person, i) => {

//         return <div key={person.id}>
//           <p>{person.name}</p>
//           <p>{person.age}</p>
//           <p>{person.role}</p>
//           <p>{person.city}</p>
//         </div>

//       })} */}

    






//     </div>
//   )
// }]
// export default function Movie() {
//     const movies = [
//         {
//             id:1,
//             title: "Inception",
//             genre: "Sci-Fi",
//             year: 2010,
//             rating: 8.8,
//             image:"/public/interception.jpeg"
//         },
//         {
//             id:2,
//             title: "Interstellar",
//             genre:"Sci-Fi",
//             year: 2014,
//             rating:8.6,
//             image:"/public/interseller.jpg"
//         },
//         {
//             id: 3,
//             title: "The Dark Knight",
//             genre: "Action",
//             year: 2008,
//             rating: 9.0,
//             image: "/public/darknight.jpeg"
//         },
//     ];
//   return (
//     <div className="p-5 text-2xl">
//         {movies.map((movie,i) => {
//             return (
//                 <div key={movie.id}>
//                     <p className="font-bold text-red-600">{movie.title}</p>
//                     <p>{movie.genre}</p>
//                     <p>{movie.year}</p>
//                     <p >{movie.rating}</p>
//                     <p><img src={movie.image} alt={movie.title} className="w-68 h-auto mb-10"/></p>
//                 </div>
//             )
//         })}
       
//     </div>
//   )
// }


// export default function App() {

// const func = () => {
//    const number = prompt('what is the number');
//    const nConvert = Number(number);

//    if(Number.isNaN(nConvert) ){
//     alert('Please provide valid number');
//    }else if(nConvert > 60){
//     alert('senior');
//    }else if(nConvert<20){
//     alert('junior');
//    }else if(nConvert>20){
//     alert('jshjjhs')
//    }

// }


//   return (
//     <div className="p-5">
//       <button 
//       // onMouseEnter={() => {
//       //   console.log('hello sir');
//       // }}
//       onClick={func}
      
//       className="bg-black text-white px-6 py-2 rounded-2xl">click me</button>
//     </div>
//   )
// }
