import React from 'react'
import Footer from './Footer'
import Hero from './HomeBody/Hero'
import MainBody from './HomeBody/MainBody'
import NavBar from './Nav/NavBar'
import SubNav from './Nav/SubNav'

function Home() {
  return (
    <>
    <SubNav />
    <NavBar />
    <Hero />
    <MainBody />
    <Footer />
    </>
    
  )
}

export default Home