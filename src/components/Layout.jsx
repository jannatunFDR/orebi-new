import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navbar from './NAvbar'

const Layout = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout