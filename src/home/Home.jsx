import { faker } from "@faker-js/faker";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function home() {

 const [data, setData] = useState([]);

 const handleData = () => {
      const newUser = {
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar()
    };

  setData((prev) => [...prev,newUser])

 }
  return (
    <div>
     
     <Button onClick={handleData} >Add User</Button>
    {data.map((a)=>{
      return (
      <div key={a.userId}>
      <h1>{a.username}</h1>
      <p>{a.email}</p>
      <Avatar>
        <AvatarImage src={a.avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </div>
      )
    })}

    </div>
  )
}





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
