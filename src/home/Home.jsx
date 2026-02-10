import React, { useState } from 'react'

export default function home() {

 const [data, setData] = useState([]);

 const handleData = () => {
      const newUser = {
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar()
    };
 }
  return (
    <div>
      
    </div>
  )
}
