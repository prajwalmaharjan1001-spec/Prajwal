
import { useApi } from "@/utils/apiHook";

import { useParams } from "react-router-dom"


export default function Meal() {
  const { id } = useParams();

  const [data, load, err] = useApi('lookup.php', {i: id});


  

  if (load) {
    return <h1>Loading.....</h1>;
  }
  if (err) {
    return <h1>{err}</h1>;
  }

  console.log(data);
  return (
    <div className="text-white">
      {data && data.meals.map((meal)=>{
        return <div key={meal.idMeal}  className="space-y-3">
          <h1>{meal.strMeal}</h1>
          <img className="h-64"
          src={meal.strMealThumb} alt="" />
          <h2>Categories: {meal.strCategories}</h2>
          <h2>Area: {meal.strArea}</h2>
          <h2>Instruction: {meal.strInstructions}</h2>
          <iframe width="" height=""
          src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </div>
      })}
    </div>
  )
}
