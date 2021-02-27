import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {getUser} from '../redux/actions/user'



const Home = () => {

 const dispatch = useDispatch();
  useEffect(() => {
		dispatch(getUser(1));
	}, []);  

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
