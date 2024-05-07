import React from "react"; // Always good to include React import
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, // Import Outlet to avoid ReferenceError
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Include this if you have a Footer component
import Homepage from "./pages/Homepage"; // Include any other components you use
import SinglePost from "./pages/SinglePost";
import WritePost from "./pages/Writepost";
import "./style.scss";


const Layout = () => {
  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <Outlet /> {/* Where child routes will render */}
      <Footer /> {/* Optional: Footer at the bottom */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This defines the root layout
    children: [
      {
        path: "/",
        element: <Homepage />, // Child route for homepage
      },
      {
        path: "/post/:id",
        element: <SinglePost />, // Child route for a single post
      },
      {
        path: "/WritePost",
        element: <WritePost />, // Child route for writing a new post
      },
    ],
  },
  {
    path: "/Register",
    element: <Register />, // Separate route for registration
  },
  {
    path: "/Login",
    element: <Login />, // Separate route for login
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
