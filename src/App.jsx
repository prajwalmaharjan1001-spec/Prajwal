import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Page1 from "./pages/home/nested/Page1.jsx";
import Page2 from "./pages/home/nested/Page2.jsx";

export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'page-1',
          element: <Page1 />
        },
        {
          path: 'page-2',
          element: <Page2 />
        }

      ]
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: '*',
      element: <NotFound />

    }

  ]);

  return <RouterProvider router={router} />
}