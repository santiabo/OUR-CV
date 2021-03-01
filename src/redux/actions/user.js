import axios from "axios";

export const GET_USER = "GET_USER"
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_EXPERIENCE = "CHANGE_EXPERIENCE";
export const CHANGE_EDUCATION = "CHANGE_EDUCATION";
export const CHANGE_SUMMARY = "CHANGE_SUMMARY";
export const CHANGE_SKILLS = "CHANGE_SKILLS";
export const CHANGE_PASSIONS = "CHANGE_PASSIONS";
export const CHANGE_AVATAR = "CHANGE_AVATAR";

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

export const putEducation = (education) => {
  return {
    type: CHANGE_EDUCATION,
    education
  }
};

export const putSummary = (summary) => {
  return {
    type: CHANGE_SUMMARY,
    summary
  }
};

export const putSkill = (skill) => {
  return {
    type: CHANGE_SKILLS,
    skill
  }
};

export const putPassion = (passion) => {
  return {
    type: CHANGE_PASSIONS,
    passion
  }
};

export const putAvatar = (avatar) => {
  return {
    type: CHANGE_AVATAR,
    avatar
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

export const changeEducation = (formObj, id) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3001/education/${id}`, formObj);
      dispatch(putEducation(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeSummary = (formObj, id) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3001/summary/${id}`, formObj);
      dispatch(putSummary(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeSkill = (formObj, id) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3001/skills/${id}`, formObj);
      dispatch(putSkill(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};


export const changePassion = (formObj, id) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:3001/passions/${id}`, formObj);
      dispatch(putPassion(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeAvatar = (avatar, id) => {
  return async (dispatch) => {
    try {
      avatar = {avatar};
      const res = await axios.put(`http://localhost:3001/user/avatar/${id}`, avatar);
     
      dispatch(putAvatar(res.data.avatar));
    } catch (err) {
      console.log(err);
    }
  };
};

