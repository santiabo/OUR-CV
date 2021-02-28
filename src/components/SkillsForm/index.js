import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeSkill } from '../../redux/actions/user';
import { Input, Button } from './styled'
import useModal from '../ModalUser/useModal';

const SkillsForm = (props) => {

  const skills = useSelector((state) => state.user.skills)

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj, id) => {
    dispatch(changeSkill(formObj, id))
  }

  const { toggle } = useModal();
  /* const { handleClose } = props; */


  return (
    <>
      {
        skills.map((e) =>
          <Form
            onSubmit={formObj => {
              handleSubmit1(formObj, e.id);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="area">
                  {({ input }) => (
                    <Input
                      placeholder={e.area}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Field name="tools">
                  {({ input }) => (
                    <Input
                      placeholder={e.place}
                      type="text"
                      {...input}
                    />
                  )}
                </Field>
                <Button type="submit" onSubmit={toggle} >Save changes</Button>
              </form>
            )}
          </Form>
        )
      };
    </>
  );
};

export default SkillsForm;