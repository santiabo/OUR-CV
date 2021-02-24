import React from 'react';
import { IconContext } from "react-icons";
import { FaGraduationCap } from "react-icons/fa";
import EducationCard from '../EducationCard/index';
import { Nav, Education } from './styled';

let formations = [{
  title: "Full stack Developer",
  place: "Soy Henry",
  date: " Feb 2021 - Argentina",
},
{
  title: "JavaScript Algorithms and Data Structures",
  place: "freeCodeCamp",
  date: " Feb 2021 - Argentina",
}]

const EducationBox = () => {

  var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <>
      <Nav>
        <IconContext.Provider value={{ color: "#567289", size: "1.1em" }}>
          <Education> <FaGraduationCap /> Education</Education>
          {formations.map(i => <EducationCard
            key={ID()}
            title={i.title}
            place={i.place}
            date={i.date}
            info={i.info}
          />)}
        </IconContext.Provider>
      </Nav>
    </>
  )
}

export default EducationBox