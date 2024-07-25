import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"


import { About } from "./components/about.jsx";
import { Home } from "./components/home.jsx";
import { Resume } from "./components/resume.jsx";
import { Projects } from "./components/projects.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/projects",
        element: <Projects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);