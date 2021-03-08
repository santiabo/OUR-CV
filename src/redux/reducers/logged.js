import {LOGIN_USER} from '../actions/logged'
import {LOGOUT_USER} from '../actions/logged'

const initialState = {};

const loggedReducer = (state = initialState, action) => {
  const loggedUser = action.user;

  switch (action.type) {

      case LOGIN_USER:
      return {
        ...state,
       loggedUser
      };

    case LOGOUT_USER:
      return {

        loading: false,
        loggedUser: {
          id: "",
          name: '',
          email: '',
          avatar: ""
        },
        title: "",
        city: "",
        email: "",
        mobile: "logout",
        curriculums: [{
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

        }],
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
      default:
        return state;
    };
  };
  
  export default loggedReducer;