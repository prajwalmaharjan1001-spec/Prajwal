import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";

import RootLayout from "./components/RootLayout.jsx";
import ItemList from "./meal/ItemList.jsx";
import Meal from "./meal/Meal.jsx";
import UseSearchParams from "./params/UseSearchParams.jsx";
import Search from "./meal/Search.jsx";


export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home/>,

        },

        {
          path: 'items-list/:label',
          element: <ItemList />,
        },
        {
          path: 'meal/:id',
          element: <Meal />,
        },
        {
          path: 'searchParams',
          element: <UseSearchParams/>
        },
        {
          path: 'search',
          element: <Search />
        }



  


      ]
    },


  ]);

  return <RouterProvider router={router} />
}