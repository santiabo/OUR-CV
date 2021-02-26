import React, { useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Header />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Body />
      <Footer />
    </>
  )
}

export default Home
