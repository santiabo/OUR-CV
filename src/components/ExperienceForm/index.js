import React from "react";
import { useSelector } from 'react-redux';
import { Field, Form } from "react-final-form";
import { useDispatch } from 'react-redux';
import { changeExperience } from '../../redux/actions/user';
import { Input, Button } from './styled'
import useModal from '../ModalUser/useModal';

const UserForm = (props) => {

  const position0 = useSelector((state) => state.user.experience[0].position);
  const place0 = useSelector((state) => state.user.experience[0].place);
  const date0 = useSelector((state) => state.user.experience[0].date);
  const info0 = useSelector((state) => state.user.experience[0].info);

  const position1 = useSelector((state) => state.user.experience[1].position);
  const place1 = useSelector((state) => state.user.experience[1].place);
  const date1 = useSelector((state) => state.user.experience[1].date);
  const info1 = useSelector((state) => state.user.experience[1].info);
 

  const dispatch = useDispatch();
  const handleSubmit1 = (formObj) => {
    console.log("OBJETO", formObj)
    dispatch(changeExperience(formObj))
  }

  const { toggle } = useModal();
  /* const { handleClose } = props; */

  return (
      <Form
        onSubmit={formObj => {
          handleSubmit1(formObj);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="position">
              {({ input }) => (
                <Input
                  placeholder={position0}
                  type="text"
                  {...input}
                />
              )}
            </Field>
            <Field name="experience[0].place">
              {({ input }) => (
                <Input
                  placeholder={place0}
                  type="text"
                  {...input}
                />
              )}
            </Field>
            <Field name="experience[0].date">
              {({ input }) => (
                <Input
                  placeholder={date0}
                  type="text"
                  {...input}
                />
              )}
            </Field>
            <Field name="experience[0].info">
              {({ input }) => (
                <Input
                  placeholder={info0}
                  type="text"
                  {...input}
                />
              )}
            </Field>
            <Field name="experience[1].position">
              {({ input }) => (
                <Input
                  placeholder={position1}
                  type="text"
                  {...input}
                />
              )}
            </Field>
            <Field name="experience[1].place">
              {({ input }) => (
                <Input
                  placeholder={place1}
                  type="text"
                  {...input}
                />
              )}
            </Field>
            <Field name="experience[1].date">
              {({ input }) => (
                <Input
                  placeholder={date1}
                  type="text"
                  {...input}
                />
              )}
            </Field>
            <Field name="experience[1].info">
              {({ input }) => (
                <Input
                  placeholder={info1}
                  type="text"
                  {...input}
                />
              )}
            </Field>
            <Button type="submit" onSubmit={toggle} >Save changes</Button>
          </form>
        )}
      </Form>
  );
};

export default UserForm;