export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";


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


export const logInUser = (user) => {
  return async (dispatch) => {
    try {
      /*  dispatch(startRequest()); */
 /*      const res = await axios.post(`/auth/login`, { ...email, ...password });
      const { token, user } = res.data;  */

      dispatch(loginUser(user));
/*       localStorage.setItem("token", token);
      dispatch(addUserCart(user.id));*/
     /*  dispatch(successRequest()); */
    } catch (err) {
      alert(err.response.data) 
/*       dispatch(setError(err)); */
    }
  };
};