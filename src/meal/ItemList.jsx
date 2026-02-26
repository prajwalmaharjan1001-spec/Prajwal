
import { useApi } from "@/utils/apiHook";
import { useNavigate, useParams } from "react-router-dom";

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"

export default function itemList() {
  const { label } = useParams();
  const nav = useNavigate();

  const [data, load, err] = useApi('filter.php',{ c: label});

   

  if (load) {
    return <h1>Loading.....</h1>;
  }
  if (err) {
    return <h1>{err}</h1>;
  }

  console.log(data);

  return (
    <div className="grid grid-cols-4 text-white gap-5">
      {data &&
        data.meals.map((meal) => {
          return (
            <div
            onClick={()=>nav(`/meal/${meal.idMeal}`)}
              key={meal.idMeal}
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <img src={meal.strMealThumb} alt="" />
              <h1>{meal.strMeal}</h1>
            </div>
          );

          //     return   <Card
          //     onclick={()=> nav(`/meal/${meal.idMeal}`)}
          //     key={meal.idMeal}

          //     size="sm" className=" max-w-sm  cursor-pointer">
          //      <img
          //       src={meal.strMealThumb}
          //       alt="Event cover"
          //       className="relative z-20 aspect-video w-full object-cover"
          //     />

          //   <CardHeader>
          //     <CardTitle>{meal.strMeal}</CardTitle>
          //   </CardHeader>

          //   <CardFooter>
          //     <Button  size="sm" className="w-full">
          //       View
          //     </Button>
          //   </CardFooter>
          // </Card>
        })}
    </div>
  );
}
