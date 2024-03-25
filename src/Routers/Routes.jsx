import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import DonationDetails from "../pages/DontationDetails/DonationDetails";
import Donation from "../pages/Donation/Donation";
import Statics from "../pages/Statics/Statics";

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
    path:"/donationDetails/:id",
    element:<DonationDetails></DonationDetails>
},
{
  path:'/donation',
  element:<Donation></Donation>
},
{
  path:'/statics',
  element:<Statics></Statics>
}

]}

  ]);
  export default router