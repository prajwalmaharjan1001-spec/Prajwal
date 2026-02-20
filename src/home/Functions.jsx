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

// import { faker } from "@faker-js/faker";
// import { Button } from '@/components/ui/button';
// import React, { useState } from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
     
//      <Button onClick={handleData} >Add User</Button>
//     {data.map((a)=>{
//       return (
//       <div key={a.userId}>
//       <h1>{a.username}</h1>
//       <p>{a.email}</p>
//       <Avatar>
//         <AvatarImage src={a.avatar} />
//         <AvatarFallback>CN</AvatarFallback>
//       </Avatar>
//       </div>
//       )
//     })}

//     </div>
//   )
// }





// export default function home() {
//   const persons = [
//     {
//       id: 1,
//       name: 'ram',
//       age: 90
//     },
//     {
//       id: 2,
//       name: 'shyam',
//       age: 70
//     }
//   ];
//   return (
//     <div>
//       {persons.map((a)=>{
//         return(
//           <div key={a.id}>
//             <h1>{a.name}</h1>
//             <p>{a.age}</p>

//           </div>
//         )
//       })}
//     </div>
//   )
// }

// import { Button } from '@/components/ui/button';
// import { Heading1 } from 'lucide-react';
// import React, { useState } from 'react'

// export default function home() {
//   const [show, setShow] = useState(false);

//   const [count,setCount] = useState(0);


//   return (
//     <div>

//       <h1>{count}</h1>

//       <Button onClick={()=> setCount(count+1)} >click</Button>

//       {show && <h1></h1>}

//       <Button onClick={() => setShow(!show)}  >click</Button>
      
//     </div>
//   )
// }
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input'
// import React, { useRef } from 'react'

// export default function home() {

//   const inputRef = useRef();
//   const handleInput = ()=>{
//     inputRef.current.focus();

//   }

//   return (
//     <div>

//       <Input 
//       ref={inputRef}
//       placeholder="hello sir"
//       />

//       <Button onClick={handleInput} >Click for focus</Button>
//     </div>
//   )
// }
// import { Button } from "@/components/ui/button";
// import React, { useRef } from "react";

// export default function home() {
// const bxRef= useRef();

// const handleScroll =() => {
//   bxRef.current.scrollIntoView({behavior:"smooth"});
// }


