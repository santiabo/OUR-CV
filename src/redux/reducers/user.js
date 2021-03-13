import initialState from "./initialState"

import {
  START_REQUEST,
  SUCCESS_REQUEST,
  GET_USER,
  CHANGE_NAME,
  CHANGE_EXPERIENCE,
  CREATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  CHANGE_EDUCATION,
  CREATE_EDUCATION,
  DELETE_EDUCATION,
  CHANGE_SUMMARY,
  CHANGE_SKILLS,
  CREATE_SKILLS,
  DELETE_SKILLS,
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

    case CREATE_EXPERIENCE:
      const arrayIndex2 = state.curriculums.findIndex(curr => curr.id == action.experience.curriculumId);
      const newExp = [...state.curriculums];
      const arrExpe = [action.experience]
      newExp[arrayIndex2].experiences = [...newExp[arrayIndex2].experiences, ...arrExpe];
      return {
        ...state,
        curriculums: newExp
      }

    case DELETE_EXPERIENCE:
      const arrayIndex3 = state.curriculums.findIndex(curr => curr.id == action.experience.curriculumId);
      const experienceIndex4 = state.curriculums[arrayIndex3].experiences.findIndex(exp => exp.id === experience.id);
      const newArray3 = [...state.curriculums]; //making a new array
      newArray3[arrayIndex3].experiences.splice(experienceIndex4, 1);//removing the experience object. 
      return {
        ...state,
        curriculums: newArray3
      }

    case CREATE_EDUCATION:
      const arrayIndex4 = state.curriculums.findIndex(curr => curr.id == action.education.curriculumId);
      const newEducation = [...state.curriculums];
      const arrEducation = [action.education]
      newEducation[arrayIndex4].education = [...newEducation[arrayIndex4].education, ...arrEducation];
      return {
        ...state,
        curriculums: newEducation
      }

    case DELETE_EDUCATION:
      const arrayIndex5 = state.curriculums.findIndex(curr => curr.id == action.education.curriculumId);
      const educationIndex2 = state.curriculums[arrayIndex5].education.findIndex(edu => edu.id === action.education.id);
      const newArray4 = [...state.curriculums]; //making a new array
      newArray4[arrayIndex5].education.splice(educationIndex2, 1);//removing the experience object. 
      return {
        ...state,
        curriculums: newArray4
      }

    case CREATE_SKILLS:
      const arrayIndex6 = state.curriculums.findIndex(curr => curr.id == action.skill.curriculumId);
      const newSkill = [...state.curriculums];
      const arrSkill = [action.skill]
      newSkill[arrayIndex6].skills = [...newSkill[arrayIndex6].skills, ...arrSkill];
      return {
        ...state,
        curriculums: newSkill
      }

    case DELETE_SKILLS:
      const arrayIndex7 = state.curriculums.findIndex(curr => curr.id == action.skill.curriculumId);
      const skillIndex2 = state.curriculums[arrayIndex7].skills.findIndex(skill => skill.id === action.skill.id);
      const newSkill2 = [...state.curriculums]; //making a new array
      newSkill2[arrayIndex7].skills.splice(skillIndex2, 1);//removing the experience object. 
      return {
        ...state,
        curriculums: newSkill2
      }

    default:
      return state;
  };
};

export default userReducer;
