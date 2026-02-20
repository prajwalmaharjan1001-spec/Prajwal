import { baseUrl } from "@/lib/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function itemList() {

   const {label} = useParams();
   const [data, setData] = useState();
     const [load, setLoad] = useState(false);
     const [err, setErr] = useState();

     const getData = async () => {
    try {
      setLoad(true);

      const response = await axios.get(`${baseUrl}/filter.php`, {
        params: {
          c: label
        }
      });
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setErr(err.message);
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading.....</h1>;
  }
  if (err) {
    return <h1>{err}</h1>;
  }

  console.log(data)



  return (
    <div className="grid grid-cols-4 text-white gap-5">
      { data && data.meals.map((meal)=>{
        return   <Card 
        key={meal.idMeal}
        
        size="sm" className="  max-w-sm">
         <img
          src={meal.strMealThumb}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover"
        />
    
      <CardHeader>
        <CardTitle>{meal.strMeal}</CardTitle>
      </CardHeader>
     
      <CardFooter>
        <Button  size="sm" className="w-full">
          View
        </Button>
      </CardFooter>
    </Card>
})}
</div>
  )
}
