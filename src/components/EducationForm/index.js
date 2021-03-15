import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeEducation, destroyEducation, putEducation } from '../../redux/actions/user';
import { Input, Button, ButtonDelete, H2, Nav, Div } from '../../styles/forms'
import useModal from '../ModalUser/useModal';


const EducationForm = () => {
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

  const loggedOutCurriculum = () => {
    if (language === "spanish") return { curriculumId: "b" };
    if (language === "english") return { curriculumId: "a" };
  }

  const education = useSelector((state) => state.user.curriculums[index()].education)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {

    const loggedOutUser = () => {
      const newId = { id: id };
      return { ...formObj, ...loggedOutCurriculum(), ...newId };
    };
    if (!loggedUser) return dispatch(putEducation(loggedOutUser()));
    dispatch(changeEducation(formObj, id))
  }

  const handleCLick = (id) => {
    dispatch(destroyEducation(id))
  }

  const { toggle } = useModal();

  return (
    <>
      {
        education.map((e) =>
          <Nav>

            <Div>
              <Form
                initialValues={
                  {
                    title: e.title,
                    date: e.date,
                    place: e.place
                  }
                }
                onSubmit={formObj => {
                  handleSubmit1(formObj, e.id);
                }}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <H2>{language === "spanish" ? "Título" : "Title"}</H2>
                    <Field name="title">
                      {({ input }) => (
                        <Input
                          placeholder={e.title}
                          type="text"
                          {...input}
                        />
                      )}
                    </Field>
                    <H2>{language === "spanish" ? "Lugar" : "Place"}</H2>
                    <Field name="place">
                      {({ input }) => (
                        <Input
                          placeholder={e.place}
                          type="text"
                          {...input}
                        />
                      )}
                    </Field>
                    <H2>{language === "spanish" ? "Fecha" : "Date"}</H2>
                    <Field name="date">
                      {({ input }) => (
                        <Input
                          placeholder={e.date}
                          type="text"
                          {...input}
                        />
                      )}
                    </Field>
                    <Div>
                      <Button type="submit" onSubmit={toggle} >
                      {language === "spanish" ? "Guardar cambios" : "Save changes"}
                      </Button>
                      {loggedUser &&
                      <ButtonDelete onClick={() => handleCLick(e.id)}>
                      {language === "spanish" ? "Eliminar educación" : "Delete education"}
                      </ButtonDelete>
                      }
                    </Div>
                  </form>
                )}
              </Form>
            </Div>
          </Nav>
        )
      }
    </>
  );
};

export default EducationForm;