import React from 'react'
import Hero from '../components/Hero-part/Hero'
import LetestCollection from '../components/LetestCollection-part/LetestCollection'
import BestSeller from '../components/BestSeller-part/BestSeller'
import SpecialOfferOne from '../components/SpecialOfferOne__part/SpecialOfferOne'

const Home = () => {
  return (
    <>
      <Hero/>
      <LetestCollection/>
      <SpecialOfferOne/>
      <BestSeller/>
    </>
  )
}

export default Home
