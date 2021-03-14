
import avatar from "../../images/avatarMe.png";

export default function initialState() {
  return ({
    id:"a",
    loading: false,
    loggedUser: {
      id: "",
      name: '',
      email: '',
      avatar: ""
    },
    name: "Santiago Aguirre",
    title: "Full Stack Developer",
    city: "Rio Ceballos",
    email: "santiabo@gmail.com",
    mobile: "+54 1166735627",
    avatar: avatar,
    curriculums: [{
      id: "a",
      language: "english",
      experiences: [{
        "id": "a",
        position: "Full stack Developer",
        place: "Soy Henry",
        date: "Jan 2021 - Argentina",
        info: `Built a new mobile e-bank app with React-Native, Expo and Redux as frameworks and Paper to give it styles. - Made the database using MySQL and Sequelize with Dbeaver and postman as helping tools. - Used Gmail API for e-mail authentication, fusionAuth for local autentication and expo API for loggin with biometricals, Bcrypt for encrypting the password in the database.`,
        "curriculumId": "a"
      },
      {
        "id": "b",
        position: "Full stack Developer",
        place: "Soy Henry",
        date: "Feb 2021 - Argentina",
        info: `Worked on an e-commerce web app with React Redux in the frontend, taking attention to write well maintained code from the beginning. - Made the database using Postgresql and Sequelize with Dbeaver and postman as helping tools. - Used passport Local and Bearer strategy with Json web token for verifying the user login to site. And Bcrypt for encrypting the password in the database.`,
        "curriculumId": "a"
      }],
      education: [{
        "id": "a",
        title: "Full stack Developer",
        place: "Soy Henry",
       
        "curriculumId": "a"
      },
      {
        "id": "b",
        title: "JavaScript Algorithms and Data Structures",
        place: "freeCodeCamp",
      
        "curriculumId": "a"
      }],
      summary: {
        "id": "a",
        description: `Full stack developer, proactive, fast learner with an advanced English level.`,
        "curriculumId": "a"
      },
      skills: [
        {
          "id": "a",
          area: "Coding",
          tools: `StyledComponents Bootstrap JQuery JavaScript React Redux SQL Sequelize Postgresql Passport`,
          "curriculumId": "a"
        },
        {
          "id": "b",
          area: "Tools & Technologies",
          tools: `Visual Studio Code Figma Git npm `,
          "curriculumId": "a"
        },
        {
          "id": "c",
          area: "Project Management",
          tools: `Airtable Trello Scrum Agile`,
          "curriculumId": "a"
        },
        {
          "id": "d",
          area: "Languages",
          tools: `Spanish(native) English(advanced)`,
          "curriculumId": "a"
        }],
      passions: [
        {
          "id": "a",
          area: "body",
          description: `Healthy lifestyle, skateboarding and travel.`,
          "curriculumId": "a"
        },
        {
          "id": "b",
          area: "mind",
          description: `Learning new tecnologies and languages.`,
          "curriculumId": "a"
        },
      ]
    },
    {
      id: "b",
      language: "spanish",
      experiences: [{
        "id": "c",
        position: "Full stack Developer",
        place: "Soy Henry",
        date: "Jan 2021 - Argentina",
        info: `Creó una nueva aplicación de banco electrónico móvil con React-Native, Expo y Redux como frameworks y Paper para darle estilo. - Hice la base de datos usando MySQL y Sequelize con Dbeaver y cartero como herramientas de ayuda. - Se utilizó la API de Gmail para la autenticación de correo electrónico, fusionAuth para local API de autenticación y expo para loggin con biométricos, Bcrypt para cifrar la contraseña en la base de datos .`,
        "curriculumId": "b"
      },
      {
        "id": "d",
        position: "Full stack Developer",
        place: "Soy Henry",
        date: "Feb 2021 - Argentina",
        info: `Trabajé en una aplicación web de comercio electrónico con React Redux en la interfaz, prestando atención a escribir código bien mantenido desde el principio. - Realicé la base de datos usando Postgresql y Sequelize con Dbeaver y cartero como herramientas de ayuda. - Se utilizó la estrategia de pasaporte local y portador con el token web Json para verificar el inicio de sesión del usuario en el sitio. Y Bcrypt para cifrar el contraseña en la base de datos.`,
        "curriculumId": "b"
      }],
      education: [{
        "id": "c",
        title: "Full stack Developer",
        place: "Soy Henry",
        date: "Feb 2021 - Argentina",
        "curriculumId": "b"
      },
      {
        "id": "d",
        title: "JavaScript Algorithms and Data Structures",
        place: "freeCodeCamp",
        date: "Feb 2021 - Argentina",
        "curriculumId": "b"
      }],
      summary: {
        "id": "b",
        description: `Dessarrollador web full stack, proactivo con avanzado nivel de ingles.`,
        "curriculumId": "b"
      },
      skills: [
        {
          "id": "e",
          area: "Coding",
          tools: `StyledComponents Bootstrap JQuery JavaScript React Redux SQL Sequelize Postgresql Passport`,
          "curriculumId": "b"
        },
        {
          "id": "f",
          area: "Tools & Technologies",
          tools: `Visual Studio Code Figma Git npm `,
          "curriculumId": "b"
        },
        {
          "id": "g",
          area: "Project Management",
          tools: `Airtable Trello Scrum Agile`,
          "curriculumId": "b"
        },
        {
          "id": "h",
          area: "Languages",
          tools: `Spanish(native) English(advanced)`,
          "curriculumId": "b"
        }],
      passions: [
        {
          "id": "c",
          area: "body",
          description: `Vida sana, skateboard y viajar.`,
          "curriculumId": "b"
        },
        {
          "id": "d",
          area: "mind",
          description: `Aprender nuevas tecnologias e idiomas.`,
          "curriculumId": "b"
        },
      ]
    }
    ]
  });
}



