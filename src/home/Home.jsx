import MealCategoryList from '@/meal/MealCategoryList'
import React from 'react'

export default function Home() {
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
      <form className='max-w-2xl'>
        <input 
        className='bg-white px-2 w-100'
        type="text" placeholder='Search' />
      </form>
     </div>



      <MealCategoryList />
      
    </div>
  )
}
