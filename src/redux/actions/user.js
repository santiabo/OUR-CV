import axios from "axios";


//--------------put in "constants" folder ! !
export const GET_USER = "GET_USER"
export const SET_AUTH_USER = "SET_AUTH_USER";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_EXPERIENCE = "CHANGE_EXPERIENCE";
export const CREATE_EXPERIENCE = "CREATE_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE"
export const CHANGE_EDUCATION = "CHANGE_EDUCATION";
export const CREATE_EDUCATION = "CREATE_EDUCATION";
export const DELETE_EDUCATION = "DELETE_EDUCATION"
export const CHANGE_SUMMARY = "CHANGE_SUMMARY";
export const CHANGE_SKILLS = "CHANGE_SKILLS";
export const CREATE_SKILLS = "CREATE_SKILLS";
export const DELETE_SKILLS = "DELETE_SKILLS";
export const CHANGE_PASSIONS = "CHANGE_PASSIONS";
export const CHANGE_AVATAR = "CHANGE_AVATAR";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const START_REQUEST = "START_REQUEST";
export const SUCCESS_REQUEST = "SUCCESS_REQUEST";



const startRequest = () => {
  return {
    type: START_REQUEST
  };
};

const successRequest = () => {
  return {
    type: SUCCESS_REQUEST,
  };
};

const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    user
  };
};

export const logOutUser = (user) => {
  return {
    type: LOGOUT_USER,
    user
  };
};

export const setUser = (user) => {
  return {
    type: SET_AUTH_USER,
    user
  }
}

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

export const postExperience = (experience) => {
  return {
    type: CREATE_EXPERIENCE,
    experience
  }
}

export const deleteExperience = (experience) => {
  return {
    type: DELETE_EXPERIENCE,
    experience
  }
}

export const putEducation = (education) => {
  return {
    type: CHANGE_EDUCATION,
    education
  }
};

export const postEducation = (education) => {
  return {
    type: CREATE_EDUCATION,
    education
  }
}

export const deleteEducation = (education) => {
  return {
    type: DELETE_EDUCATION,
    education
  }
}

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

export const postSkills = (skill) => {
  return {
    type: CREATE_SKILLS,
    skill
  }
}

export const deleteSkills = (skill) => {
  return {
    type: DELETE_SKILLS,
    skill
  }
}

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



//----------------Put in the "services" folder ! !


export const logInUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(startRequest());


      dispatch(loginUser(user));

      dispatch(successRequest());
    } catch (err) {
      alert(err.response.data)

    }
  };
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
      console.log("RES DATA > > > ", res.data)
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
      avatar = { avatar };
      const res = await axios.put(`http://localhost:3001/user/avatar/${id}`, avatar);
      dispatch(putAvatar(res.data.avatar));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createExperience = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/experience/${id}`);
      dispatch(postExperience(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const destroyExperience = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3001/experience/${id}`);
      dispatch(deleteExperience(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createEducation = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/education/${id}`);
      dispatch(postEducation(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const destroyEducation = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3001/education/${id}`);
      dispatch(deleteEducation(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createSkills = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/skills/${id}`);
      dispatch(postSkills(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const destroySkills = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:3001/skills/${id}`);
      dispatch(deleteSkills(res.data));
      console.log("RES DATA >", res.data)
    } catch (err) {
      console.log(err);
    }
  };
};




