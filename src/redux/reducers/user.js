import avatar from "../../images/avatar1.png"

import {
  START_REQUEST,
  SUCCESS_REQUEST,
  GET_USER,
  CHANGE_NAME,
  CHANGE_EXPERIENCE,
  CHANGE_EDUCATION,
  CHANGE_SUMMARY,
  CHANGE_SKILLS,
  CHANGE_PASSIONS,
  CHANGE_AVATAR,
  LOGIN_USER,
  LOGOUT_USER,
  AUTO_LOGIN
} from '../actions/user';

const initialState = {
  loading: false,
  loggedUser: {
    id: "",
    name: '',
    email: '',
    avatar: ""
  },
  name:"Santiago Aguirre",
  title: "Full Stack Developer",
  city: "Rio Ceballos",
  email: "santiabo@gmail.com",
  mobile: "+54 1166735627",
  avatar: avatar,
  curriculums: [{
    experiences: [{
      position: "Full stack Developer",
      place: "Soy Henry",
      date: "Jan 2021 - Argentina",
      info: `Built a new mobile e-bank app with React-Native, Expo and Redux as frameworks and Paper to give it styles. - Made the database using MySQL and Sequelize with Dbeaver and postman as helping tools. - Used Gmail API for e-mail authentication, fusionAuth for local autentication and expo API for loggin with biometricals, Bcrypt for encrypting the password in the database.`,
    },
    {
      position: "Full stack Developer",
      place: "Soy Henry",
      date: "Feb 2021 - Argentina",
      info: `Worked on an e-commerce web app with React Redux in the frontend, taking attention to write well maintained code from the beginning. - Made the database using Postgresql and Sequelize with Dbeaver and postman as helping tools. - Used passport Local and Bearer strategy with Json web token for verifying the user login to site. And Bcrypt for encrypting the password in the database.`,
    }],
    education: [{
      title: "Full stack Developer",
      place: "Soy Henry",
      date: "Feb 2021 - Argentina",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      place: "freeCodeCamp",
      date: "Feb 2021 - Argentina",
    }],
    summary:{ description: `Full stack developer, proactive, fast learner with an advanced English level.`},
    skills: [
      {
        area: "Coding",
        tools: `StyledComponents Bootstrap JQuery JavaScript React Redux SQL Sequelize Postgresql Passport`,
      },
      {
        area: "Tools & Technologies",
        tools: `Visual Studio Code Figma Git npm `,
      },
      {
        area: "Project Management",
        tools: `Airtable Trello Scrum Agile`,
      },
      {
        area: "Languages",
        tools: `Spanish(native) English(advanced)`,
      }],
    passions: [
      {
        area: "body",

        description: `Healthy lifestyle, skateboarding and travel.`,
      },
      {
        area: "mind",

        description: `Learning new tecnologies and languages.`,
      },
    ]

  }],


};

