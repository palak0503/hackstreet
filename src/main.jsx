import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Resources from './pages/Resources.jsx'
import About from './pages/About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//hi
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "resources",
    element: <Resources />, 
  },
  {
    path: "about",
    element: <About />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)