import React from 'react'
import {RiHomeGearLine} from 'react-icons/ri'
import { IconContext } from "react-icons";
import SkillCard from '../SkillCard/index'
import { Nav, Skills } from './styled'

let skills = [
  {
    skillArea: "Coding",
    skillTool: `HTML CSS/CSS3 LESS StyledComponents Bootstrap
 JQuery JavaScript  React  Redux  SQL Sequelize  Postgresql Passport`
  },
  {
    skillArea: "Tools & Technologies",
    skillTool: `Visual Studio Code  Figma  Git  npm `
  },
  {
    skillArea: "Project Management",
    skillTool: `Airtable  Trello  Scrum Agile`
  },
  {
    skillArea: "Languages",
    skillTool: `Spanish(native)   English(advanced)`
  }];

const SkillsBox = () => {
  return (
    <>

      <Nav>
      <IconContext.Provider value={{ color: "#3e4f4d", size: "1.1em" }}>
        <Skills><RiHomeGearLine /> Skills </Skills>
        {skills.map(i => <SkillCard
          skillArea={i.skillArea}
          skillTool={i.skillTool}
        />)}
        </IconContext.Provider>
      </Nav>

    </>

  )
}

export default SkillsBox;