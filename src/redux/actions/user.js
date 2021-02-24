export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_EXPERIENCE = "CHANGE_EXPERIENCE";
export const CHANGE_EDUCATION = "CHANGE_EDUCATION";
export const CHANGE_SUMMARY = "CHANGE_SUMMARY";
export const CHANGE_SKILLS = "CHANGE_SKILLS";
export const CHANGE_PASSIONS = "CHANGE_PASSIONS";

export const changeName = (user) => {
  return {
    type: CHANGE_NAME,
    user
  }
};

export const changeExperience = (user) => {
  return {
    type: CHANGE_EXPERIENCE,
    user
  }
};

export const changeEducation = (user) => {
  return {
    type: CHANGE_EDUCATION,
    user
  }
};

export const changeSummary = (user) => {
  return {
    type: CHANGE_SUMMARY,
    user
  }
};

export const changeSkills = (user) => {
  return {
    type: CHANGE_SKILLS,
    user
  }
};

export const changePassions = (user) => {
  return {
    type: CHANGE_PASSIONS,
    user
  }
};

