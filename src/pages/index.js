import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PrinterWrapper from '../components/PDF2'




const Home = () => {



  return (
    <>
      <PrinterWrapper>
        <Header />
        <Sidebar />
        <Navbar />
        <Body />
        <Footer />
      </PrinterWrapper>
    </>
  )
}

export default Home
