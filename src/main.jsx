import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root"
import Contact from "./routes/contact"
import Index from "./routes/index"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacto",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