//   return (
//     <div>
//       <Button onClick={handleScroll}>Scroll down</Button>
//       <h1>section 1</h1>
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
//         aspernatur sed, voluptatibus ea doloremque ducimus iste laboriosam
//         facilis commodi quibusdam explicabo pariatur quo iure officia eveniet
//         impedit magni aliquam quae veritatis architecto labore expedita quisquam
//         ratione? A, veniam? Consectetur aliquid ducimus, aperiam alias libero ad
//         minima obcaecati. Fugiat earum ipsa sapiente, vel nemo quos quae
//         deleniti eaque, distinctio corporis unde tempore officiis ipsam velit
//         itaque tenetur optio voluptate veniam! Porro, sunt officiis!
//         Consectetur, nihil non. Eligendi, modi? Laborum molestias quam
//         praesentium, pariatur iste asperiores iusto. Aut animi eos cumque at
//         iusto possimus architecto repudiandae maxime similique facere,
//         voluptates nemo doloribus consequatur, incidunt sint voluptatum et
//         pariatur molestias. Laborum earum illum alias, porro voluptatem quasi
//         adipisci, laudantium possimus sed doloremque modi vel? Qui, quisquam
//         officiis mollitia fuga, sunt recusandae ipsum voluptatum perferendis ut,
//         odio enim nisi vel accusamus nostrum temporibus veniam totam neque amet
//         suscipit unde! Ducimus aperiam ratione earum quaerat iste quae magnam in
//         molestiae, provident corrupti animi mollitia pariatur recusandae enim
//         obcaecati atque labore id eos accusamus! Quos, ad expedita. Repellat
//         ullam deleniti, rem autem ex cumque quos natus accusantium architecto ad
//         possimus quisquam repudiandae dolorum nihil at dolor distinctio
//         reprehenderit quam! Ullam ipsa, fugiat cumque optio adipisci assumenda
//         quam possimus distinctio saepe? Quo ad laboriosam eius veritatis
//         reiciendis voluptatum eligendi facilis tempore, ducimus mollitia ipsa
//         explicabo minima saepe? Quas corporis minus aliquam vel, commodi ipsam
//         consequatur dolores facilis quisquam quia fugiat sint fugit eaque cum ut
//         odio? Necessitatibus, qui repellat provident maxime vitae incidunt
//         cumque eius nesciunt soluta id iure aliquam sunt blanditiis placeat eos
//         enim animi, iusto quod, sint laborum hic magni reprehenderit quaerat
//         consequuntur. Quisquam exercitationem quae voluptas non, reiciendis ad
//         quod facilis. Enim et vero sequi commodi quidem quia nemo natus
//         mollitia. Inventore dolore obcaecati, ducimus maxime quibusdam atque
//         dolor perspiciatis sed nisi corporis nobis architecto suscipit
//         voluptatum odit aliquam accusamus necessitatibus dignissimos magni
//         excepturi harum dolorem velit quo. Ratione labore nisi magni possimus
//         iusto reprehenderit suscipit, magnam voluptas, error, veniam incidunt
//         unde asperiores cum voluptatem temporibus pariatur exercitationem?
//         Minima ratione, ipsum tenetur quisquam accusantium repellendus,
//         reprehenderit perferendis dolorum facilis, ipsam enim temporibus quae
//         sunt voluptas inventore iste numquam! Facilis nesciunt dignissimos neque
//         unde necessitatibus veniam odio voluptas animi eveniet amet, modi quidem
//         quod nam ea et cumque a consequatur debitis ut, rerum aut deleniti
//         repellat similique? Et pariatur ut voluptates, quo ipsam esse beatae eos
//         iure dolore laborum quos enim delectus repudiandae at fuga odio illo
//         rerum obcaecati nemo? Incidunt distinctio, rerum blanditiis modi ad
//         tenetur quae nisi facilis ipsum. Officiis, maxime blanditiis fugiat
//         ipsum est voluptatem aliquid asperiores voluptatibus eum tenetur rerum
//         totam necessitatibus? Alias eos rerum earum totam dicta distinctio
//         mollitia, aut ex ratione minus perspiciatis iusto illum repellat maxime
//         dolores dolor excepturi possimus harum veniam reprehenderit! Reiciendis
//         sed rerum harum quisquam fuga soluta, optio necessitatibus sint est,
//         iusto quae aspernatur blanditiis et. Iure ipsa sunt, quis sit illum
//         tenetur aut quod vel enim ullam? Cumque nobis, eaque ut fugiat quaerat
//         quas officia molestiae deleniti, nostrum consequuntur nulla. Harum
//         dolorum odio cum dolore. Doloremque, ea vero. Maxime voluptate id
//         perferendis, neque placeat exercitationem. Nulla aliquid iusto corporis
//         rem quibusdam suscipit a enim, distinctio id saepe illo consequatur
//         possimus ducimus in quis alias necessitatibus veritatis dolore
//         voluptatem optio sunt officia! Nihil reprehenderit reiciendis error
//         suscipit cumque beatae commodi inventore ullam repellat, neque porro
//         sint quidem est molestiae minus aut! Architecto, vero? Cumque facere
//         eos, eveniet animi reprehenderit doloribus fuga beatae magni ipsa est?
//         Qui, illo quisquam consectetur placeat nulla, eveniet neque eaque
//         officia alias iusto temporibus. Exercitationem dicta qui aut rem
//         incidunt explicabo similique consequuntur cupiditate quis quia ad
//         excepturi aliquid dignissimos necessitatibus, quo natus, nesciunt
//         consequatur, esse voluptatum. Deleniti, perspiciatis veritatis repellat,
//         ducimus, sint libero consequatur facilis hic architecto voluptas porro
//         soluta delectus eos blanditiis. Tempora excepturi, debitis nihil, ex
//         sit, iusto tenetur laudantium cupiditate nesciunt autem esse quis odio
//         at perferendis architecto. Soluta voluptates, quam culpa unde doloribus
//         animi facere doloremque. Dicta vel repellat nemo laboriosam! Aspernatur,
//         consectetur. Recusandae facilis eius, tenetur ullam saepe, quod
//         distinctio dolorum voluptatum id cum placeat nam voluptates in
//         perspiciatis quaerat corrupti quibusdam corporis quo quas. Voluptatibus,
//         et rerum! At rerum itaque quasi optio laborum ut esse ad, fuga aperiam
//         corporis, veniam, atque veritatis. Reprehenderit numquam suscipit
//         quisquam explicabo, hic placeat adipisci eveniet similique esse ea
//         officiis dolor! Fugit nam, vitae rem natus quod repellat alias quis,
//         commodi eum voluptatum libero facere autem suscipit asperiores nihil
//         sint fuga debitis? Nam reprehenderit amet ratione sint cumque
//         dignissimos aliquid libero molestias laudantium rerum ea ab cum nesciunt
//         labore, nobis aperiam mollitia maiores! Asperiores fugit magnam nesciunt
//         hic quam. Eveniet nobis laborum veniam! Saepe blanditiis perferendis
//         quam aliquid fuga ea ab facilis quis esse, architecto iure eligendi,
//         labore natus voluptas quia in, quo possimus harum sunt qui. Totam
//         officia quod ut nesciunt labore natus veritatis, excepturi ullam.
//         Voluptatum sed totam aspernatur accusamus, sint quod illum molestias
//         consectetur ad hic! Tempora, suscipit velit magnam excepturi omnis saepe
//         molestias iste eos maxime minus quam labore dolore nesciunt dolor
//         repellat ipsa placeat quaerat illum cum iure deserunt quas id quia
//         vitae. Placeat iusto, dolores numquam repudiandae minus suscipit velit,
//         mollitia architecto maxime id voluptates vel nemo, labore molestiae
//         dignissimos quae. Esse fugit necessitatibus molestiae, officiis dolor
//         repellendus aspernatur earum nihil molestias sit aut praesentium placeat
//         assumenda voluptatum ratione adipisci numquam, deleniti, quibusdam a
//         soluta tempora? Tempora neque et autem earum dolor voluptate facere
//         voluptatibus velit doloremque, dolorem consectetur aliquid, id
//         temporibus harum accusamus illum! In, deleniti a. Consequuntur, maiores
//         nulla neque, quod, esse fugiat ipsa officia saepe delectus veritatis
//         cumque explicabo eum. Autem, sint ullam? Totam dolorem tempore libero,
//         fugiat blanditiis aut? Nesciunt consequuntur voluptas accusantium eum
//         quos in similique ratione, cum cupiditate excepturi officia explicabo
//         quae repellendus autem quidem repudiandae natus eligendi earum
//         reiciendis? Id illum quisquam maiores nam nobis, nemo iure tempora sit,
//         ipsa doloribus explicabo? Aut, ad veritatis quae commodi rerum, corrupti
//         fugit magnam repellat totam incidunt velit ex? Delectus vero reiciendis
//         facilis dolorum quis repudiandae dolores ratione odit provident
//         possimus! Pariatur ipsa quaerat saepe alias qui obcaecati culpa!
//       </p>
//       <h1 ref={bxRef}>Section 2</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero praesentium, ex pariatur repellat saepe consequuntur excepturi quo accusamus rem aspernatur laboriosam ipsam! Laudantium possimus placeat tempore reprehenderit error libero.</p>
//     </div>
//   );



