import React from 'react';
import { IconContext } from "react-icons";
import { FaGraduationCap } from "react-icons/fa";
import EducationCard from '../EducationCard/index';
import { Nav, Education, Icon } from './styled';
import Modal from "../ModalEducation";
import useModal from '../ModalEducation/useModal';
import { useSelector } from 'react-redux';

const EducationBox = () => {

  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);


  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };

  const education = useSelector((state) => state.user.curriculums[index()].education);

  const title = () => {
    if (language === "spanish") return "Educación";
    if (language === "english") return "Education";
  };

  const { isShowing, toggle } = useModal();

  var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <>
      <Nav>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <IconContext.Provider value={{ color: "#567289", size: "1.1em" }}>
          <Education><Icon><FaGraduationCap onClick={toggle} /></Icon>{title()}</Education>
          {education.map(i => <EducationCard
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