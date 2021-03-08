import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeEducation } from '../../redux/actions/user';
import { Input, Button, H2, Nav } from './styled'
import useModal from '../ModalUser/useModal';

const EducationForm = () => {

  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);

  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };
 

  const education = useSelector((state) => state.user.curriculums[index()].education)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    dispatch(changeEducation(formObj, id))
  }

  const { toggle } = useModal();

  return (
    <>
      {
        education.map((e) =>
          <Nav>
            <Form
              onSubmit={formObj => {
                handleSubmit1(formObj, e.id);
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <H2>{language === "spanish" ? "Titulo" : "Title"}</H2>
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

export default EducationForm;