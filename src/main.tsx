import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./routes/Nav";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home/Home";
import GlobalContextProvider from "./components/GlobalContextProvider";
import BookCorner from "./routes/BookCorner/BookCorner";
import FavouriteBooks from "./routes/BookCorner/FavouriteBooks";
import FavouriteAuthors from "./routes/BookCorner/FavouriteAuthors";
import ReadBooks from "./routes/BookCorner/ReadBooks";
import ReadingStatistics from "./routes/BookCorner/ReadingStatistics";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/BookCorner",
        element: <BookCorner />,
        children: [
          { path: "/BookCorner", element: <FavouriteBooks /> },
          { path: "/BookCorner/FavouriteAuthors", element: <FavouriteAuthors /> },
          { path: "/BookCorner/ReadBooks", element: <ReadBooks /> },
          { path: "/BookCorner/ReadingStatistics", element: <ReadingStatistics /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
