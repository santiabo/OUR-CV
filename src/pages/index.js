import React from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import PrinterWrapper from '../components/PDF2';
import { Nav, Nav2 } from './syled';
import Header from '../components/Header';




const Home = () => {



  return (
    <>
      <Nav>
      <Header />
      <Nav2>
        <PrinterWrapper>
          <Navbar />
          <Body />
        </PrinterWrapper>
        </Nav2>
      </Nav>
      <Footer />

    </>
  )
}

export default Home
