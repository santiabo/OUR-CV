import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeExperience, destroyExperience, putExperience } from '../../redux/actions/user';
import { Input, Button, ButtonDelete, Input2, H2, Nav, Div } from '../../styles/forms'
import useModal from '../ModalUser/useModal';

const ExperienceForm = () => {
  //------Refactor------------------------------------------
  const loggedUser = useSelector((state) => state.user.loggedUser.id)
  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);

  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };

  const title = () => {
    if (language === "spanish") return "Guardar cambios";
    if (language === "english") return "Save changes";
  }
  //-----------------------------------------------

  const loggedOutCurriculum = () => {
    if (language === "spanish") return { curriculumId: "b" };
    if (language === "english") return { curriculumId: "a" };
  }



  const experiences = useSelector((state) => state.user.curriculums[index()].experiences)
  const dispatch = useDispatch();

  const handleSubmit1 = (formObj, id) => {
    const loggedOutUser = () => {
      const newId = { id: id };
      return { ...formObj, ...loggedOutCurriculum(), ...newId };
    }
    if (!loggedUser) return dispatch(putExperience(loggedOutUser()));
    dispatch(changeExperience(formObj, id))
  }

  const handleCLick = (id) => {
    dispatch(destroyExperience(id))
  }

  const { toggle } = useModal();

  return (
    <>
      {
        experiences.map((e) =>
          <Nav>

           {/*  <Div> */}
              <Form
                initialValues={
                  {
                    position: e.position,
                    date: e.date,
                    place: e.place,
                    info: e.info
                  }
                }
                key={e.id}
                onSubmit={formObj => {
                  handleSubmit1(formObj, e.id);
                }}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <H2>{language === "spanish" ? "Puesto" : "Position"}</H2>
                    <Field key={e.id + "0"} name="position">
                      {({ input }) => (
                        <Input
                          placeholder={e.position}
                          type="text"
                          {...input}
                        />
                      )}
                    </Field>
                    <H2>{language === "spanish" ? "Companía" : "Company"}</H2>
                    <Field key={e.id + "1"} name="place">
                      {({ input }) => (
                        <Input
                          placeholder={e.place}
                          type="text"
                          {...input}
                        />
                      )}
                    </Field>
                    <H2>{language === "spanish" ? "Fecha" : "Date"}</H2>
                    <Field key={e.id + "2"} name="date">
                      {({ input }) => (
                        <Input
                          placeholder={e.date}
                          type="text"
                          {...input}
                        />
                      )}
                    </Field>
                    <H2>{language === "spanish" ? "Descripción" : "Description"}</H2>
                    <Field key={e.id + "3"} name="info">
                      {({ input }) => (
                        <Input2
                          placeholder={e.info}
                          type="text"
                          {...input}
                        />
                      )}
                    </Field>
                    <Div>
                    <Button type="submit" onSubmit={toggle} >{title()}</Button>
                    {loggedUser &&
                      <ButtonDelete onClick={() => handleCLick(e.id)}>
                      {language === "spanish" ? "Eliminar experiencia" : "Delete experience"}
                      </ButtonDelete>
                    }
                    </Div>   
                  </form>
                )}
              </Form>
         {/*    </Div> */}
          </Nav>
        )
      }
    </>
  );
};

export default ExperienceForm;