import { useApi } from "@/utils/apiHook";
import { useSearchParams } from "react-router-dom"


export default function Search() {
  const [searchParams,UseSearchParams]= useSearchParams();

  
  const[data, load , err] = useApi('search.php',{
    s: searchParams.get('s')   
  })
  console.log(data)
  return (
    <div>
      <h1>This page not found</h1>
    </div>
  )
}
