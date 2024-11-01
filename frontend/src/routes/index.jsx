import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Root from '../layout/root/Root'
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Collection from '../pages/Collection'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Ordesr from '../pages/Ordesr'
import PlaceOrder from '../pages/PlaceOrder'
import Product from '../pages/Product'


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/orders' element={<Ordesr/>}></Route>
        <Route path='/placeOrder' element={<PlaceOrder/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
    </Route>
))

const Routes = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Routes
