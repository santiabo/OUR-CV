
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
    city: "Argentina",
    email: "santiabo@gmail.com",
    mobile: "+541166735627",
    avatar: avatar,
    curriculums: [{
      id: "a",
      language: "english",
      experiences: [{
        id: "a",
        position: "Academic experience - Full stack Developer",
        place: "Soy Henry",
        date: "February 2021",
        info: `Developed a mobile e-bank app with React-Native, Expo and Redux as frameworks, used Paper for the styles.
        Made the database using MySQL and Sequelize with Dbeaver and postman as helping tools.
        Used Gmail API for e-mail authentication, fusionAuth for local autentication and expo API for loggin with biometricals, Bcrypt for encrypting the password in the database.`,
        curriculumId: "a"
      },
      {
        id: "b",
        position: "Academic experience - Full stack Developer",
        place: "Soy Henry",
        date: "January 2021",
        info: `Worked on an e-commerce with Scrum as framework method and Trello to manage the project.
        In the front-end all work was done with React, Redux and StyledComponents.
        For the database we worked with Postgresql and Sequelize with Dbeaver and postman as helping tools.
        Used passport Local and Bearer strategy with Json web token for verifying the user login to site. And Bcrypt for encrypting the password in the database.`,
        curriculumId: "a"
      }],
      education: [{
        id: "a",
        title: "Full stack Developer",
        place: "Soy Henry",
        date: "February 2021",
        curriculumId: "a"
      },
      {
        id: "b",
        title: "JavaScript Algorithms and Data Structures",
        place: "freeCodeCamp",
        date: "March 2021",
        curriculumId: "a"
      }],
      summary: {
        id: "a",
        description: `Full stack developer, proactive, fast learner, with proficent English level. Curious by nature.`,
        curriculumId: "a"
      },
      skills: [
        {
          id: "a",
          area: "Coding",
          tools: `JavaScript React React-Native Redux SQL Sequelize Postgresql Passport StyledComponents Bootstrap `,
          curriculumId: "a"
        },
        {
          id: "b",
          area: "Tools & Technologies",
          tools: `Visual Studio Code Figma Git npm `,
          curriculumId: "a"
        },
        {
          id: "c",
          area: "Project Management",
          tools: `Airtable Trello Scrum Agile`,
          curriculumId: "a"
        },
        {
          id: "d",
          area: "Languages",
          tools: `Spanish(native) English(proficent), Portuguese(Intermediate)`,
          curriculumId: "a"
        }],
      passions: [
        {
          id: "a",
          area: "body",
          description: `Healthy lifestyle, skateboarding, trial running and travel.`,
          curriculumId: "a"
        },
        {
          id: "b",
          area: "mind",
          description: `Learning new tecnologies and languages.`,
          curriculumId: "a"
        },
      ]
    },
    {
      id: "b",
      language: "spanish",
      experiences: [{
        "id": "c",
        position: "Experiencia académica - Full stack Developer",
        place: "Soy Henry",
        date: "Febrero 2021",
        info: ` Desarrollé, utilizando la metodologia Scrum, una aplicación de banca electrónica móvil. Para el front-end utilizé  React-Native, Expo y Redux como frameworks. Para los estilos se utilizó Paper. En el back end; para la base de datos utilizé MySQL y Sequelize, con MySQL workbench y Postman como herramientas de ayuda. - Se utilizó la API de Gmail para la autenticación de correo electrónico, fusionAuth para la autenticación local del usuario y expo para loggin con biométricos, Bcrypt para cifrar la contraseña en la base de datos .`,
        "curriculumId": "b"
      },
      {
        "id": "d",
        position: "Experiencia académica - Full stack Developer",
        place: "Soy Henry",
        date: "Enero 2021",
        info: `Trabajé en una aplicación web de comercio electrónico con React-Redux, Se utilizó la metodoligía de trabajo Scrum con Trello como gestor del proyecto. Desarrollé la base de datos usando Postgresql y Sequelize con Dbeaver y Postman. Se utilizó Passport Local y Bearer strategy y JSON Web Tokens para verificar el inicio de sesión del usuario en el sitio. Con Bcrypt se cifró el contraseña del usuario en la base de datos.`,
        "curriculumId": "b"
      }],
      education: [{
        "id": "c",
        title: "Full stack Developer",
        place: "Soy Henry",
        date: "Febrero 2021",
        "curriculumId": "b"
      },
      {
        "id": "d",
        title: "JavaScript Algorithms and Data Structures",
        place: "freeCodeCamp",
        date: "Marzo 2021",
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
          tools: `JavaScript React Redux SQL Sequelize Postgresql Passport StyledComponents Bootstrap JQuery `,
          "curriculumId": "b"
        },
        {
          "id": "f",
          area: "Herramientas y tecnologias",
          tools: `Visual Studio Code Figma Git npm `,
          "curriculumId": "b"
        },
        {
          "id": "g",
          area: "Gestión de proyectos",
          tools: `Airtable Trello Scrum Agile`,
          "curriculumId": "b"
        },
        {
          "id": "h",
          area: "Idiomas",
          tools: `Español(nativo) Inglés(avanzado) Portugués(medio) `,
          "curriculumId": "b"
        }],
      passions: [
        {
          "id": "c",
          area: "cuerpo",
          description: `Vida sana, skateboarding, trial running y viajar.`,
          "curriculumId": "b"
        },
        {
          "id": "d",
          area: "mente",
          description: `Aprender nuevas tecnologias e idiomas.`,
          "curriculumId": "b"
        },
      ]
    }
    ]
  });
}



