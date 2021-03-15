import React from 'react';
import { useSelector } from 'react-redux';
import { IconContext } from "react-icons";
import { FaWhatsapp } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { Nav, TooltipText, LinksBox, TooltipBox } from './styled';
import { FiMail } from 'react-icons/fi';


const ContactCard = () => {

  const email = useSelector((state) => state.user.email);
  const mobile = useSelector((state) => state.user.mobile);
  const city = useSelector((state) => state.user.city);
  
  const sendEmail = function() { 
    window.open( 
      `mailto:${email}?subject=Hello !`, "_blank"); 
} 

const sendMessage = function() { 
  window.open( 
    `https://api.whatsapp.com/send?phone=${mobile}`, "_blank"); 
} 

const showMap = function() { 
  window.open( 
    `https://www.google.com/maps/search/?api=1&query=${city}`, "_blank"); 
} 

  return (
    <>
      <Nav> <IconContext.Provider value={{ color: "#0D070C", size: "1.1em" }}>
        <LinksBox>

          <TooltipText onClick={sendEmail}>
            <FiMail /> &nbsp; {email}
          </TooltipText>

          <TooltipBox>
            <p>Send me an email</p>
          </TooltipBox>

          <TooltipText onClick={sendMessage}>
            <FaWhatsapp /> &nbsp; {mobile}
          </TooltipText>

          <TooltipBox>
            <p>Send me a message </p>
          </TooltipBox>

          <TooltipText onClick={showMap}>
            <MdPlace />&nbsp; {city}
          </TooltipText>

          
          <TooltipBox>
            <p>I live here now</p>
          </TooltipBox>

        </LinksBox>
      </IconContext.Provider>
      </Nav>
    </>
  )
};

export default ContactCard;