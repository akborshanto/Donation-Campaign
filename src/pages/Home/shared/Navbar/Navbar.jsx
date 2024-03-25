import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {  NavLink } from "react-router-dom";
import { CustomSpinner } from './../../../../CustomSppiner/CustomSpinner';
 
function NavList() {
  return (
    <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium font-semibold text-2xl"
      >

      <NavLink to='/'   className={({isActive,isPending})=> isActive? " text-red-500 text-2xl transition-shadow":<CustomSpinner></CustomSpinner>}>
      <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
Home
      </a>
      </NavLink>
       
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium font-semibold text-xl"
      
      >
   <NavLink to='/donation' className={({isActive,isPending})=> isActive? " text-red-500 text-2xl transition-shadow":<CustomSpinner></CustomSpinner>}>
   
   <a href="#" className="flex items-center hover:text-blue-500 transition-colors text-2xl">
   Dontation
   </a>
   </NavLink> 
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium font-semibold text-xl"
      >
   <NavLink to='/statics' className={({isActive,isPending})=> isActive? " text-red-500 text-2xl transition-shadow":<CustomSpinner></CustomSpinner>}>
   
   <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
   Statistics
     </a>
   </NavLink>
      </Typography>
  
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-2xl px-6 py-3  mb-8">
      <div className="flex items-center justify-between text-blue-gray-900">
 <div>
 <img src="/public/resource/Logo (2).png" alt="Logo" />
 </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}