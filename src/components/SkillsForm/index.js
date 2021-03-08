import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeSkill } from '../../redux/actions/user';
import { Input, Button, H2, Nav } from './styled'
import useModal from '../ModalUser/useModal';
import { Input2 } from "../ExperienceForm/styled";

const SkillsForm = (props) => {

    const language = useSelector((state) => state.language.language);
    const curriculums = useSelector((state) => state.user.curriculums);
  
    const index = () => {
      let index = 0;
      for (var i = 0; i < curriculums.length; i++) {
        if (curriculums[i].language === language) index = i;
      }
      return index;
    };
 

  const skills = useSelector((state) => state.user.curriculums[index()].skills)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    dispatch(changeSkill(formObj, id))
  }

  const { toggle } = useModal();

  return (
    <>
      {
        skills.map((e) =>
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
                    <Input
                      placeholder={e.area}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <H2>{language === "spanish" ? "Herramientas": "Tools"}</H2>
                <Field name="tools">
                  {({ input }) => (
                    <Input2
                      placeholder={e.tools}
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

export default SkillsForm;