const userReducer = (state = initialState, action) => {
  const { user, experience, education, summary, skill, passion } = action;

  switch (action.type) {

    case START_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_REQUEST:
      return {
        ...state,
        loading: false
      };

    case GET_USER:
      return {
        ...state,
        ...user
      };

    case LOGIN_USER:

      return {
        ...state,
        loggedUser: action.user
      };

    case LOGOUT_USER:
      return {
        loading: false,
        loggedUser: {
          id: "",
          name: '',
          email: '',
          avatar: ""
        },
        name:"Santiago Aguirre",
        title: "Full Stack Developer",
        city: "Rio Ceballos",
        email: "santiabo@gmail.com",
        mobile: "+54 1166735627",
        avatar: avatar,
        curriculums: [{
          experiences: [{
            position: "Full stack Developer",
            place: "Soy Henry",
            date: "Jan 2021 - Argentina",
            info: `Built a new mobile e-bank app with React-Native, Expo and Redux as frameworks and Paper to give it styles. - Made the database using MySQL and Sequelize with Dbeaver and postman as helping tools. - Used Gmail API for e-mail authentication, fusionAuth for local autentication and expo API for loggin with biometricals, Bcrypt for encrypting the password in the database.`,
          },
          {
            position: "Full stack Developer",
            place: "Soy Henry",
            date: "Feb 2021 - Argentina",
            info: `Worked on an e-commerce web app with React Redux in the frontend, taking attention to write well maintained code from the beginning. - Made the database using Postgresql and Sequelize with Dbeaver and postman as helping tools. - Used passport Local and Bearer strategy with Json web token for verifying the user login to site. And Bcrypt for encrypting the password in the database.`,
          }],
          education: [{
            title: "Full stack Developer",
            place: "Soy Henry",
            date: "Feb 2021 - Argentina",
          },
          {
            title: "JavaScript Algorithms and Data Structures",
            place: "freeCodeCamp",
            date: "Feb 2021 - Argentina",
          }],
          summary:{ description: `Full stack developer, proactive, fast learner with an advanced English level.`},
          skills: [
            {
              area: "Coding",
              tools: `StyledComponents Bootstrap JQuery JavaScript React Redux SQL Sequelize Postgresql Passport`,
            },
            {
              area: "Tools & Technologies",
              tools: `Visual Studio Code Figma Git npm `,
            },
            {
              area: "Project Management",
              tools: `Airtable Trello Scrum Agile`,
            },
            {
              area: "Languages",
              tools: `Spanish(native) English(advanced)`,
            }],
          passions: [
            {
              area: "body",
      
              description: `Healthy lifestyle, skateboarding and travel.`,
            },
            {
              area: "mind",
      
              description: `Learning new tecnologies and languages.`,
            },
          ]
      
        }]
       

      };

    case AUTO_LOGIN:
      return {
        ...state,
        user: action.user
      };

    case CHANGE_NAME:
      return {
        ...state,
        ...user
      };

    case CHANGE_EXPERIENCE: {

      const arrayIndex = state.curriculums.findIndex(curr => curr.id === experience.curriculumId);
      const experienceIndex = state.curriculums[arrayIndex].experiences.findIndex(exp => exp.id === experience.id);
      const newArray = [...state.curriculums]; //making a new array
      newArray[arrayIndex].experiences[experienceIndex] = experience;//saving the value 
      return {
        ...state,
        curriculums: newArray
      }
    };


    case CHANGE_EDUCATION:

      const arrayIndex = state.curriculums.findIndex(curr => curr.id === action.education.curriculumId);
      const educationIndex = state.curriculums[arrayIndex].education.findIndex(edu => edu.id === education.id);
      const newArray = [...state.curriculums]; //making a new array
      newArray[arrayIndex].education[educationIndex] = education;//changing value in the new array
      return {
        ...state,
        education: newArray
      };

    case CHANGE_SUMMARY:

      const arrayISummary = state.curriculums.findIndex(sum => sum.id === action.summary[0].curriculumId);
      const newArr = [...state.curriculums];
      newArr[arrayISummary].summary = summary[0];
      return {
        ...state,
        summary: newArr
      };

    case CHANGE_SKILLS:

      const arrayISkills = state.curriculums.findIndex(curr => curr.id === action.skill.curriculumId);
      const skillIndex = state.curriculums[arrayIndex].skills.findIndex(sk => sk.id === action.skill.id);
      const newSkills = [...state.curriculums]; //making a new array
      newSkills[arrayISkills].skills[skillIndex] = action.skill;//changing value in the new array    
      return {
        ...state,
        skills: newSkills
      };

    case CHANGE_PASSIONS:

      const arrayIPassions = state.curriculums.findIndex(curr => curr.id === action.passion.curriculumId);
      const passionIndex = state.curriculums[arrayIPassions].passions.findIndex(pa => pa.id === action.passion.id);
      const newPassion = [...state.curriculums]; //making a new array
      newPassion[arrayIPassions].passions[passionIndex] = action.passion;//changing value in the new array  
      return {
        ...state,
        passions: newPassion
      };

    case CHANGE_AVATAR:
      return {
        ...state,
        avatar: action.avatar
      };

    default:
      return state;
  };
};

export default userReducer;
