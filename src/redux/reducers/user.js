/* import update from 'react-addons-update'; */

import {
  CHANGE_NAME,
  CHANGE_EXPERIENCE,
  CHANGE_EDUCATION,
  CHANGE_SUMMARY,
  CHANGE_SKILLS,
  CHANGE_PASSIONS
} from '../actions/user';

const initialState = {

  name: "Santiago Aguirre",
  title: "Full Stack Developer",
  city: "Rio Ceballos",
  email: "santiabo@gmail.com",
  mobile: "+54 11 66735627",
  experience: [{
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
  }],
  education: [{
    title: "Full stack Developer",
    place: "Soy Henry",
    date: " Feb 2021 - Argentina",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    place: "freeCodeCamp",
    date: " Feb 2021 - Argentina",
  }],
  summary: `Full stack developer, proactive,
  fast learner with an advanced English level.`,
  skills: [
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
    }],
  passions: [
    {
      area: "healt",

      description: `Healthy lifestyle, individual sports and travel.`
    },
    {
      area: "healt",

      description: `Learning new tecnologies and languages.`
    },
  ]

};


const userReducer = (state = initialState, action) => {
  const user = action.user;
  const experience = action.experience;
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        ...user
      };
    case CHANGE_EXPERIENCE:
      return {
        ...state,
        ...experience
      };
    case CHANGE_EDUCATION:
      return {
        ...state,
        user: { ...state }
      };
    case CHANGE_SUMMARY:
      return {
        ...state,
        ...user
      };
    case CHANGE_SKILLS:
      return {
        ...state,
        ...user
      };
    case CHANGE_PASSIONS:
      return {
        ...state,
        ...user
      };

    default:
      return state;
  };
};

export default userReducer;