// import { Button } from '@/components/ui/button'
// import React from 'react'

// export default function home() {

// const vdoRef = useRef();

// const pause = () =>{
//   vdoRef.current.pause();
// }
// const play = () =>{
//   vdoRef.current.play();
// }

//   return (
     


//     <div className='p-5'>
//       <video
//       ref={vdoRef}
//       src="https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4" className='h-50'></video>
//       <Button onClick={play}>Play</Button>
//       <Button onClick={pause}>pause</Button>
//     </div>
//   )
// }
// }



// export default function home() {
  
//   setTimeout(()=>{
//     console.log('hello jee');
//   },5000);

//   console.log('hi world')
  
//   return (
//     <div>
      
//     </div>
//   )
// }
// export default function Home() {

//   const getSome = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: 'John Doe',
//         age: 30
//       })
//     }, 2000);
//   });

//   getSome
//     .then((val) => {
//       console.log('success', val);
//     })
//     .catch((err) => {
//       console.log('error', err);
//     })
//     .finally(() => {
//       console.log('finally');
//     });

//   return (
//     <div>



//     </div>
//   )
// }

// import axios from "axios"


// export default function Home() {

//   const getData = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       console.log(response.data)
//     }catch(err){
//      console.log(err)
//     }
//   }


//   getData();

//   console.log('hello')





//   return (
//     <div>Home</div>
//   )

// import axios from "axios"
// import { useEffect, useState } from "react";


// export default function Home() {


//   const [data, setData] = useState([]);

//   const getData = async () => {

//     try {

//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setData(response.data);

//     } catch (err) {

//       console.log(err);

//     }

//   }

//   useEffect(() => {
//     console.log('sello jee')
//     getData();
//   }, []);

//   console.log(data);
//   console.log('hello jee')



//   return (
//     <div>

//   {data.map((m)=>{
//     return (
//        <div key={m.id}>
//          <h1>{m.title}</h1>
//        </div> 
//     )
//   })}

//     </div>
//   )
// }