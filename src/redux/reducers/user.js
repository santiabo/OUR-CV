import {
  GET_USER,
  CHANGE_NAME,
  CHANGE_EXPERIENCE,
  CHANGE_EDUCATION,
  CHANGE_SUMMARY,
  CHANGE_SKILLS,
  CHANGE_PASSIONS,
  CHANGE_AVATAR
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
  const { user, experience, education, summary, skill, passion, avatar} = action;

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

    case CHANGE_EXPERIENCE:{
      const index = state.experiences.findIndex(exp => exp.id === experience.id); //finding index of the item
      const newArray = [...state.experiences]; //making a new array
      newArray[index] = experience;//changing value in the new array
      return {
        ...state,
        experiences: newArray
      }};

    case CHANGE_EDUCATION:
      const index = state.education.findIndex(edu => edu.id === education.id); //finding index of the item
      const newArray = [...state.education]; //making a new array
      newArray[index] = education;//changing value in the new array
      return {
        ...state,
        education: newArray
      };

    case CHANGE_SUMMARY:
    const newObj ={...state.summary}; 
    newObj.description = summary[0].description; 
    return {
        ...state,
        summary: newObj
      };

    case CHANGE_SKILLS:
      const indecs = state.skills.findIndex(s=> s.id === skill.id); 
      const newSkills = [...state.skills]; 
      newSkills[indecs] = skill;

      return {
        ...state,
        skills: newSkills
      };

    case CHANGE_PASSIONS:

      const indes = state.passions.findIndex(p => p.id === passion.id); 
      const newPassion = [...state.passions]; 
      newPassion[indes] = passion;


      return {
        ...state,
        passions: newPassion
      };
      case CHANGE_AVATAR:
        return {
          ...state,
          avatar
        };

    default:
      return state;
  };
};

export default userReducer;
