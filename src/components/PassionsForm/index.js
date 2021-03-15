import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changePassion, putPassion } from '../../redux/actions/user';
import { Input, Button, H2, Nav, Input2 } from '../../styles/forms'
import useModal from '../ModalUser/useModal';

const PassionsForm = () => {

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

    const loggedOutCurriculum = () => {
      if (language === "spanish") return { curriculumId: "b" };
      if (language === "english") return { curriculumId: "a" };
    }
    //-----------------------------------------------

  const passions = useSelector((state) => state.user.curriculums[index()].passions)

  const dispatch = useDispatch();
  
  const handleSubmit1 = (formObj, id) => {
    const loggedOutUser = () => {
      const newId = { id: id };
      return { ...formObj, ...loggedOutCurriculum(), ...newId };
  
    }
    if (!loggedUser) return dispatch(putPassion(loggedOutUser())); 
    
    dispatch(changePassion(formObj, id))
  }

  const { toggle } = useModal();
  /* const { handleClose } = props; */


  return (
    <>
      {
        passions.map((e) =>
        <Nav>
          <Form
                        initialValues={
                {
                  area: e.area,
                  description: e.description,
                }
              }
            onSubmit={formObj => {
              handleSubmit1(formObj, e.id);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
              <H2>{language === "spanish" ? "Categoria": "Category"}</H2>
              <Field name="area">
                  {({ input }) => (
                    <Input
                      placeholder={e.area}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <H2>{language === "spanish" ? "Descripción": "Description"}</H2>
                <Field name="description">
                  {({ input }) => (
                    <Input2
                      placeholder={e.description}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Button type="submit" onSubmit={toggle} >{language === "spanish" ? "Guardar cambios": "Save changes"}</Button>
              </form>
            )}
          </Form>
          </Nav>
        )
      }
    </>
  );
};

export default PassionsForm;