import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar-Part/Navbar'
import Footer from '../../components/Footer-part/Footer'
import Search from '../../components/SearchBar-part/Search'

const Root = () => {
  return (
    <>
        <Navbar/>
        <Search/>
        <Outlet/>     
        <Footer/>
    </>
  )
}

export default Root
