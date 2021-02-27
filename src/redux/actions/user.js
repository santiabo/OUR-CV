import axios from "axios";

export const GET_USER = "GET_USER"
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_EXPERIENCE = "CHANGE_EXPERIENCE";
export const CHANGE_EDUCATION = "CHANGE_EDUCATION";
export const CHANGE_SUMMARY = "CHANGE_SUMMARY";
export const CHANGE_SKILLS = "CHANGE_SKILLS";
export const CHANGE_PASSIONS = "CHANGE_PASSIONS";

export const getUserData = (user) => {
  return {
    type: GET_USER,
    user
  }
}

export const putUser = (user) => {
  return {
    type: CHANGE_NAME,
    user
  }
};

export const putExperience = (experience) => {
  return {
    type: CHANGE_EXPERIENCE,
    experience
  }
};

export const changeEducation = (education) => {
  return {
    type: CHANGE_EDUCATION,
    education
  }
};

export const changeSummary = (summary) => {
  return {
    type: CHANGE_SUMMARY,
    summary
  }
};

export const changeSkills = (summary) => {
  return {
    type: CHANGE_SKILLS,
    summary
  }
};

export const changePassions = (passion) => {
  return {
    type: CHANGE_PASSIONS,
    passion
  }
};


export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/user/${id}`);
      dispatch(getUserData(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeName = (formObj, id) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3001/user/${id}`, formObj);
      dispatch(putUser(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeExperience = (formObj, id) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3001/experience/${id}`, formObj);
      dispatch(putExperience(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

