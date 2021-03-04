import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import PrinterWrapper from '../components/PDF2';
import { Nav, Nav2, Div } from './syled';
import Header from '../components/Header';
import Menu from '../components/Menu'



const Home = () => {

  

  const [open, setOpen] = useState(false);


  return (
    <>
      <Nav>
        <Div>
          <Header open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </Div>
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
