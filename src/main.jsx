import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Home from './routes/Home'
import MyFavourites from "./routes/MyFavourites";
import TagSelection from "./routes/TagSelection";
import Cocklection from "./routes/Cocklection";
import CocktailList from "./routes/CocktailList";
import Root from "./routes/Root";
import CocktailProvider from './contexts/CocktailProvider';



// routes for each component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "myfavorites",
        element: <MyFavourites />
      },
      {
        path: "tagselection",
        element: <TagSelection />
      },
      {
        path: "cocklection",
        element: <Cocklection />
      },
      {
        path: "cocktaillist",
        element: <CocktailList />
      },
    ]

  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CocktailProvider >
      <RouterProvider router={router} context={CocktailProvider}/>
    </CocktailProvider>
  </React.StrictMode>
);