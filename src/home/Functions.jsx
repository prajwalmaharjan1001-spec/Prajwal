// import { useState } from "react"





// export default function home() {

//  const [count, setCount]= useState(1);
//  const handleIncrement = () => {
//   setCount((prev) => prev + 1)
//  }
//   const handleDecresement = () => {
//   setCount((prev) => prev - 1)
//  }


// console.log('hello');



//   return (
//     <div className="p-2">
//       <h1>{count}</h1>
//       <button 
//       onClick={handleIncrement}
//       className="bg-amber-300 px-3 py-1" >Click</button>
//       <button
//       onClick={handleDecresement}
//       disabled={count === 0}
//       className="bg-amber-400 px-3 py-1 ">Click for -</button>
//     </div>
//   )
// }



// import { useState } from "react"




// export default function Home() {

//   const data = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 30
//     },
//     {
//       id: 2,
//       name: "Jane Doe",
//       age: 25
//     },
//     {
//       id: 3,
//       name: "Bob Smith",
//       age: 40
//     }
//   ];


//   return (
//     <div>


//       {
//         data.map((item) => {
//           return (
//             <div key={item.id}>
//               <h1>{item.name}</h1>
//               <p>{item.age}</p>
//             </div>
//           )
//         })
//       }








//     </div>
//   )
// }



// import React from 'react'

// export default function home() {
//   const movies = [
//   {
//     id: 1,
//     title: "Inception",
//     year: 2010,
//     genre: "Sci-Fi",
//     rating: 8.8
//   },
//   {
//     id: 2,
//     title: "Interstellar",
//     year: 2014,
//     genre: "Sci-Fi",
//     rating: 8.6
//   },
//   {
//     id: 3,
//     title: "The Dark Knight",
//     year: 2008,
//     genre: "Action",
//     rating: 9.0
//   },
//   {
//     id: 4,
//     title: "Avengers: Endgame",
//     year: 2019,
//     genre: "Superhero",
//     rating: 8.4
//   },
//   {
//     id: 5,
//     title: "Titanic",
//     year: 1997,
//     genre: "Romance",
//     rating: 7.9
//   },
//   {
//     id: 6,
//     title: "Joker",
//     year: 2019,
//     genre: "Drama",
//     rating: 8.4
//   },
//   {
//     id: 7,
//     title: "Parasite",
//     year: 2019,
//     genre: "Thriller",
//     rating: 8.5
//   },
//   {
//     id: 8,
//     title: "Spider-Man: No Way Home",
//     year: 2021,
//     genre: "Superhero",
//     rating: 8.2
//   },
//   {
//     id: 9,
//     title: "The Matrix",
//     year: 1999,
//     genre: "Sci-Fi",
//     rating: 8.7
//   },
//   {
//     id: 10,
//     title: "Gladiator",
//     year: 2000,
//     genre: "Action",
//     rating: 8.5
//   }
// ];
//   return (
//     <div>
//       {
//         movies.map((a)=>{
//           return(
//             <div key={a}>
//               <p>{a.id}</p>
//               <h2>{a.title}</h2>
//               <p>{a.rating}</p>
//               </div>
//           )
//         })
//       }
//     </div>
//   )
// }



// import React from 'react'

// export default function home() {

// const foods = [
//   {
//     id: 1,
//     name: "Pizza",
//     category: "Fast Food",
//     price: 12.99,
//     rating: 4.5,
//     image: "https://images.unsplash.com/photo-1601924638867-3ec3a1f7a5b6"
//   },
//   {
//     id: 2,
//     name: "Burger",
//     category: "Fast Food",
//     price: 8.99,
//     rating: 4.2,
//     image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
//   },
//   {
//     id: 3,
//     name: "Sushi",
//     category: "Japanese",
//     price: 15.5,
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
//   },
//   {
//     id: 4,
//     name: "Pasta",
//     category: "Italian",
//     price: 11.25,
//     rating: 4.3,
//     image: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
//   },
//   {
//     id: 5,
//     name: "Fried Rice",
//     category: "Asian",
//     price: 9.75,
//     rating: 4.1,
//     image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
//   }
// ];



//   return (
//     <div>
//       {
//         foods.map((a)=>{
//           return(
//             <div key={a.id}>
//               <img src={a.image} alt={a.image}/>

//               <h1>{a.name}</h1>
//               <h2>{a.category}</h2>
//               <h2>{a.price}</h2>
//               <h2>{a.rating}</h2>

          
          


//             </div>
//         )
//         })
//       }
//     </div>
//   )
// }





// export default function home() {
// const persons = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 28,
//     contact: {
//       email: "john@example.com",
//       phone: "+1234567890"
//     },
//     address: {
//       city: "New York",
//       country: "USA",
//       zip: "10001"
//     }
//   },
//   {
//     id: 2,
//     name: "Emma Watson",
//     age: 32,
//     contact: {
//       email: "emma@example.com",
//       phone: "+447911123456"
//     },
//     address: {
//       city: "London",
//       country: "UK",
//       zip: "EC1A"
//     }
//   },
//   {
//     id: 3,
//     name: "Raj Sharma",
//     age: 26,
//     contact: {
//       email: "raj@example.com",
//       phone: "+919876543210"
//     },
//     address: {
//       city: "Delhi",
//       country: "India",
//       zip: "110001"
//     }
//   },
//   {
//     id: 4,
//     name: "Sophia Lee",
//     age: 29,
//     contact: {
//       email: "sophia@example.com",
//       phone: "+821012345678"
//     },
//     address: {
//       city: "Seoul",
//       country: "South Korea",
//       zip: "04524"
//     }
//   },
//   {
//     id: 5,
//     name: "Carlos Martinez",
//     age: 35,
//     contact: {
//       email: "carlos@example.com",
//       phone: "+34123456789"
//     },
//     address: {
//       city: "Madrid",
//       country: "Spain",
//       zip: "28001"
//     }
//   }
// ];


//   return (
//     <div>
//       {
//         persons.map((a)=>{
//           return(
//             <div key={a.id}>

//              <h1>{a.name}</h1>
//              <p>{a.age}</p>
//              <p>{a.contact.email},{a.contact.phone}</p>
//              <p>{a.address.city},{a.address.country},{a.address.zip}</p>

//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }






// export default function home() {

// const data = [

//     {
//       id: 1,
//       name: 'ram',
//       age: 90,
//       habits: ['eating', 'sleeping', 'watching tv'],
//       address: {
//         city: 'bangalore',
//         state: 'karnataka'
//       }
//     },

//   ];

//   return (
//     <div>
//       {
//         data.map((a) => {
//           return(
//             <div key={a.id}>
//               <h1>{a.name}</h1>
//               <p>{a.age}</p>
//               {a.habits.map((habit,i)=>{
//                 return <li key={i}>{habit}</li>
//               })}



//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// import React, { useState } from 'react'

// export default function home() {

//  const [data, setData] = useState([]);

//  const handleData = () => {
//       const newUser = {
//       userId: faker.string.uuid(),
//       username: faker.internet.username(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar()
//     };
    
//   setData((prev) => [...prev,newUser])

//  }
//   return (
//     <div>
      
//     </div>
//   )
// }

