import MealCategoryList from '@/meal/MealCategoryList'
import React from 'react'
import {getTotal} from "../utils/getTotal.js";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const nav = useNavigate();


  return (
    <div className='p-5 '>
     <div className='grid grid-cols-4 items-center'>
      <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />

       <div className='text-white text-center col-span-2 space-y-4'>
        <h1>Welcome to TheMealDB </h1>
        <p>Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.
We offer a free recipe API for anyone wanting to use it, with additional premium features if required</p>
       </div>

      <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />
     </div>

     <div className='flex justify-center mb-10'>
      <form action={(formData)=>{
       nav(`/search?s=${formData.get('seatch')}`)
      }} className='max-w-2xl'>
        <input 
        name="search"
        className='bg-white px-2 w-100'
        type="text" placeholder='Search' />
      </form>
     </div>



      <MealCategoryList />
      
    </div>
  )
}
