import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./home/Home.jsx";

import RootLayout from "./components/RootLayout.jsx";
import ItemList from "./meal/ItemList.jsx";
import Meal from "./meal/Meal.jsx";


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
          path: 'Meal/:id',
          element: <Meal />,
        },


  


      ]
    },


  ]);

  return <RouterProvider router={router} />
}