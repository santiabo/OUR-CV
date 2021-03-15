import React from 'react'
import { bool, func } from 'prop-types';
import { IconContext } from "react-icons";
import { Nav, LinksBox, LinksBox2, BurgerDiv, GoogleDiv, GoogleDiv2 } from './styled'
import { FcGoogle } from 'react-icons/fc';
import { CgMenu } from 'react-icons/cg';
import GoogleLogin, { GoogleLogout } from 'react-google-login'
import { logOutUser } from '../../redux/actions/user';
import { logInUser } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

const Header = ({ open, setOpen }) => {

  const loggedUserId = useSelector((state) => state.user.loggedUser.id)

  const dispatch = useDispatch();

  const handleLogin = async googleData => {
    const res = await fetch("https://our-curriculum.herokuapp.com/auth/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    dispatch(logInUser(data))
  };

  const handleLogout = () => {
    dispatch(logOutUser());
  }

  return (
    <>
      <Nav>

        <LinksBox2>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <BurgerDiv>
              <CgMenu open={open} onClick={() => setOpen(!open)} />
            </BurgerDiv>
          </IconContext.Provider>
        </LinksBox2>
        <LinksBox>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>

            {loggedUserId ?
              <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps => (
                  <GoogleDiv2 onClick={renderProps.onClick}
                    disabled={renderProps.disabled}><FcGoogle /></GoogleDiv2>
                )}
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
              >
              </GoogleLogout>
              :
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps => (
                  <GoogleDiv onClick={renderProps.onClick}
                    disabled={renderProps.disabled}><FcGoogle /></GoogleDiv>
                )}
                buttonText="Log in"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
              />
            }
          </IconContext.Provider>
        </LinksBox>
      </Nav>
    </>
  )
}
Header.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Header;