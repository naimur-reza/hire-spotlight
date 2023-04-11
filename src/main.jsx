import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/Error/ErrorPage";
import AppliedJob from "./components/AppliedJobs/AppliedJob";
import SingleDetails from "./components/Home/FeaturedJobs/DetailsJob/SingleDetails";
import Loading from "./components/Loading/Loading";
import NoData from "./components/Error/NoData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: () => fetch("/data.json"),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/category.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "applies",
        element: <AppliedJob />,
      },
      {
        path: "notdata",
        element: <NoData />,
      },
      {
        path: "/details/:jobId",
        element: <SingleDetails />,
        loader: ({ params }) => params,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
