
import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarSimple } from '../pages/Home/shared/Navbar/Navbar'
import Footer from '../pages/Home/shared/Footer/Footer'

const Root = () => {
  return (
    <div className=' container mx-auto'>
<NavbarSimple></NavbarSimple>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
