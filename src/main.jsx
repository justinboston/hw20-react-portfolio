import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from './components/About/about';
import Home from "./components/Home/home";
import Resume from "./components/Resume/resume";
import Projects from "./components/Projects/projects";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/resume",
        element: <Resume/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);