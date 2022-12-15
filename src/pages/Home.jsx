import React from 'react'
import './home.scss'
import { Nav, Home_one, Home_two, Home_reviews, Brands, Home_three, Home_last, Footer } from '../components'
import { Book } from '../service_components'
import { useState } from 'react'

function Home() {
  
  return (
    <div className='home'>
        <Book />
        <Nav />
        <Home_one />
        <Home_two />
        <Home_reviews />
        <Brands />
        <Home_three />
        <Home_last />
        <Footer />
    </div>
  )
}

export default Home