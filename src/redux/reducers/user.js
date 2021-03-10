import initialState from "./initialState"

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
} from '../actions/user';

const userReducer = (state = initialState(), action) => {
  const { user, experience, education, summary } = action;

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
      return initialState()

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
      const skillIndex = state.curriculums[arrayISkills].skills.findIndex(sk => sk.id === action.skill.id);
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
