import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navbar from './NAvbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout