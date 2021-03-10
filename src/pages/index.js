import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import PrinterWrapper from '../components/PDF2';
import { Nav, BodyDiv, HeaderDiv } from './syled';
import Header from '../components/Header';
import Menu from '../components/Menu'

const Home = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <HeaderDiv>
          <Header open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </HeaderDiv>
        <BodyDiv>
          <PrinterWrapper>
            <Navbar />
            <Body />
          </PrinterWrapper>
        </BodyDiv>
      </Nav>
      <Footer />
    </>
  )
}

export default Home
