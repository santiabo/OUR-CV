import React from 'react';
import { RiHomeGearLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
import SkillCard from '../SkillCard/index';
import { Nav, Skills, Icon } from './styled';
import Modal from "../ModalSkills";
import useModal from '../ModalSkills/useModal';
import { useSelector } from 'react-redux';

const SkillsBox = () => {

  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);

  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };

  const skills = useSelector((state) => state.user.curriculums[index()].skills);

  const title = () => {
    if (language === "spanish") return "Habilidades";
    if (language === "english") return "Skills";
  }

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
        <IconContext.Provider value={{ color: "#3e4f4d", size: "1.1em" }}>
          <Skills><Icon> <RiHomeGearLine onClick={toggle} /></Icon> {title()} </Skills>
          {skills.map(i => <SkillCard
            key={ID()}
            skillArea={i.area}
            skillTool={i.tools}
          />)}
        </IconContext.Provider>
      </Nav>
    </>
  )
}

export default SkillsBox;