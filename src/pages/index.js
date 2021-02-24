import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import Body from '../components/Body'
import Footer from '../components/Footer'


const Home = () => {

  const dispatch = useDispatch();

/*   useEffect(() => {
		dispatch(getUser());
	},[]); */

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Body />
      <Footer />
    </>
  )
}

export default Home
