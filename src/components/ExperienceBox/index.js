import React from 'react';
import { IconContext } from "react-icons";
import { CgWorkAlt } from "react-icons/cg";
import ExperienceCard from '../ExperienceCard/index';
import { Nav, Experience } from './styled';

let experiences = [{
  position: "Full stack Developer",
  place: "Soy Henry",
  date: " Jan 2021 - Argentina",
  info: `- Build a e-commerce web app with React Redux in the frontend,
  taking attention to write well maintained code from the beginning.
          - Made the database using  Postgresql and Sequelize with Dbeaver and
  postman as helping tools.
          - Used passport Local and Bearer strategy with Json web token for
           verifying the user login to site. And Bcrypt for encrypting the
  password in the database.`
}, 
{
  position: "Full stack Developer",
  place: "Soy Henry",
  date: " Jan 2021 - Argentina",
  info: `Build a new mobile e-bank app with React-Native,
  Expo and Redux as frameworks and Paper to give it styles.
 - Made the database using MySQL and Sequelize with Dbeaver
  and postman as helping tools.
 - Used Gmail API for e-mail authentication, fusionAuth for local
  autentication and expo API for loggin with biometricals, Bcrypt for
   encrypting the password in the database.`
}]

const ExperienceBox = () => {
  return (
    <>

      <Nav>
      <IconContext.Provider value={{ color: "#e39556", size: "1.1em" }}>
      <Experience> <CgWorkAlt /> Experience</Experience>
        {experiences.map(i => <ExperienceCard
          position={i.position}
          place={i.place}
          date={i.date}
          info={i.info}
        />)}
        </IconContext.Provider>
      </Nav>

    </>

  )
}

export default ExperienceBox
