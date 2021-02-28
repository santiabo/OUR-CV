import update from 'react-addons-update';

import {
  GET_USER,
  CHANGE_NAME,
  CHANGE_EXPERIENCE,
  CHANGE_EDUCATION,
  CHANGE_SUMMARY,
  CHANGE_SKILLS,
  CHANGE_PASSIONS
} from '../actions/user';

const initialState = {

  firstName: "",
  lastName: "",
  title: "",
  city: "",
  email: "",
  mobile: "",
  experiences: [{
    position: "",
    place: "",
    date: "",
    info: ``
  },
  {
    position: "",
    place: "",
    date: "",
    info: ``
  }],
  education: [{
    title: "",
    place: "",
    date: "",
  },
  {
    title: "",
    place: "",
    date: "",
  }],
  summary: ``,
  skills: [
    {
      skillArea: "",
      skillTool: ``
    },
    {
      skillArea: "",
      skillTool: ``
    },
    {
      skillArea: "",
      skillTool: ``
    },
    {
      skillArea: "",
      skillTool: ``
    }],
  passions: [
    {
      area: "",

      description: ``
    },
    {
      area: "",

      description: ``
    },
  ]

};




const userReducer = (state = initialState, action) => {
  const { user, experience, education, summary, skill, passion} = action;

  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        ...user
      };
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
        ...education
      };
    case CHANGE_SUMMARY:
      return {
        ...state,
        ...summary
      };
    case CHANGE_SKILLS:
      return {
        ...state,
        ...skill
      };
    case CHANGE_PASSIONS:
      return {
        ...state,
        ...passion
      };

    default:
      return state;
  };
};

export default userReducer;
