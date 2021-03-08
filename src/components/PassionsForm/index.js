import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changePassion } from '../../redux/actions/user';
import { Input, Button, H2, Nav, Input2, Div } from './styled'
import useModal from '../ModalUser/useModal';

const PassionsForm = (props) => {

    //------Refactor------------------------------------------
    const language = useSelector((state) => state.language.language);
    const curriculums = useSelector((state) => state.user.curriculums);
  
    const index = () => {
      let index = 0;
      for (var i = 0; i < curriculums.length; i++) {
        if (curriculums[i].language === language) index = i;
      }
      return index;
    };
  /* 
    const title = () => {
      if (language === "spanish") return "Experiencia";
      if (language === "english") return "Experience";
    } */
    //-----------------------------------------------

  const passions = useSelector((state) => state.user.curriculums[index()].passions)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
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
            onSubmit={formObj => {
              handleSubmit1(formObj, e.id);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
              <H2>{language === "spanish" ? "Categoria": "Category"}</H2>
              <Field name="area">
                  {({ input }) => (
                    <Input2
                      placeholder={e.area}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <H2>{language === "spanish" ? "Descripción": "Description"}</H2>
                <Field name="description">
                  {({ input }) => (
                    <Input
                      placeholder={e.description}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Button type="submit" onSubmit={toggle} >Save changes</Button>
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