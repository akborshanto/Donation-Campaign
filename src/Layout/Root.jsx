
import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarSimple } from '../pages/Home/shared/Navbar/Navbar'

const Root = () => {
  return (
    <div className=' container mx-auto'>
<NavbarSimple></NavbarSimple>
      <Outlet></Outlet>
      footer
    </div>
  )
}

export default Root
