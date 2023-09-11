import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import routines from "./routines";
import RoutineList from "./RoutineList";
import Routine from "./Routine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RoutineList />,
        loader: () => routines,
      },
      {
        path: "routines/:id",
        loader: ({ params }) => {
          const routine = routines.find((r) => r.id === Number(params.id));
          return routine;
        },
        action: ({ data }) => {
          console.log("action", data);
        },
        element: <Routine />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
