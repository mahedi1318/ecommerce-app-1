import React from 'react'
import Hero from '../components/Hero-part/Hero'
import LetestCollection from '../components/LetestCollection-part/LetestCollection'
import BestSeller from '../components/BestSeller-part/BestSeller'
import SpecialOfferOne from '../components/SpecialOfferOne__part/SpecialOfferOne'
import NewsLetter from '../components/NewsLetter-part/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero/>
      <LetestCollection/>
      <SpecialOfferOne/>
      <BestSeller/>
      <NewsLetter/>
    </>
  )
}

export default Home
