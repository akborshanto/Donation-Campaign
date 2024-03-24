import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";

 const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,

      errorElement:<Error></Error>,

children:[

{
    path:'/',
    element:<Home></Home>
},
{
    path:'/donation',
    element:<div>DONATON</div>
}

]}

  ]);
  export default router