import React from 'react';
import { IconContext } from "react-icons";
import { CgWorkAlt } from "react-icons/cg";
import { useSelector } from 'react-redux';
import ExperienceCard from '../ExperienceCard/index';
import { Nav, Experience, Icon } from './styled';
import Modal from "../ModalExperience";
import useModal from '../ModalExperience/useModal';

const ExperienceBox = () => {

  const experience = useSelector((state) => state.user.experience);

  var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };

  const { isShowing, toggle } = useModal();

  return (
    <>
      <Nav>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <IconContext.Provider value={{ color: "#e39556", size: "1.1em" }}>
          <Experience><Icon> <CgWorkAlt onClick={toggle} /></Icon>Experience</Experience>
          {experience.map(i => <ExperienceCard
            key={ID()}
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
