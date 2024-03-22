import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      
      children:[
        {path: "/",element: <Home/>},
        

      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/sign-up",
      element: <SignUp/>,
    }
  ]);

  export default router;